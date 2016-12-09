---
title: Cannot Install the AppBuilder Extension for Visual Studio
description: After successfully downloading the VSIX package for AppBuilder Visual Studio extension, the installation process fails.
type: troubleshooting
page_title: Cannot Install the VSIX Package of the Telerik Platform Extension for Visual Studio
slug: cannot-install-vse-vsix
position: 
tags: appbuilder, vs-extension
teampulseid: 
ticketid: 1062709, 1078725, 1078719, 1078443
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>	
  </tr>
  <tr>
    <td>{{site.ab-s}} ({{site.ab}}) client</td>
    <td>Extension for Visual Studio</td>	
  </tr>
</table>

## Description

The latest VSIX package for the {{site.ab}} extension for Visual Studio cannot be installed.

## Error Message

The file is not a valid VSIX package.

### Error log
```
Date/Time - Microsoft VSIX Installer
Date/Time - -------------------------------------------
Date/Time - Initializing Install...
Date/Time - Microsoft.VisualStudio.ExtensionManager.InvalidExtensionPackageException: 
The file is not a valid VSIX package. ---> System.IO.FileFormatException: File contains corrupted data.
  
```

## Cause

During the download and installation processes some antivirus programs and firewalls block or delete some of the files that are included in the **{{site.ab}}.vsix** archive.

## Solution

To resolve the issue, try the following solutions:

* Download the [VSIX package for the {{site.ab}} extension for Visual Studio](http://cdn.icenium.com/live/vs/AppBuilder.vsix) using a different network.
* Stop your antivirus program/firewall during the download and installation processes.

Now you should be able to install the {{site.ab}} extension for Visual Studio.