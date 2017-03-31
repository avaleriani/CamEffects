#!/bin/bash
cd /etc/webapp/
echo "Installing pm2"
sudo npm install pm2 -g
echo "Installing npm"
sudo npm install
sudo /usr/local/bin/pm2 start server.js

