---
title: How to Include the Telerik UI for NativeScript Package
description: Tutorial on how to include the Telerik UI for NativeScript package to AppBuilder project
type: how-to
page_title: How to add the Telerik UI for NativeScript package to an AppBuilder project
slug: include-nativescript-ui-package
position:
tags: appbuilder, nativescript
teampulseid:
ticketid:
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Package management</td>
  </tr>
  <tr>
    <td>Mobile Development type</td>
    <td>Native (NativeScript)</td>
  </tr>
</table>

## Description
This article provides the general steps required to include the Telerik UI for NativeScript package in your project.

## Solution
#### Telerik UI for NativeScript (Free)
1. Open your project.
1. Right-click on your project name and select <strong>Manage Packages</strong>.
1. Find the <code>nativescript-telerik-ui</code> package inside the <strong>NPM</strong> panel and click <strong>Install</strong>.

#### Telerik UI for NativeScript (Pro)
1.	Navigate to <code>www.telerik.com/account</code> and log in your account.
1.  Under <strong>Products and Subscriptions</strong>, select <strong>UI for NativeScript</strong>.
1.  In the newly opened window click on <strong>Download</strong>.
1.  Select the <code>Telerik_UI_for_NativeScript.zip</code> file under <strong>Other Setup Files</strong>.
1.	Extract <code>nativescript-ui-pro.tgz</code> from the <strong>Packages</strong> folder of the downloaded file.
1.	Open your project and right-click on the folder where you want to add the package.
1.	Select <strong>Add > Existing Files</strong> and upload the <code>nativescript-ui-pro.tgz</code>.
1.	Open <code>package.json</code> and add the dependency <code>nativescript-telerik-ui-pro": "file:{ path to the nativescript-ui-pro.tgz file }</code>. For example if you placed the file in <code>app/packages</code> the dependency will be <code>nativescript-telerik-ui-pro": "file:app/packages/nativescript-ui-pro.tgz</code>.

IMPORTANT: The NPM <code>nativescript-telerik-ui-pro</code> package is a for the Trial version.

## See Also
* [Telerik UI for NativeScript Documentation](http://docs.telerik.com/devtools/nativescript-ui/introduction)
