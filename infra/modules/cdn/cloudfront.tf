locals {
  origin_id = "lambda"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}


resource "aws_cloudfront_distribution" "distribution" {
  provider        = aws.us_east_1
  aliases         = []
  enabled         = true
  http_version    = "http2"
  is_ipv6_enabled = true
  price_class     = "PriceClass_200"
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cache_policy_id        = data.aws_cloudfront_cache_policy.cache_policy.id
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id       = local.origin_id
    viewer_protocol_policy = "redirect-to-https"
  }
  ordered_cache_behavior {
    path_pattern           = "/_next/image"
    cache_policy_id        = aws_cloudfront_cache_policy.next_image_cache_policy.id
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }
  origin {
    domain_name              = replace(replace(aws_lambda_function_url.lambda_url.function_url, "https://", ""), "/", "")
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    origin_id                = local.origin_id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    ssl_support_method             = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = aws_lambda_function.lambda.function_name
  origin_access_control_origin_type = "lambda"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_cache_policy" "cache_policy" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_cache_policy" "next_image_cache_policy" {
  comment     = "Cache policy for Next.js images"
  default_ttl = 86400
  max_ttl     = 31536000
  min_ttl     = 1
  name        = "NextImageCachePolicy"
  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "all"
    }
  }
}
