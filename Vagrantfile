# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu-1204-amd64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.hostname = "node-sql-generate"
  config.vm.network :forwarded_port, guest: 3306, host: 33060
  config.vm.network :forwarded_port, guest: 5432, host: 54320
  config.vm.provision :shell, :path => "provision.sh"
end
