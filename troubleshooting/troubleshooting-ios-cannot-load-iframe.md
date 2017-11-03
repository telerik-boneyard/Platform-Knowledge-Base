---
title: Cannot Load iframe on iOS Devices When Using Cordova 5.0.0 or Later
description: iframe does not open on iOS devices with Cordova 5.0.0 and 5.2.0.
type: troubleshooting
page_title: Cordova for iOS 4.0.1 or Later Apps do not Load iframe
slug: ios-cannot-load-iframe
position: 
tags: appbuilder, ios, cordova 
teampulseid: 
ticketid: 1060248
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>	
  </tr>

  <tr>
    <td>Mobile OS</td>
    <td>iOS</td>	
  </tr>
  <tr>
    <td>Cordova framework version</td>
    <td>Cordova 5.0.0 and later</td>	
  </tr>
</table>

## Description

Hybrid application that is deployed on an iOS device does not show the content of an iframe.

## Steps to Reproduce

1. [Create](https://docs.telerik.com/platform/appbuilder/cordova/creating-your-app/creating-a-new-app) or open a Cordova application.
1. [Change the target Cordova version](https://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/configure-target-framework) to 5.0.0 or later.
1. Include an `<iframe src=""></iframe>` tag to an HTML view.
1. Deploy the app to an iOS device.

## Cause

Cordova 5.0.0 (Cordova for iOS 4.0.1) incorporates the Cordova whitelisting system, which provides a configurable security policy. As Cordova 5.0.0 is marked experimental in AppBuilder, project templates do not include the required configuration to enable whitelisting.

## Solution

To enable whitelisting in your iOS application and allow the URL of an iframe to be accessed by the app, complete the following steps:

1. Open the **iOS Config.xml** file in your project, as described [here](https://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/edit-configuration).
1. In that file, add the following code before the closing `</widget>` tag: 

 	```XML
	<feature name="IntentAndNavigationFilter">
		<param name="ios-package" value="CDVIntentAndNavigationFilter"/>
		<param name="onload" value="true"/>
	</feature>
	```
1. Whitelist the URLs of the iframes, by adding the necessary  `<allow-navigation>` elements. For example:

	```XML
	<allow-navigation href="http://example.com/" />
	```

## Notes

For testing purposes, you can whitelist all URLs at once.

```XML
<allow-navigation href="*" />
```
Whitelisting all URLs is not recommended for production apps. You should allow only the domains used in your application.

## See Also
* [Cordova Whitelist Guide](https://cordova.apache.org/docs/en/latest/guide/appdev/whitelist/)
* [Cordova Whitelist Plugin](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/)
* [iframe not loading after upgrade to Cordova iOS 4.1.1 on Stackoverflow](https://stackoverflow.com/questions/37067342/iframe-not-loading-after-upgrade-to-cordova-ios-4-1-1)
