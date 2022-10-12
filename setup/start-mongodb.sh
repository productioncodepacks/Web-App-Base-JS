#!/bin/bash

# Must be executed from within the setup directory.

# These commands are for Ubuntu 16.04.
# If you're using a different OS, check the following link for info on how to
# modify.
#
# https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

# Start MongoDB with systemctl.
sudo systemctl start mongod

# Check MongoDB is active.
sudo systemctl is-active --quiet mongod
is_active=$?

# Output if is active to console.
echo -e "\n\n"
if [ $is_active -eq 0 ];
then
  echo ">>> MongoDB is active"
else
  echo ">>> Something went wrong. MongoDB is NOT active"
fi
