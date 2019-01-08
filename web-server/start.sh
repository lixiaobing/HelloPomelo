#!/bin/bash

ls_date=`date +%Y%m%d%H:%M:%S`
nohup node app.js > logs/${ls_date}.log 2>&1 &
