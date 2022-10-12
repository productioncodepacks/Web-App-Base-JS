#!/bin/bash

# Must be executed from within the setup directory.

# These commands are for Ubuntu 16.04.
# If you're using a different OS, check the following link for info on how to
# modify.
#
# https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

# Enable automatically starting MongoDB when the system starts.
sudo systemctl enable mongod
