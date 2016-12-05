---
title: How to Delete the Local Cache and Cookies for the AppBuilder VS Extension and the Windows Client 
description: Step by step tutorial for deleting the Telerik Platform local cache and cookies.
type: how-to
page_title: How to Clear AppBuilder Windows Clients Local Cache and Cookies
slug: delete-local-cache
position:
tags: appbuilder, windows-client, vs-extension
teampulseid: 
ticketid: 
pitsid: 
---
                    
## Environment
<table>
	<tr>
		<td>Service</td>
		<td>{{site.ab-s}} ({{site.ab}})</td>	
	</tr>
	<tr>
		<td>{{site.ab-s}} ({{site.ab}}) clients</td>
		<td>Extension for Visual Studio, classic Windows Desktop</td>	
	</tr>
</table>

## Description

This article provides the general steps for deleting the local cache and cookies for the Extension for Visual Studio and the classic Windows Desktop client.

## Solution

1. In the **Windows Explorer**(File Explorer), navigate to the **%localappdata%\Telerik\BlackDragon** directory.
1. Delete the **IceCookie.bin**, if present.
1. Delete the **Cache** folder.

## See Also

* [How to Navigate to the Logs of the AppBuilder VS Extension and Windows Client]({% slug navigate-local-logs %})