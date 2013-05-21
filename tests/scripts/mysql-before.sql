create database node_sql_generate;
use node_sql_generate;

create table foo (
	id int,
	field_1 varchar(30),
	foo_bar_baz int
);

create table bar (
	id int,
	foo_id int
);