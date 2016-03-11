---
title: Error Establishing Connection to a Data Link Server
description: Troubleshooting the "Error accessing Data Link Server at http://localhost:9090: connect ECONNREFUSED" error
type: Troubleshooting
page_title: Error Establishing Connection to a Data Link Server
slug: data-dc-connection-error
position: 200
tags: data connector, data link server, data, sql, everlive, backend, connection
teampulseid: 
ticketid: 981179, 967275, 950185
pitsid:
---

<!-- Environment Table -->
<!-- TO DO:
     We need to check how such can be developed according to our needs:
 	 We don't need Header roll, but rather a title: Environment.
     E.g. - Telerik Product, Version, SDK, SDK version, Mobile OS Vendor, Mobile OS Vendor Version, Client, Client Version, App Type (Hybrid/NativeScript/Native), 3rd party integration, Browser Type, Browser Version -->
| Service:     | Data
| Area: | Data Connectors |
| Data Link Server Version: | Any


## Description

When establishing a connection between a Data Connector in Telerik Platform and a Data Link server installed in your company premises, the mentioned error occurs on the setup page when trying to **Test** the configured Data Connector.

Opening the Data Link Server URL in your browser returns *Result: OK*.  

## Error Message

Error accessing Data Link Server at http://localhost:9090: connect ECONNREFUSED.

## Cause

The cause for the error is that Telerik Platform is not able to resolve the provided Data Link Server URL. Telerik Platform must use a public FQDN or IP address of the server.

The OK result when browsing the Data Link server locally means that the Data Link server is correctly installed and running. When you are accessing the URL from the browser, it is able to resolve the server name to *localhost* because the developer machine is probably in the same network as the Data Link Server application. ??? rework this - The URL specified as *localhost* refuses the connection, because *localhost* is resolved to another supported URL. 

## Solution

Make sure to:

- Obtain the public address of the server, for example, http://myserver.example.com:9090 or http://XXX.XXX.XX.XX:9090. Enter this address in the Data Connector setup page in Telerik Platform. 
- The address and the port on which the service is listening are not blocked by a corporate firewall 
- Another server process is not running on this port
- 
## See Also

* [Getting Started with Relational Data Connectors](http://docs.telerik.com/platform/backend-services/javascript/data-connectors/sql/data-connectors-getting-started)
* ??? - link to similar KBs