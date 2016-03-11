---
title: Cannot connect to the database server from the {{site.dls}}
description: Check your connection string if you receive the &quot;Cannot connect to database&quot; error.
type: troubleshooting
page_title: Unsuccessful connection between {{site.dls}} and database
slug: cannot-connect-to-database-server-from-a-data-link-server
position:
tags: data connector, data link server, data, sql, everlive, backend, connection
teampulseid: 
ticketid: 1005975, 950185
pitsid:
---

## Environment

<table>
  <tr>
    <td>Service</td>
    <td>Data</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Data Connectors</td>	
  </tr>
</table>

## Description

When configuring a {{site.dc}} to a database that requires the {{site.dls}}, an error occurs after clicking the **Test** button.

At the same time, opening the {{site.dls}} URL in a web browser returns *Result: OK*.

## Error Message

`Data Link Server Error: Cannot connect to database. [Telerik Platform] The connection to the host [hostname], named instance [instance name] failed. Error: [message]. Verify the server and instance names and check that no firewall is blocking UDP traffic to port 1434.  For SQL Server 2005 or later, verify that the SQL Server Browser Service is running on the host.`

## Cause

The error signifies that the {{site.dls}} cannot connect to the database even though the connection between {{site.tp}} and the {{site.dls}} is successful.

## Solution

Ensure that the connection string that you supplied uses the correct format for the database:

* Microsoft SQL Server

	`<machine-name>\<database-server-name>;DatabaseName=<database-name>;user=<username>;password=<password-string>`
	
	**Example:**<br>
	`win15\SQLServer;DatabaseName=ExampleDatabase;user=jsmith;password=pa$$`

* Oracle

	`<database-server-address>:<port-number>;ServiceName=<database-name>;User=<username>;Password=<password-string>`

	**Example:**<br>
	`lnx15.example.com:1521;ServiceName=ORCL;User=jsmith;Password=pa$$`

* MySQL Enterprise

	`<database-server-address>:<port-number>;DatabaseName=<database-name>;User=<username>;Password=<password-string>`

	**Example:**<br>
	`lnx15.example.com:3306;DatabaseName=ExampleDatabase;User=jsmith;Password=pa$$`

* PostgreSQL 

	`<database-server-address>:<port-number>;DatabaseName=<database-name>;User=<username>;Password=<password-string>`

	**Example:**<br>
	`lnx15.example.com:5432;DatabaseName=ExampleDatabase;User=jsmith;Password=pa$$`
	
## See Also

* [Getting Started with Relational Data Connectors](http://docs.telerik.com/platform/backend-services/javascript/data-connectors/sql/data-connectors-getting-started)
* [Error Establishing a Connection to a {{site.dls}}]({% slug error-establishing-connection-to-a-data-link-server %})
* [Error Accessing the {{site.dls}}]({% slug error-accessing-data-link-server %})