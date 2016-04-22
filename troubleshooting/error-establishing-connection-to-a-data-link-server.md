---
title: Error Establishing a Connection to a {{site.dls}}
description: Check the server address format if you receive the &quot;Error accessing Data Link Server at http&#58;//localhost&#58;9090&#58; connect ECONNREFUSED&quot; error.
type: troubleshooting
page_title: Unsuccessful Connection to {{site.dls}}
slug: error-establishing-connection-to-a-data-link-server
position: 
tags: data connector, data link server, data, sql, everlive, backend, connection
teampulseid: 
ticketid: 981179, 967275, 950185
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Data (Backend Services)</td>	
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
`Error accessing Data Link Server at http://localhost:9090: connect ECONNREFUSED.`

## Cause
The cause for the error is that {{site.tp}} is not able to resolve the provided {{site.dls}} URL because *localhost* is not a valid address. You must provide a public fully qualified domain name (FQDN) or IP address to {{site.tp}}.

## Solution
Ensure that the following conditions are met:

* You are entering the public server address on the {{site.dc}} setup page.
* You are entering the address in the correct format. Example: http://myserver.example.com:9090 or http://203.0.113.33:9090.

## See Also
* [Getting Started with Relational Data Connectors](http://docs.telerik.com/platform/backend-services/javascript/data-connectors/sql/data-connectors-getting-started)
* [Cannot connect to the database server from the {{site.dls}}]({% slug cannot-connect-to-database-server-from-a-data-link-server %})
* [Error Accessing the {{site.dls}}]({% slug error-accessing-data-link-server %})