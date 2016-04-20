---
title: Kendo UI Widgets Don't Load in a Hybrid App
description: After installing Kendo UI via the Package Manager, widget X doesn't work.
type: troubleshooting
page_title: Widgets from the Kendo UI Packages Don't Load
slug: widget-missing-in-kendoui-professional-package
tags: kendo, package-manager
ticketid: 1017633

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
After installing Kendo UI via the **Manage Packages** wizard, widgets from the respective bundle (e.g., Grid, Scheduler, DropDownList) still don't load. 

If the widgets are instantiated in code, an error is thrown in the Simulator and device consoles.

## Error Message
`Uncaught TypeError: $(...).kendo[WidgetName] is not a function`

## Cause

The Kendo UI Core and Professional packages in the Package Manager do not include the entire Core and Professional libraries. These packages are tailored for mobile development only and include the following:

* **Kendo UI Core**: common Kendo UI framework features + Kendo UI Mobile
* **Kendo UI Professional**: common Kendo UI framework features + Kendo UI Mobile + Kendo UI DataViz

Kendo UI Web widgets are not included in these packages, because most of them are not optimized for mobile app development.

## Solution

{% include /_troubleshooting/no-solution-available.html %}

## Suggested Workaround

You can manually add the complete Kendo UI libraries to your project and reference them. 

To do this, follow the steps below for the library of your choice:

* Download and reference **Kendo UI Core**.
	1. Download the Kendo UI Core archive from <a href="http://www.telerik.com/download/kendo-ui-core" title="Kendo UI Core" target="_blank">here</a>. 
	2. From the `js` and `styles` folders of the Kendo UI archive copy the following files to your project:
		* `kendo.ui.core.min.js`
		* `kendo.common.min.css`
		* `kendo.[skinName].min.css`, e.g., `kendo.flat.min.css`
		* `kendo.mobile.all.min.css`
	Also, copy from the `styles` folder the `[skinName]` folder, e.g. Flat into the `kendo/styles` folder in your project .
	3. Add references to the files in the `index.html` file in your app.
	```
	<link rel="stylesheet" href="styles/kendo.common.min.css" />
	<link rel="stylesheet" href="styles/kendo.flat.min.css" />
	<link rel="stylesheet" href="styles/kendo.mobile.all.min.css" />
   
	<script src="cordova.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/kendo.core.ui.min.js"></script>
	```

* Download and reference **Kendo UI Professional**.
	1. Log into Your Account at <a href="http://www.telerik.com" target="_blank" title="Telerik">http://www.telerik.com</a>.
	2. Click **Products & Subscriptions** -> **DevCraft Complete/Ultimate**.
	3. Click **Download Installer and other resources**.
	4. Find **Kendo UI Professional** in the list and click **Browse all product files**.
	5. Download the *telerik.kendoui.professional.* zip file.
	6. From the `js` and `styles` folders of the Kendo UI archive copy the following files to your project:
		* `kendo.all.min.js`
		* `kendo.common.min.css`
		* `kendo.[skinName].min.css`, e.g., `kendo.flat.min.css`
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

Now, you can use any widget from the library you referenced.

## Notes
Keep in mind that it is recommended to use Kendo UI Mobile widgets and HTML form elements instead of the more complex Kendo UI Web widgets.