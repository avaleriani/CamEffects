#!/bin/bash
cd /etc/webapp/
sudo npm install pm2 -g
sudo npm install yarn -g
export PATH=$PATH:whereis pm2
export PATH=$PATH:whereis yarn
source ~/.bashrc
sudo yarn install
sudo pm2 start server.js
