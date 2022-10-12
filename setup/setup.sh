#!/bin/bash

# Must be executed from within the setup directory.

# These scripts are for Ubuntu 16.04.
# Check the individual script files for info on how to modify them for a
# different OS.

# Install MongoDB.
install_mongodb_script_path="./install-mongodb.sh"

# Start MongoDB.
start_mongodb_script_path="./start-mongodb.sh"

# Set MongoDB to automatically start when the system starts.
enable_start_mongodb_on_sys_start_script_path="./enable-start-mongodb-on-system-start.sh"

/bin/bash $install_mongodb_script_path
/bin/bash $start_mongodb_script_path
/bin/bash $enable_start_mongodb_on_sys_start_script_path
