#!/bin/bash

newman run test-ci-integration.json
echo 'done running api tests'
wdio wdio.conf.js
echo 'done running front-end tests'