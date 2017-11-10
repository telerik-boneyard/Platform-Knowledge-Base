---
title: App Deployment Fails on iOS Device
description: Cannot install an iOS app with message "Unable to Download App. [AppName] could not be installed at this time. When you deploy to iOS using USB cable you are getting ApplicationVerificationFailed error.
type: troubleshooting
page_title: Cannot Install an iOS App on Device
slug: cannot-deploy-app-on-ios-device
position:
tags: ios, deployment, code-signing
teampulseid:
ticketid: 1080338, 1074137, 1068653, 1074137, 1067235
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
    <td>Deploy on device</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS</td>
  </tr>
</table>

## Description
When deploying or installing an iOS app on a device, the installation fails with an error message.

## Error Message
* When deploying using a USB cable, the following error is displayed in the Output window in {{site.ab}}:

	`ApplicationVerificationFailed`
* When installing the app on a device (for example, installing from a QR code), iOS displays an error message:

	`Unable to Download App. [AppName] could not be installed at this time`

## Possible Causes
This is a generic error, which may be caused by a number of reasons. Some simpler ones include:
* Insufficient device storage.
* The minimum OS version specified in the app project properties is greater than the OS version of the device that tries to install the app.

However, in {{site.tp}} development scenarios, the most common cause of this problem is incorrect provisioning of the app. Below you can find the most common provisioning problems that could lead to deployment failures:
* The device, that you are trying to install the app on, is not included in the app provisioning profile.
* You have enabled some Apple service on your device, for example, iCloud service, but you have not enabled the service for the App ID of your provisioning profile.

## Solution
To address this problem, you should rule out the possible causes one by one. You can follow the steps below to do this:

1. Check the device and confirm that it is connected to the internet and has enough free space to install the app on.
2. Check the **Deployment Target Version** specified in **Properties** &#8594; **iOS** in {{site.ab}}. It should not exceed the iOS version of the device that you are deploying your app on.
3. If you are using a Development or Ad Hoc provisioning profile, you need to make sure that the device UDID is included in the provisioning profile.
4. Check the app for usage of any Apple services (Push Notifications, iCloud, HealthKit, etc.) and then confirm that these services are enabled in the App ID that you used in the [iOS Dev Center](https://developer.apple.com/account/) to create your provisioning profile.

## Note
If the issue is not resolved on your side by following the steps above, you can try deploying a new blank app using the same provisioning profile, on the same device. This will show if the issue is with the provisioning profile or with your app and will help you focus your attention on the correct source of the issue. If the issue is with the provisioning profile, you can try creating a new certificate and profile for your app, keeping in mind the points listed above.

## See Also
* [Code Signing of iOS Apps](https://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/configuring-code-signing-for-ios-apps)