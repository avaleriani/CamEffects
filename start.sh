#!/bin/bash
cd /etc/webapp/
sudo npm install pm2 -g
sudo npm install yarn -g
sudo yarn install
sudo pm2 start server.js
