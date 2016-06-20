---
title: Invalid Image Path Error When Publishing to the App Store
description: "Publishing to the Apple App Store fails with an ITMS-90032: Invalid Image Path error. You need to provide the missing iPad Pro icon to be able to upload to iTunes Connect."
type: troubleshooting
page_title: Cannot Publish to the App Store Because of CFBundleIcons Key Error
slug: invalid-image-asset-fail-ios-publish
position:
tags: appbuilder, publish
teampulseid:
ticketid: 1044213, 1044122
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
    <td>Publish - App Store</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS</td>	
  </tr>
</table>

## Description
When you attempt to publish your app to the Apple App Store, the following error message appears: `ERROR ITMS-90032: Invalid Image Path`.

## Error Message
`ERROR ITMS-90032: Invalid Image Path - No image found at the path referenced under key 'CFBundleIcons': 'icon-83.5@2x.png'`

## Cause
The AppBuilder 3.3 release introduced support for the iPad Pro. Starting with this release, all apps must contain iPad Pro assets in the bundle. The requirement is defined in the default `Info.plist` for your app. 

All newly created apps contain the required images by default but apps created with earlier AppBuilder versions need to be updated to provide the missing assets.

## Solution
Provide the missing iPad Pro icon. Choose one of the following approaches:

* [Manually upload the missing 167x167 icon.](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/assets/configure-icons-splashscreens)
* [Re-generate all icons at once from a single image source.](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/assets/generate-icons-splashscreens)