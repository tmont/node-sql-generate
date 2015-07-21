#!/bin/bash

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y mysql-server postgresql libpq-dev

# create mysql user
mysql -u root < /vagrant/scripts/create_mysql_user.sql

# create postgres user
su -c "psql -d postgres -f /vagrant/scripts/create_postgres_user.sql" postgres

# Allow remote connections to MySQL
sed -i 's/^bind-address/#bind-address/' /etc/mysql/my.cnf
restart mysql

# Allow remote connections to Postgres
sed -i "s/^#listen_addresses = 'localhost'/listen_addresses = '\\*'/" /etc/postgresql/9.1/main/postgresql.conf
echo "host all all 0.0.0.0/0 md5" >> /etc/postgresql/9.1/main/pg_hba.conf

/etc/init.d/postgresql restart