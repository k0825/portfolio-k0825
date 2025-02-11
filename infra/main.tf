
module "cdn" {
  source = "./modules/cdn"

  function_name   = "portfolio"
  repository_name = "portfolio"
  source_path     = "${path.root}/../frontend"
}
