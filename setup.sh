#!/bin/bash

# Install Node.js v10.x and npm
sudo apt install -y curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
nodejs -v

# Install React.js react-icons library inside base of react project with node_modules in same dir
#cd frontend/dashboard-react
#npm install react-icons --save


# react plugin used to create icons
#cimport { GiMovementSensor } from "react-icons/gi";
