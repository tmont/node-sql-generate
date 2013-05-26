#!/bin/bash

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y mysql-server postgresql libpq-dev

# create mysql user
#mysql -u root < ./scripts/create_mysql_user.sql

# create postgres user
sudo su -c "psql -d postgres -f /vagrant/scripts/create_postgres_user.sql" postgres

# Allow remote connections to MySQL
sudo sed -i 's/^bind-address/#bind-address/' /etc/mysql/my.cnf
sudo restart mysql

# Allow remote connections to Postgres
sudo sed -i "s/^#listen_addresses = 'localhost'/listen_addresses = '\\*'/" /etc/postgresql/9.1/main/postgresql.conf
echo "host all all 0.0.0.0/0 md5" >> /etc/postgresql/9.1/main/pg_hba.conf

sudo /etc/init.d/postgresql restart