#!/bin/sh

# create mysql user
echo "create user root@localhost identified by 'password'; grant all on *.* to root@localhost identified by 'password';" \
| mysql -u root

# create postgres user
sudo su - postgres
psql -d postgres -c "create user root with password 'password' superuser;"
exit
