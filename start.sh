#!/bin/bash
cd /etc/webapp/
echo "Installing pm2"
sudo npm install pm2 -g
pathpm2=`whereis -b pm2`
echo "Pm2 yarn: $pathpm2"
echo "Installing yarn"
sudo npm install yarn -g
pathYarn=`whereis -b yarn`
echo "Path yarn: $pathYarn"
export PATH=$PATH:pathpm2
export PATH=$PATH:pathYarn
source ~/.bashrc
sudo yarn install
sudo pm2 start server.js

