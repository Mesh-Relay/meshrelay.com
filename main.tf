# Variables
variable "pvt_key" {}
variable "buddy_webhook_token" {}
variable "ssh_user" {}

# Initialize the DigitalOcean (DO) Provider
provider "digitalocean" {}

# Create DO tags
resource "digitalocean_tag" "blue" {
  name = "blue"
}

# Create a web server
resource "digitalocean_droplet" "new-droplet" {
  image  = "ubuntu-18-04-x64"
  name   = "generated-mesh-droplet"
  region = "nyc3"
  size   = "s-4vcpu-8gb"
  ssh_keys = [
    26055817
  ]
  tags = [digitalocean_tag.blue.id]
}

# Allow access to meta data for the new DO droplet
data "digitalocean_droplet" "new-droplet" {
  name = "generated-mesh-droplet"
  depends_on = [
    digitalocean_droplet.new-droplet
  ]
}

# Allow access to meta data for the old DO droplet
data "digitalocean_droplet" "old-droplet" {
  tag = "prod"
}

# Bootstrap the server
resource "null_resource" "seed" {
  depends_on = [
    data.digitalocean_droplet.new-droplet
  ]

  connection {
    user        = var.ssh_user
    type        = "ssh"
    private_key = var.pvt_key
    timeout     = "2m"
    host        = data.digitalocean_droplet.new-droplet.ipv4_address
  }

  provisioner "file" {
    source      = "pipeline.sh"
    destination = "/tmp/pipeline.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/pipeline.sh",
      # Launch the buddy pipeline
      "/tmp/pipeline.sh ${var.buddy_webhook_token} ${data.digitalocean_droplet.new-droplet.ipv4_address} ${data.digitalocean_droplet.new-droplet.id} ${data.digitalocean_droplet.old-droplet.ipv4_address}",
    ]
  }
}
