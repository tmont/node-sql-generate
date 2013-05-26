#!/bin/bash

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y mysql-server postgresql libpq-dev
pushd /vagrant > /dev/null
./scripts/create_test_users.sh
popd > /dev/null

# Allow remote connections to MySQL
sudo sed -i 's/^bind-address/#bind-address/' /etc/mysql/my.cnf
sudo restart mysql

# Allow remote connections to Postgres
sudo sed -i "s/^#listen_addresses = 'localhost'/listen_addresses = '\\*'/" /etc/postgresql/9.1/main/postgresql.conf
echo "host all all 0.0.0.0/0 md5" >> /etc/postgresql/9.1/main/pg_hba.conf

sudo /etc/init.d/postgresql restart