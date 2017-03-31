#!/bin/bash
cd /etc/webapp/
echo "Installing pm2"
sudo npm install pm2 -g
echo whereis pm2
echo "Installing yarn"
sudo npm install yarn -g
echo whereis yarn
export PATH=$PATH:whereis pm2
export PATH=$PATH:whereis yarn
source ~/.bashrc
sudo yarn install
sudo pm2 start server.js

