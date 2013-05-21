#!/bin/sh

# create mysql user
mysql -u root < ./scripts/create_mysql_user.sql

# create postgres user
sudo su -c "psql -d postgres -f ./scripts/create_postgres_user.sql" postgres
