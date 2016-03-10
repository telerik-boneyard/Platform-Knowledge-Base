---
title: Error Accessing Data Link Server
description: Troubleshooting the "Error accessing Data Link Server at http://myservername:9090: getaddrinfo ENOTFOUND" error
type: Troubleshooting
page_title: Error accessing Data Link Server
slug: data-dc-error-access
position: 100
tags: data connector, data link server, data, sql, everlive, backend
teampulseid: 
ticketid: 1000991, 988400
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

Opening the Data Link server URL in your browser returns *Result: OK*.  

## Error Message

Error accessing Data Link Server at http://myservername:9090: getaddrinfo ENOTFOUND.

## Cause

The cause for the error is that Telerik Platform is not able to resolve the provided Data Link server URL. Telerik Platform must use a public FQDN or IP address of the server.

The OK result when browsing the Data Link server locally means that the Data Link server is correctly installed and running. When you are accessing the URL from the browser, it is able to resolve the server name as the developer machine is probably in the same network as the Data Link server application. 

## Solution

Make sure to:

- Obtain the public address of the server, for example, http://myserver.example.com:9090 or http://XXX.XXX.XX.XX:9090. Enter this address in the Data Connector setup page in Telerik Platform. 
- The address and the port on which the service is listening are not blocked by a corporate firewall 

## See Also

* [Getting Started with Relational Data Connectors](http://docs.telerik.com/platform/backend-services/javascript/data-connectors/sql/data-connectors-getting-started)
* ??? - link to similar KBs