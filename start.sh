#!/bin/bash
cd /etc/webapp/
npm install pm2 -g
npm install yarn -g
yarn install
pm2 start server.js
