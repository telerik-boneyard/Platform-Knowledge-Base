---
title: Invalid Bundle Error When Publishing to the App Store
description: "Publishing to the Apple App Store fails with ERROR ITMS-90474: Invalid Bundle. iPad Multitasking support requires these orientations."
type: troubleshooting
page_title: Publishing App with iPad Multitasking Support Requires All Device Orientations to Be Enabled
slug: ipad-multitasking-support-fail-ios-publish
position:
tags: appbuilder, publish
teampulseid:
ticketid: 1029434, 1045223
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
When you attempt to publish your app to the Apple App Store, the following error message appears: `ERROR ITMS-90474: "Invalid Bundle"`.

## Error Message
`ERROR ITMS-90474: "Invalid Bundle. iPad Multitasking support requires these orientations: 'UIInterfaceOrientationPortrait, UIInterfaceOrientationPortraitUpsideDown, UIInterfaceOrientationLandscapeLeft, UIInterfaceOrientationLandscapeRight'"`

## Cause
This error occurs when your app supports [iPad Multitasking](https://support.apple.com/bg-bg/HT202070) but one of the device orientations is disabled. By default, the Multitasking feature is enabled and requires that all [interface orientations](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW10) are allowed. 

## Solution
Based on your app requirements, you can choose one of the following approaches:

* If you want to support iPad Multitasking, you have to enable all device orientations from the **General** tab in the **Project Properties** dialog.
* If you do not want to support iPad Multitasking, you have to [edit](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/edit-configuration) your `Info.plist` file and set the `UIRequiresFullScreen` key to true. For example: `<key>UIRequiresFullScreen</key><true/>`.

## See Also
* [Adopting Multitasking On iPad](https://developer.apple.com/library/ios/documentation/WindowsViews/Conceptual/AdoptingMultitaskingOniPad/)
* [Slide Over and Split View Quick Start](https://developer.apple.com/library/ios/documentation/WindowsViews/Conceptual/AdoptingMultitaskingOniPad/QuickStartForSlideOverAndSplitView.html)

