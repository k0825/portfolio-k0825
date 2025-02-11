resource "aws_iam_role" "lambda_role" {
  name               = "${var.function_name}-role"
  assume_role_policy = file("${path.module}/policies/lambda_assume_role.json")
}

resource "aws_iam_policy" "lambda_policy" {
  name   = "${var.function_name}-policy"
  policy = file("${path.module}/policies/lambda_policy.json")
}

resource "aws_iam_role_policy_attachment" "lambda_role_policy_attachment" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}
