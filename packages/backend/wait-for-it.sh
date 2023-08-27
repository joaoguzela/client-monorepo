#!/bin/bash

chmod +x wait-for-it.sh

yarn install
yarn typeorm -d src/typeorm/index.ts migration:run
yarn dev


