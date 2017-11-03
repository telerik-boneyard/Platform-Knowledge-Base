---
title: How to Capture Fiddler Trace
description: Step by step tutorial for capturing HTTP/HTTPS traffic with Fiddler.
type: how-to
page_title: Generating Fiddler log
slug: capture-fiddler-trace
position:
tags: other, fiddler
teampulseid: 
ticketid: 
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Third-party product</td>	
  </tr>
</table>

## Description
This article provides the general steps for capturing HTTP/HTTPS traffic with Fiddler and saving it as a log file on your local machine. When you submit reports for Telerik Platform related issues, the support engineers are very likely to request a detailed Fiddler log to aid them in the investigation of the issue.

> **IMPORTANT:** When started, Fiddler captures all HTTP and HTTPS traffic, including some sensitive information. Do not share Fiddler logs outside of the private support communication channels (e.g., support tickets).

## Solution
1. Download Fiddler from [here](https://www.telerik.com/download/fiddler) and install it.
1. Run Fiddler and go to **Tools** -> **Fiddler Options**.
1. On the **HTTPS** page, verify that **Capture HTTPS Connects** is enabled.
1. Verify that **Decrypt HTTPS traffic** is enabled with the **...from all processes** option.
1. Minimize Fiddler to tray.
1. Replicate the reported issue.
1. In Fiddler, go to **File** -> **Save** -> **All Sessions** and save the archive to disk. 

This will produce a SAZ file, which you will be able to archive and share with the Telerik Platform support personnel.

## Notes
If the produced Fiddler log doesn't contain HTTPS traffic records, [make sure that the Fiddler Root certificate is trusted on your machine]({% slug trust-fiddler-root-cert %}).

## See Also
* [Fiddler Documentation](https://docs.telerik.com/fiddler/configure-fiddler/tasks/configurefiddler)