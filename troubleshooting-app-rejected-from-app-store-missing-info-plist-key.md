---
title: iOS App Rejected from the App Store for Missing Info.plist Key
description: iOS app is rejected from the App Store because it accesses sensitive data and does not provide NSPhotoLibraryUsageDescription in the Info.plist file after upgrading to Cordova 6.4. 
type: troubleshooting
page_title: iOS App Rejected from the App Store for Missing Info.plist Key
slug: troubleshooting-app-rejected-from-app-store-missing-info-plist-key
position: 
tags: ios, app store, cordova, info.plist, publish, iTunes Connect
teampulseid:
ticketid: 1109683, 1100836, 1106199
pitsid:

---

## EnvironmentNSCameraUsageDescription
<table>
  <tr>
    <td>Service</td>
    <td>
	{{site.ab-s}} ({{site.ab}}), <!--Code (AppBuilder)-->
    </td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS</td>
  </tr>
  <tr>
    <td>{{site.ac}}framework version</td>
    <td>6.4.0</td>
  </tr>
</table>

## Description

You have set the target {{site.ac}} version to 6.4.0 of your app. After publishing the app is rejected due to missing usage description Info.plist key. 

Your app is using {{site.ac}} plugins that require usage description text for iOS (eg. Camera, Capture, QR Scanner, Contacts, etc.)

## Error Message

`Missing Info.plist key - This app attempts to access privacy-sensitive data without a usage description. The app's Info.plist must contain an NSPhotoLibraryUsageDescription key with a string value explaining to the user how the app uses this data.`

In the error message above you may receive the name of another key like `NSContactsUsageDescription`, `NSCameraUsageDescription`, `NSCalendarsUsageDescription` and other, depending of the resources your app needs to use. 

## Cause

The required usage description text is not added to the `Info.plist` file (even though you may have added it manually by editing the file).  

## Solution

You have to add the usage description text by setting the plugin variable for each plugin that requires access to 
the given device API.

1.Locate the plugins your app is using and that may require access to the camera, photo library, contacts, etc.
2. Set the dedicated plugin variable as explained [here](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/set-plugin-variable)
3. Remove any manually added description strings for the same purpose (if any) from the `Info.plist` file.
4. Re-build the app
5. Publish again the app 

## See Also

* [Set Plugin Variables](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/set-plugin-variable)
* [Expected App Behaviors](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/ExpectedAppBehaviors/ExpectedAppBehaviors.html#//apple_ref/doc/uid/TP40007072-CH3-SW6) 