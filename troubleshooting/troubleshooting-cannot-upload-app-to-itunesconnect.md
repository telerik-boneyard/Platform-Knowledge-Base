---
title: Cannot Upload Application Error When Publishing to the App Store
description: Publishing to Apple's App Store fails with cannot upload application in Visual Studio and Windows clients
page_title: Can't Upload to Apple's App Store
slug: troubleshooting-cannot-upload-app-to-itunesconnect
position: 
tags: appbuilder, publish
teampulseid:
ticketid: 1055835, 996480, 1054119, 1055972
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
    <td>Code (AppBuilder) client</td>
    <td>Extension for Visual Studio, Windows</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS</td>	
  </tr>
</table>

## Description
<!-- Mandatory -->
When you attempt to publish your app to the Apple App Store, the following error message appears in the Windows client, or the AppBuilder Extension for Visual Studio: `Cannot upload application.`

## Error Message
<!-- Optional -->
`Cannot upload application.`

## Cause
<!-- Mandatory -->
The `Cannot upload application` message is generic for the publish service and it is shown as the AppBuilder client is unable to read the exact error returned. There are many possible causes for the upload failure.

## Solution
<!-- Mandatory -->
Check what the actual error returned from ITMS is in the AppBuilder In-Browser client:

1. Open your project in the [AppBuilder In-Browser client](https://platform.telerik.com). 
	> **IMPORTANT:** If you are developing your app in the AppBuilder Extension for Visual Studio, you will need to either [connect the code with the cloud](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/develop-across-clients), or [import it from archive](http://docs.telerik.com/platform/appbuilder/cordova/creating-your-app/import-from-archive) in the In-Browser client.
1. Publish the application.
1. See what is the new error in the Publish window.

## Suggested Workaround
<!-- Optional -->
If building your application in the In-Browser client is not suitable, you can [get a Fiddler trace]({% slug capture-fiddler-trace %}) and identify the exact error in the response of the failed */upload* request.

## Notes
<!-- Optional -->
The issue is planned to be fixed in the AppBuilder 3.5 major release.

## See Also
<!-- Optional -->
* [Invalid Bundle Error When Publishing to the App Store]({% slug ipad-multitasking-support-fail-ios-publish %})
* [Invalid Image Path Error When Publishing to the App Store]({% slug invalid-image-asset-fail-ios-publish %})
* [Fiddler docs](http://docs.telerik.com/fiddler/configure-fiddler/tasks/configurefiddler)