create schema node_sql_generate;

create table node_sql_generate.foo (
	id int not null,
	field_1 varchar(30),
	foo_bar_baz char(255)
);

create table node_sql_generate.bar (
	id int not null,
	foo_id int not null
);
