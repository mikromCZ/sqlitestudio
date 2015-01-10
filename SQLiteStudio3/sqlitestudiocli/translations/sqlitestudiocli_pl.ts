<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="pl_PL">
<context>
    <name>CLI</name>
    <message>
        <source>Current database: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No current working database is set.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type %1 for help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not add database %1 to list.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closed</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommand</name>
    <message>
        <source>Usage: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandAdd</name>
    <message>
        <source>Could not add database %1 to list.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database added: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>adds new database to the list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds given database pointed by &lt;path&gt; with given &lt;name&gt; to list the databases list. The &lt;name&gt; is just a symbolic name that you can later refer to. Just pick any unique name. For list of databases already on the list use %1 command.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>name</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>path</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandCd</name>
    <message>
        <source>Changed directory to: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not change directory to: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>changes current workind directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Very similar command to &apos;cd&apos; known from Unix systems and Windows. It requires a &lt;path&gt; argument to be passed, therefore calling %1 will always cause a change of the directory. To learn what&apos;s the current working directory use %2 command and to list contents of the current working directory use %3 command.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>path</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandClose</name>
    <message>
        <source>Cannot call %1 when no database is set to be current. Specify current database with %2 command or pass database name to %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection to database %1 closed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No such database: %1. Use %2 to see list of known databases.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closes given (or current) database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Closes database connection. If the database was already closed, nothing happens. If &lt;name&gt; is provided, it should be name of the database to close (as printed by %1 command). The the &lt;name&gt; is not provided, then current working database is closed (see help for %2 for details).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>name</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandDbList</name>
    <message>
        <source>No current working database defined.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Databases:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <comment>CLI db name column</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <comment>CLI connection state column</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Closed</source>
        <comment>CLI connection state column</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection</source>
        <comment>CLI connection state column</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database file path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Closed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>prints list of registered databases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prints list of databases registered in the SQLiteStudio. Each database on the list can be in open or closed state and .dblist tells you that. The current working database (aka default database) is also marked on the list with &apos;*&apos; at the start of its name. See help for %1 command to learn about the default database.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandDesc</name>
    <message>
        <source>shows details about the table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>table</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandDir</name>
    <message>
        <source>lists directories and files in current working directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is very similar to &apos;dir&apos; command known from Windows and &apos;ls&apos; command from Unix systems.

You can pass &lt;pattern&gt; with wildcard characters to filter output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pattern</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandExit</name>
    <message>
        <source>quits the application</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quits the application. Settings are stored in configuration file and will be restored on next startup.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandHelp</name>
    <message>
        <source>shows this help message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use %1 to learn about certain commands supported by the command line interface (CLI) of the SQLiteStudio.
To see list of supported commands, type %2 without any arguments.

When passing &lt;command&gt; name, you can skip special prefix character (&apos;%3&apos;).

You can always execute any command with exactly single &apos;--help&apos; option to see help for that command. It&apos;s an alternative for typing: %1 &lt;command&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>command</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No such command: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type &apos;%1&apos; for list of available commands.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Aliases: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandHistory</name>
    <message>
        <source>Current history limit is set to: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>prints history or erases it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When no argument was passed, this command prints command line history. Every history entry is separated with a horizontal line, so multiline entries are easier to read.

When the -c or --clear option is passed, then the history gets erased.
When the -l or --limit option is passed, it sets the new history entries limit. It requires an additional argumentsaying how many entries do you want the history to be limited to.
Use -ql or --querylimit option to see the current limit value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Console history erased.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid number: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>History limit set to %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandMode</name>
    <message>
        <source>Current results printing mode: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid results printing mode: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New results printing mode: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>tells or changes the query results format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When called without argument, tells the current output format for a query results. When the &lt;mode&gt; is passed, the mode is changed to the given one. Supported modes are:
- CLASSIC - columns are separated by a comma, not aligned,
- FIXED   - columns have equal and fixed width, they always fit into terminal window width, but the data in columns can be cut off,
- COLUMNS - like FIXED, but smarter (do not use with huge result sets, see details below),
- ROW     - each column from the row is displayed in new line, so the full data is displayed.

The CLASSIC mode is recommended if you want to see all the data, but you don&apos;t want to waste lines for each column. Each row will display full data for every column, but this also means, that columns will not be aligned to each other in next rows. The CLASSIC mode also doesn&apos;t respect the width of your terminal (console) window, so if values in columns are wider than the window, the row will be continued in next lines.

The FIXED mode is recommended if you want a readable output and you don&apos;t care about long data values. Columns will be aligned, making the output a nice table. The width of columns is calculated from width of the console window and a number of columns.

The COLUMNS mode is similar to FIXED mode, except it tries to be smart and make columns with shorter values more thin, while columns with longer values get more space. First to shrink are columns with longest headers (so the header names are to be cut off as first), then columns with the longest values are shrinked, up to the moment when all columns fit into terminal window.
ATTENTION! The COLUMNS mode reads all the results from the query at once in order to evaluate column widhts, therefore it is dangerous to use this mode when working with huge result sets. Keep in mind that this mode will load entire result set into memory.

The ROW mode is recommended if you need to see whole values and you don&apos;t expect many rows to be displayed, because this mode displays a line of output per each column, so you&apos;ll get 10 lines for single row with 10 columns, then if you have 10 of such rows, you will get 100 lines of output (+1 extra line per each row, to separate rows from each other).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandNullValue</name>
    <message>
        <source>Current NULL representation string: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>tells or changes the NULL representation string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If no argument was passed, it tells what&apos;s the current NULL value representation (that is - what is printed in place of NULL values in query results). If the argument is given, then it&apos;s used as a new string to be used for NULL representation.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandOpen</name>
    <message>
        <source>Cannot call %1 when no database is set to be current. Specify current database with %2 command or pass database name to %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not add database %1 to list.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File %1 doesn&apos;t exist in %2. Cannot open inexisting database with %3 command. To create a new database, use %4 command.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database %1 has been open and set as the current working database.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>opens database connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Opens connection to the database. If no additional argument was passed, then the connection is open to the current default database (see help for %1 for details). However if an argument was passed, it can be either &lt;name&gt; of the registered database to open, or it can be &lt;path&gt; to the database file to open. In the second case, the &lt;path&gt; gets registered on the list with a generated name, but only for the period of current application session. After restarting application such database is not restored on the list.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>name</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>path</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandPwd</name>
    <message>
        <source>prints the current working directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the same as &apos;pwd&apos; command on Unix systems and &apos;cd&apos; command without arguments on Windows. It prints current working directory. You can change the current working directory with %1 command and you can also list contents of the current working directory with %2 command.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandRemove</name>
    <message>
        <source>No such database: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database removed: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New current database set:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>removes database from the list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removes &lt;name&gt; database from the list of registered databases. If the database was not on the list (see %1 command), then error message is printed and nothing more happens.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>name</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandSql</name>
    <message>
        <source>No working database is set.
Call %1 command to set working database.
Call %2 to see list of all databases.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database is not open.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>executes SQL query</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This command is executed every time you enter SQL query in command prompt. It executes the query on the current working database (see help for %1 for details). There&apos;s no sense in executing this command explicitly. Instead just type the SQL query in the command prompt, without any command prefixed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sql</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Too many columns to display in %1 mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Row %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Query execution error: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandTables</name>
    <message>
        <source>No such database: %1. Use .dblist to see list of known databases.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot call %1 when no database is set to be current. Specify current database with %2 command or pass database name to %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database %1 is closed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>prints list of tables in the database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prints list of tables in given &lt;database&gt; or in the current working database. Note, that the &lt;database&gt; should be the name of the registered database (see %1). The output list includes all tables from any other databases attached to the queried database.
When the -s option is given, then system tables are also listed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>database</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandTree</name>
    <message>
        <source>No current working database is selected. Use %1 to define one and then run %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tables</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Views</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Triggers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>prints all objects in the database as a tree</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prints all objects (tables, indexes, triggers and views) that are in the database as a tree. The tree is very similar to the one that you can see in GUI client of the SQLiteStudio.
When -c option is given, then also columns will be listed under each table.
When -s option is given, then also system objects will be printed (sqlite_* tables, autoincrement indexes, etc).
The database argument is optional and if provided, then only given database will be printed. This is not a registered database name, but instead it&apos;s an internal SQLite database name, like &apos;main&apos;, &apos;temp&apos;, or any attached database name. To print tree for other registered database, call %1 first to switch the working database, and then use %2 command.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CliCommandUse</name>
    <message>
        <source>No current database selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current database: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No such database: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>changes default working database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Changes current working database to &lt;name&gt;. If the &lt;name&gt; database is not registered in the application, then the error message is printed and no change is made.

What is current working database?
When you type a SQL query to be executed, it is executed on the default database, which is also known as the current working database. Most of database-related commands can also work using default database, if no database was provided in their arguments. The current database is always identified by command line prompt. The default database is always defined (unless there is no database on the list at all).

The default database can be selected in various ways:
- using %1 command,
- by passing database file name to the application startup parameters,
- by passing registered database name to the application startup parameters,
- by restoring previously selected default database from saved configuration,
- or when default database was not selected by any of the above, then first database from the registered databases list becomes the default one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>name</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Insufficient number of arguments.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Too many arguments.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid argument value: %1.
Expected one of: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown option: %1</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Option %1 requires an argument.</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>string</source>
        <comment>CLI command syntax</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Command line interface to SQLiteStudio, a SQLite manager.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables debug messages on standard error output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Lemon parser debug messages for SQL code assistant.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lists plugins installed in the SQLiteStudio end exists.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database file to open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
