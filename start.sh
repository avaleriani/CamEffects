#!/bin/bash

#Functions
command_exists () {
    type "$1" &> /dev/null ;
}

#Actions
cd /etc/webapp/



if ! command_exists pm2 ; then
    echo "Installing pm2"
    sudo npm install pm2 -g
else
    sudo /usr/local/bin/pm2 stop all
fi

if ! command_exists npm ; then
    echo "Installing npm"
    sudo npm install
fi


sudo /usr/local/bin/pm2 start server.js

echo "Server started successfully"