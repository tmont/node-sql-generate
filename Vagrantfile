# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

ENV['VAGRANT_DEFAULT_PROVIDER'] = 'virtualbox'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.define "linux" do |linux|
    linux.vm.box = "ubuntu-1204-amd64"
	  linux.vm.box_url = "http://files.vagrantup.com/precise64.box"
    linux.vm.hostname = "node-sql-generate"
    linux.vm.network :forwarded_port, guest: 3306, host: 33061
    linux.vm.network :forwarded_port, guest: 5432, host: 54320
    linux.vm.provision :shell, :path => "provision/linux-provision.sh"
  
  end

  config.vm.define "windows" do |windows|
    windows.vm.box = "opentable/win-2012r2-standard-amd64-nocm"
    windows.vm.network :forwarded_port, guest: 3389, host: 53389
    windows.vm.network :forwarded_port, guest: 1433, host: 11433
    
    windows.vm.provision :shell, path: "provision/windows-download-sql-server.ps1"
    windows.vm.provision :shell, path: "provision/windows-install-sql-server.cmd"
    windows.vm.provision :shell, path: "provision/windows-disable-firewall.cmd"
    windows.vm.provision :shell, path: "provision/windows-configure-sql-port.ps1"
    windows.vm.provision :shell, path: "provision/windows-enable-rdp.ps1"
  end
  
end
