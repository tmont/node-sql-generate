create schema node_sql_generate;

create table node_sql_generate.foo (
	id int,
	field_1 varchar(30),
	foo_bar_baz int
);

create table node_sql_generate.bar (
	id int,
	foo_id int
);