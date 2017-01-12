---
title: How to Import Wikitude Plugin in Telerik Platform App
description: Need to setup the license key for the Wikitude plugin. How to add the Wikitude plugin to my project. Can't find Wikitude plugin in Telerik Verified Plugins Marketplace.
type: how-to
page_title: How to Add and Configure Wikitude Plugin for Augmented Realtiy
slug: how-to-import-wikitude-plugin-to-app
position:
tags: custom-plugin, verified-plugins
teampulseid:
ticketid: 1076447, 1078718
pitsid:

---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>
		{{site.ab-s}} ({{site.ab}})
	</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Import Plugins</td>
  </tr>
  <tr>
    <td>Plugin(s)</td>
    <td>Augmented Reality - Wikitude SDK Plugin</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
</table>

## Description
The [Wikitude SDK Plugin](https://github.com/Wikitude/wikitude-cordova-plugin) used to be a part of the [Telerik Verified Marketplace](http://plugins.telerik.com/), which lets developers easily import plugins that have been confirmed to work in {{site.tp}}. However, due to specifics in the plugin implementation, it cannot be correctly integrated in your app if added from the marketplace. That is why the plugin was removed from the marketplace but you can still easily add it to your app as a custom plugin.

## Solution
To add the Wikitude SDK Plugin in {{site.ab}} and configure it correctly, follow the steps below:

1. Go to the [Augmented Reality - Wikitude SDK Plugin](https://github.com/Wikitude/wikitude-cordova-plugin) repository and download the plugin as a ZIP file.
2. Import the Wikitude plugin as a [custom plugin](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins).
3. Follow the instructions for obtaining a license key in the [Wikitude documentation](http://www.wikitude.com/developer/documentation/phonegap).
3. In the {{site.ab}} solution explorer, navigate to `Plugins/wikitude-cordova-plugin-master/www` and open `WikitudePlugin.js`.
4. Copy your license key to the `_sdkKey` variable:

	```
	this._sdkKey = "ENTER-YOUR-KEY-HERE";
	```
Now, you can use the plugin in your app.

## Note
Keep in mind that custom plugins only work in apps that are deployed directly on a device. You cannot test the Wikitude SDK plugin using the {{site.ab-app}}.

## See Also
* [Wikitude Documentation - Getting started Cordova Plugin](http://www.wikitude.com/developer/documentation/phonegap)