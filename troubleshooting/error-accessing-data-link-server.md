---
title: Error Accessing the {{site.dls}}
description: Check the server address format if you receive the &quot;Error accessing Data Link Server at http&#58;//myservername&#58;9090&#58; getaddrinfo ENOTFOUND&quot; error.
type: troubleshooting
page_title: Error Accessing the {{site.dls}}
slug: error-accessing-data-link-server
position:
tags: data connector, data link server, data, sql, everlive, backend
teampulseid: 
ticketid: 1000991, 988400
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
When configuring a {{site.dc}} to a database that requires the Data Link server, an error occurs after clicking the **Test** button.

At the same time, opening the {{site.dls}} URL in a web browser returns *Result: OK*. 

## Error Message
`Error accessing Data Link Server at http://myservername:9090: getaddrinfo ENOTFOUND.`

## Cause
The cause for the error is that the {{site.dls}} address that you provided to {{site.tp}} is an internal network address or an fully qualified domain name (FQDN) that cannot be resolved from the Internet. {{site.tp}} requires the **public** FQDN or IP address of the {{site.dls}}.

The OK result when browsing the Data Link server locally means that the {{site.dls}} is correctly installed and running. When you access the URL from a web browser, it is able to resolve the server name because the developer machine is probably in the same network as the {{site.dls}} application.

## Solution
Ensure that the following conditions are met:

- You are entering the public server address on the {{site.dc}} setup page.
- You are entering the address in the correct format. Example: http://myserver.example.com:9090 or http://XXX.XXX.XX.XX:9090.
- The address and the port on which the {{site.dls}} is listening are not blocked by a firewall.

## See Also
* [Getting Started with Relational Data Connectors](http://docs.telerik.com/platform/backend-services/javascript/data-connectors/sql/data-connectors-getting-started)
* [Cannot connect to the database server from the {{site.dls}}]({% slug cannot-connect-to-database-server-from-a-data-link-server %})
* [Error Establishing a Connection to a {{site.dls}}]({% slug error-establishing-connection-to-a-data-link-server %})