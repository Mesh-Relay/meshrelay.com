# Configure the DigitalOcean Provider
provider "digitalocean" {}

# Create a web server
resource "digitalocean_droplet" "web-test" {
  image  = "ubuntu-18-04-x64"
  name   = "web-test-1"
  region = "nyc3"
  size   = "s-4vcpu-8gb"
  ssh_keys = [
    26055817
  ]
}
