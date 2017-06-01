---
title: HTTP Communication Between the Mobile App and Web Service Is Not Working after Deployment
description: Connection to a web service over HTTP calls is not working after the app was deployed to a device  
type: troubleshooting
page_title: HTTP Communication Between the Mobile App and Web Service Is Not Working after Deployment
slug: http-calls-web-service-not-working-on-device-after-deployment
position: 
tags: ios, cordova, info.plist, publish, http, tls, transport security, AJAX
teampulseid:
ticketid: 1095111, 1112062, 1087462
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>
	{{site.ab-s}} ({{site.ab}}) <!--Code (AppBuilder)-->
    </td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS, Android</td>
  </tr>
  <tr>
    <td>{{site.ac}} framework version</td>
    <td>4.0.0 and higher</td>
  </tr>
</table>

## Description

You have set the target {{site.ac}} version of your app to 4.0.0 or higher. After deploying the app on an actual device the HTTP requests to a web service don't work. The web service is functioning as expected and the app runs correctly in the developer tools. 

## Error Message

The web service is returning error code `404 Not Found`. 

## Cause

The HTTP transport security policy for the app (either OS-configured or developer-set) does not allow to connect to the remote service. 

## Solution

Rule out the server and client-side configuration and what may be the configuration that makes the request to fail. Check the following:

- If your app is pointing to a TLS-secured endpoint check the certificate validity. More information in [App Cannot Connect to a Remote Service over HTTPS When Running on Device](http://docs.telerik.com/platform/knowledge-base/troubleshooting/app-does-not-connect-to-remote-point). 
- Check if you have enabled the Apache Cordova Whitelist plugin in the **Properties** &#8594; **Plugins** &#8594; **Core Plugins**.  More on whitelist policy in Apache Cordova-based apps [here](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-whitelist/index.html) (for version 6.x.x of Cordova).
- You have correctly set the whitelist policy of the app to allow navigation to the required protocols and URIs. More on whitelist policy in Apache Cordova-based apps [here](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-whitelist/index.html) (for version 6.x.x of Cordova). More information about this in [AJAX jQuery Requests Do Not Work on Android](http://docs.telerik.com/platform/knowledge-base/troubleshooting/troubleshooting-android-whitelist-not-enabled).
- If you are using a web service over HTTP (not secured with TLS) you may add an exception in the iOS `info.plist` file of your app for the [`NSAppTransportSecurity`](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html) key. You can edit the `info.plist` file as explained [here](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/edit-configuration). An example transport security exception for the server `example.com`:
	
	> Communication over TLS is recommended. Consider setting the exception below **only for testing and development** purposes.  
	
	```
	<key>NSAppTransportSecurity</key>
	<dict>
	  <key>NSExceptionDomains</key>
	  <dict>
	    <key>example.com</key>
	    <dict>
	      <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
	      <true/>
	  </dict>
	</dict>
	```

## See Also

* [App Cannot Connect to a Remote Service over HTTPS When Running on Device](http://docs.telerik.com/platform/knowledge-base/troubleshooting/app-does-not-connect-to-remote-point)
* [Cordova Whitelist Plugin for Cordova 6.x.x](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-whitelist/index.html)
* [Info Plist Keys Reference](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)
* [Edit Configuration Files of your Hybrid App](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/edit-configuration)
* [AJAX jQuery Requests Do Not Work on Android](http://docs.telerik.com/platform/knowledge-base/troubleshooting/troubleshooting-android-whitelist-not-enabled)
