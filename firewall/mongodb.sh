#!/bin/bash

# Must be executed from within the firewall directory.

# These commands are for Ubuntu 16.04.
# If you're using a different OS, check the following link for info on how to
# modify.
#
# https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

# Allow access on MongoDB's default port while specifying the IP address of
# another server that will be explicitly allowed to connect.

# TODO before executing - replace your_other_server_ip with your other server's IP.
sudo ufw allow from your_other_server_ip/32 to any port 27017

# Verify the change.
sudo ufw status
