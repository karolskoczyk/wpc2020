#!/bin/bash


yarn webpack
aws s3 cp dist/main.js s3://s194677/main.js --acl=public-read
aws s3 cp dist/index.html s3://s194677/index.html --acl=public-read