#!/bin/sh

# create mysql user
mysql -u root -ppassword < ./create_mysql_user.sql

# create postgres user
sudo su -c "psql -d postgres -f ./create_postgres_user.sql" postgres
