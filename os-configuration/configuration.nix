{ config, pkgs, ... }:

{
  imports =
    [ 
      ./hardware-configuration.nix
    ];

  # Bootloader.
  boot.loader.grub.enable = true;
  boot.loader.grub.device = "/dev/vda";
  boot.loader.grub.useOSProber = true;

  # Use latest kernel.
  boot.kernelPackages = pkgs.linuxPackages_latest;

  networking.hostName = "nixos"; # hostname.
  networking.nameservers = ["8.8.8.8" "1.1.1.1"];

  # Note: the following lines should be replaced with your bridge connection configured on your host machine
  networking.interfaces.enp1s0.ipv4.addresses = [{ address="192.168.68.100"; prefixLength = 24; }]; # VM Ip Address
  networking.defaultGateway = "192.168.68.3"; # Host IP (Bridge) Address

  # Enable networking
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "UTC";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";

  # Configure keymap in X11
  services.xserver.xkb = {
    layout = "us";
    variant = "";
  };

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.testuser = {
    isNormalUser = true;
    description = "test-user";
    extraGroups = [ "networkmanager" "wheel" ];
  };

  # System Packages
  environment.systemPackages = with pkgs; [
     neovim
     git
     k6
     bun
     nodejs_24
     prisma_7
  ];

  # MySQL
  services.mysql = {
    enable = true;
    package = pkgs.mariadb;
  };

  # Open ports in the firewall.
  networking.firewall.allowedTCPPorts = [ 4000 ];
  system.stateVersion = "25.11";
}
