#!/bin/bash

chmod +x wait-for-it.sh

wait-for-it.sh apiclient-db:5432 -t 60

yarn install
yarn typeorm -d src/typeorm/index.ts migration:run
yarn dev


