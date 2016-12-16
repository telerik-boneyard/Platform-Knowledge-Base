---
title: Kendo UI Native Scrolling Stopped Working on Android
description: App scrolling stopped working after updating Android System WebView. useNativeScrolling breaks ListView scrolling.
type: troubleshooting
page_title: Native Scrolling Breaks ListView Scrolling on Android
slug: kendo-listview-cannot-scroll-with-native-scrolling
position: 
tags: kendo
teampulseid:
ticketid: 1078981, 1079979, 1079847, 1078960
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
    <td>Android</td>	
  </tr>
  <tr>
    <td>Android System WebView version</td>
    <td>55.0.2883.91</td>	
  </tr>
</table>

## Description
After updating the Android System Web View, native scrolling stopped working. In apps using Kendo Hybrid UI, you cannot scroll the ListViews defined within views with native scrolling enabled. This used to work without issues before updating the Android System WebView.

## Steps to Reproduce
1. Create a Cordova app from one of the Kendo templates.
2. Set `data-use-native-scrolling="true"` in one of the View definitions.
3. Add a ListView to this view that has more content than can fit in the viewport.
4. Deploy the app on an Android device.

Instead of being able to scroll down to the end of the list, the ListView scroll is locked.

## Cause
The latest version of the Android System WebView introduced changes that interfered with the Kendo UI implementation for handling user actions in the ListView widget. This caused a bug in the native scrolling of ListViews.

## Solution
There is already a fix in Kendo UI that addresses the broken scrolling. To apply it, install Kendo UI version **2016.3.1216** [using the {{site.ab}} Package Manager](http://docs.telerik.com/platform/appbuilder/cordova/supported-frameworks/update-project-libraries#update-kendo-ui-core-or-kendo-ui-professional).

## Notes
The **2016.3.1216** release of Kendo UI is an internal build, so it is recommended that you test your app thoroughly before submitting it to the app stores with this version of Kendo UI installed.
