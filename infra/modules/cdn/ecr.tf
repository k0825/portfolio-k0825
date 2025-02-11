resource "aws_ecr_repository" "lambda_repo" {
  name = var.repository_name
}

data "aws_caller_identity" "current" {}

resource "terraform_data" "image_push" {
  triggers_replace = timestamp()

  provisioner "local-exec" {
    // ローカルのスクリプトを呼び出す
    command = <<-EOF
      aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin ${data.aws_caller_identity.current.account_id}.dkr.ecr.ap-northeast-1.amazonaws.com; \
      docker buildx build -t portfolio:latest -f ${var.source_path}/Dockerfile.production ${var.source_path}; \
      docker tag portfolio:latest ${aws_ecr_repository.lambda_repo.repository_url}:latest; \
      docker push ${aws_ecr_repository.lambda_repo.repository_url}:latest
    EOF
  }
}
