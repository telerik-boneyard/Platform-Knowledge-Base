---
title: How to Use Google Maps Plugin in Telerik Platform
description: How to add custom Google Maps plugin, add API key and build project? How to use Google Maps in AppBuilder Cordova project for iOS and Android?
type: how-to
page_title: How to Add Google Maps to a Telerik Platform App
slug: using-google-maps-plugin
position:
tags: custom-plugin, iOS, Android
ticketid: 1065383, 1058374, 1068653

---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Import Custom Plugin</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS, Android</td>
  </tr>
</table>

## Description
The [Google Maps plugin](https://github.com/mapsplugin/cordova-plugin-googlemaps) offers a wrapper around the  Google Maps Android API and Google Maps SDK for iOS. These APIs require API keys to work correctly and you need to set these keys in your project before building your app. This article provides instructions for importing the Google Maps custom plugin in a Telerik Platform app and setting the required API keys.

## Solution
Follow the steps below to add the [Google Maps plugin](https://github.com/mapsplugin/cordova-plugin-googlemaps) to your app.

1. Import the latest version of the plugin, following the instructions in [the documentation](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins).
1.  Update the Cordova version of your project to 5.2.0.
	The APIs needed for the iOS version of the plugin are available only in the Cordova 5.2.0 version. If you need to keep using an older Cordova version, you can download an older plugin version:
	* Cordova 4.0 &#8594; [Google Maps 1.3.4](https://github.com/mapsplugin/cordova-plugin-googlemaps/tree/1.3.4)
	* Cordova 5.0 &#8594; [Google Maps 1.3.9](https://github.com/mapsplugin/cordova-plugin-googlemaps/tree/1.3.9)
1. Open `Plugins/cordova-plugin-googlemaps-master/plugin.xml`. Find and delete the following lines:

	`<preference name="API_KEY_FOR_ANDROID" />`

	`<preference name="API_KEY_FOR_IOS" />`
1. Go to [Google Maps APIs](https://developers.google.com/maps/) and get your API keys for Android and iOS.
1. Find these tags in `plugin.xml` and replace `$API_KEY_FOR_ANDROID` and `$API_KEY_FOR_IOS` with your API keys:
```
	<meta-data
		android:name="com.google.android.geo.API_KEY"
		android:value="$API_KEY_FOR_ANDROID" />
```
```
	<config-file target="*-Info.plist" parent="Google Maps API Key">
		<string>$API_KEY_FOR_IOS</string>
    </config-file>
```

Now, you are ready to build your app with the Google Maps API enabled. 

## Notes
You can find a sample AppBuilder app using the Google Maps custom plugin here: [Google Maps Sample](https://github.com/PlatformSupport/GoogleMaps-Sample). Note that you will need to copy your API keys to lines 76 and 194 in the Google Maps `plugin.xml` in order for the sample to work.