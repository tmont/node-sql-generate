create database node_sql_generate;
use node_sql_generate;

create table foo (
	id int not null,
	field_1 varchar(30),
	foo_bar_baz char(255)
);

create table bar (
	id int not null,
	foo_id int not null
);
