terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>5.95.0"
    }
  }

  backend "s3" {
    bucket = "ikari-tfstate"
    key    = "portfolio-k0825/terraform.tfstate"
    region = "ap-northeast-1"
  }
}
