#!/usr/bin/env node

var program = require('commander'),
	chalk = require('chalk'),
	generate = require('../');

function list(val) {
  return val.split(',').map(function(re) {
    try {
      return new RegExp(re);
    } catch (e) {
      console.error('\n  error: bad regular expression: %s\n', re);
      process.exit(1);
    }
  });
}

program
	.version(require('../package.json').version)
	.option('--dsn <dsn>', 'Connection string')
	.option('-d, --dialect <dialect>', 'Specify the SQL dialect: "mysql", "pg" or "mssql"')
	.option('-o, --output-file <file>', 'Output to this file; defaults to stdout')
	.option('-i, --indent <token>', 'Indentation token; defaults to a TAB character', '\t')
	.option('-D, --database <name>', 'Name of database to extract from')
	.option('-s, --schema <name>', 'Name of schema to extract from (Postgres/MSSQL only)')
	.option('-r, --exclude-regex <list of RE\'s>', 'List of regular expressions for tables we want to skip', list)
	.option('--camelize', 'Convert underscored names to camel case, requires sql >= 0.18.0', false)
	.option('--eol <token>', 'Line terminator token; defaults to "\\n"', '\n')
	.option('--mode <mode>', 'The permission mode of the generated file; defaults to 0644', 0644)
	.option('--encoding <encoding>', 'The encoding to use for writing; defaults to "utf8"', 'utf8')
	.option('--prepend <text>', 'Prepend text to the beginning of the file')
	.option('--append <text>', 'Append text to the end of the file')
	.option('--modularize', 'Omit "require(\'sql\')" and wrap generated code in "module.exports = function(sql) {...}"')
	.option('--omit-comments', 'Omit autogenerated comments', false)
	.option('--include-schema', 'Include schema in definition', false)
	.option('--include-meta', 'Include metadata for columns (purely information, not used by sql lib)', false)
	.option('-v, --verbose', 'Print debugging information', false)
	.on('--help', function() {
		console.log('Example DSN:');
		console.log('  PostgreSQL: "postgres://user:password@host:5432/database"');
		console.log('       MySQL: "mysql://user:password@host:3306/database"');
		console.log('       MSSQL: "mssql://server=server[\\instance];database=database;user=user;password=password;"');
	})
	.parse(process.argv);

function log(type, message) {
	if (!program.verbose && type !== 'error' && type !== 'warn') {
		return;
	}

	var color;
	switch (type) {
		case 'debug':
			color = 'grey';
			break;
		case 'info':
			color = 'green';
			break;
		case 'warn':
			color = 'yellow';
			break;
		case 'error':
			color = 'red';
			break;
		default:
			color = 'white';
			break;
	}

	console.error(chalk[color](message.toString()));
}

program.log = log;
program.outputFile = program.outputFile || 1;

generate(program, function(err) {
	if (err) {
		log('error', err);
	}
	process.exit(err ? 1 : 0);
});
