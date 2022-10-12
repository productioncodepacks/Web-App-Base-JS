#!/bin/bash

# Must be executed from within the setup directory.

# These commands are for Ubuntu 16.04.
# If you're using a different OS, check the following link for info on how to
# modify.
#
# https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

# Get MongoDB from the official MongoDB repository.
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

# Add the MongoDB repository details so apt will know where to download the
# packages from.
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

# Update the packages list.
sudo apt-get update -y

# Install the MongoDB package.
sudo apt-get install -y mongodb-org
