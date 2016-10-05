---
title: Deep Linking Not Working on iOS Devices
description: Opening an external app from an iOS app using a custom URL scheme doesn't work
type: troubleshooting
page_title:  Deep Linking Not Working on iOS Devices
slug: deep-linking-not-working-on-ios-devices
position:
tags: deep linking, custom url scheme, googlegmail, comgooglemaps, iOS
ticketid: 1062970
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Run on Device</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>
  </tr>
</table>

## Description
Links in your app, that use a custom URL scheme to open an external app, do not work on iOS. Clicking such a link produces no visible result. This problem is observed on iOS 9 and newer versions.

## Cause
Apple introduced a new `LSApplicationQueriesSchemes` key in the iOS `Info.plist` file that lists the URL schemes the app is able to open. If this property is not set in your app, you will not be able to link using any custom URL schemes.

## Solution
You need to whitelist all custom URL schemes that you intend to use in your app. To do this, follow the steps below:

1. Right-click your project name and select **Edit Configuration** -> **iOS Info.plist**.
2. Add the following right before the last closing `</dict>` tag:

	```
	<key>LSApplicationQueriesSchemes</key>
	<array>
  		<string>customscheme</string>
  		<string>customscheme</string>
  		<string>customscheme</string>
	</array>
	```
	where you replace *customurlscheme* with the custom URL schemes that you want to use.
3. Save and re-build your app.

## See Also
* [iOS Launch Services Keys Documentation](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html)
