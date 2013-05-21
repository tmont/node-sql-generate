#!/bin/sh

# create mysql user
echo "create user sqlgenerate@localhost identified by 'password'; grant all on *.* to sqlgenerate@localhost identified by 'password';" | mysql -u root

# create postgres user
sudo su - postgres
psql -d postgres -c "create user 'sqlgenerate' with password 'password' superuser;"
exit
