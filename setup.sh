#!/bin/bash

# Install Node.js v10.x and npm
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
nodejs -v
