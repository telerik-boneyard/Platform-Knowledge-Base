---
title: Code Tab in the Telerik Platform In-Browser Client is Slow
description: Telerik AppBuilder never finishes loading a project. In-Browser client is hanging while loading an application. Code tab is very slow.
type: troubleshooting
page_title: Cannot Load Apps in the In-Browser Client
slug: in-browser-does-not-load-projects
tags: in-browser-client, offline, cloud-services
teampulseid: 
ticketid: 1071694, 1071169, 1068303, 1065113
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.tp}} General</td>	
  </tr>
  <tr>
    <td>{{site.ab-s}} ({{site.ab}}) client</td>
    <td>In-Browser</td>	
  </tr>  
</table>

## Description

To facilitate development with slower internet connection, {{site.tp}} In-Browser client caches the project data during loading. The browsers have restrictions of the amount of data that can be stored in the cache therefore, for some projects the requests may cause the browser to be slow.

## Solution

{% include /_troubleshooting/no-solution-available.html %}

## Suggested Workarounds

### Workaround #1

[Clear the browser cache and {{site.tp}} cookies]({% slug clear-browser-cache %})

### Workaround #2

Disable the Offline mode:

1. Log in the **{{site.tp}} In-Browser Client**.
1. Open an application that still loads or create a new one.
1. Open the **Code** tab.
1. Click on the **gear** icon (in the top-right corner) and click **Options**.
1. Open the **Code Editor** tab.
1. Uncheck the **Enable Offline Mode** option.    

Now, you should be able to open your project successfully.

## Notes

The {{site.tp}} team is working on a fix for this issue scheduled for the {{site.tab}} 3.6 major release.