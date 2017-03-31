#!/bin/bash
cd /etc/webapp/
sudo npm install pm2 -g
sudo npm install yarn -g
export PATH=$PATH:/opt/node/lib/node_modules/pm2/bin
export PATH=$PATH:/opt/node/lib/node_modules/yarn/bin
source ~/.bashrc
sudo yarn install
sudo pm2 start server.js
