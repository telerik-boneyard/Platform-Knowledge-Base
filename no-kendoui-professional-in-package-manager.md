---
title: Kendo UI Professional Is Not Available in the AppBuilder Package Manager
description: Kendo UI Professional is not available in the AppBuilder Package Manager when using a DevCraft license.
type: troubleshooting
page_title: Kendo UI Professional Cannot be Installed via the AppBuilder Package Manager
slug: no-kendoui-professional-in-package-manager
tags: devcraft, kendo, package-manager, manage-packages, appbuilder, licensing
ticketid: 1017056, 1017115

---

## Environment 
<table>
  <tr>
    <td>Service</td>
    <td>Code</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Package Manager</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>
  </tr>
</table>

## Description
Even though you have a DevCraft subscription plan, which provides Kendo UI Professional, you cannot install the package using the AppBuilder **Manage Packages** wizard. The wizard only lets you install Kendo UI Core.

## Cause
Currently, an AppBuilder limitation prevents the Package Manager from respecting your DevCraft subscription which provides access to Kendo UI Professional. The Package Manager respects only Telerik Platform subscription plans and is not aware of additional licenses for Telerik products.

If you hold a Telerik Platform Professional or Developer subscription plan, you will not be able to install Kendo UI Professional from the Manage Packages wizard.

## Solution
{% include /_troubleshooting/no-solution-available.html %}

## Suggested Workaround
You can manually add the files to your project and reference them. 

To do this:

1. Log into Your Account at <a href="http://www.telerik.com" target="_blank" title="Telerik">http://www.telerik.com</a>.
2. Click **Products & Subscriptions** -> **DevCraft Complete/Ultimate**.
3. Click **Download Installer and other resources**.
4. Find **Kendo UI Professional** in the list and click **Browse all product files**.
5. Download the *telerik.kendoui.professional.*.zip file.
6. From the `js` and `styles` folders of the Kendo UI archive copy the following files to your project:
	* `kendo.all.min.js`
	* `kendo.common.min.css`
	* `kendo.[skinName].min.css`, e.g. `kendo.flat.min.css`
	* `kendo.mobile.all.min.css`
	Also, copy from the `styles` folder the `[skinName]` folder, e.g. Flat into the `kendo/styles` folder in your project .
7. Add references to the files in the `index.html` file in your app.
	```
	<link rel="stylesheet" href="styles/kendo.common.min.css" />
	<link rel="stylesheet" href="styles/kendo.flat.min.css" />
	<link rel="stylesheet" href="styles/kendo.mobile.all.min.css" />
   
	<script src="cordova.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/kendo.all.min.js"></script>
	```
