#!/bin/bash

# ping localhost:5173, if no response, exit and say server must be running
running=`lsof -i tcp:5173`

if [[ -n $running ]]; then 
  # echo "Server running"
  bunx decktape generic http://localhost:5173/slides/"$1" $2
else 
  echo "Server not running" 
fi;

