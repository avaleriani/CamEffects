#!/bin/bash
cd /etc/webapp/
npm install yarn
yarn install
pm2 start server.js
