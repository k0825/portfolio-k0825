resource "aws_lambda_function" "lambda" {
  function_name = var.function_name
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.lambda_repo.repository_url}:latest"
  memory_size   = 512
  timeout       = 300
  architectures = ["arm64"]
  role          = aws_iam_role.lambda_role.arn

  environment {
    variables = {
      AWS_LWA_INVOKE_MODE = "RESPONSE_STREAM"
    }
  }

  depends_on = [
    aws_cloudwatch_log_group.lambda_logs,
    aws_iam_role_policy_attachment.lambda_role_policy_attachment,
    terraform_data.image_push
  ]
}

resource "aws_lambda_function_url" "lambda_url" {
  function_name      = aws_lambda_function.lambda.function_name
  authorization_type = "AWS_IAM"
  invoke_mode        = "RESPONSE_STREAM"
}

resource "aws_lambda_permission" "lambda_permission" {
  statement_id  = "AllowExecutionFromCloudFront"
  action        = "lambda:InvokeFunctionUrl"
  function_name = aws_lambda_function.lambda.function_name
  principal     = "cloudfront.amazonaws.com"
  source_arn    = aws_cloudfront_distribution.distribution.arn
}
