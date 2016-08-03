---
title: Cannot Receive Push Notifications on Android When the App Is Closed
description: On Android, push notifications are not received when the app is not running (closed). Notifications are received when the app is running either in the foreground or in the background.  
type: troubleshooting
page_title: Push Notifications Are Not Received on Android When the App Is Closed 
slug: cannot-receive-push-notifications-on-android-when-the-app-is-closed
position:
tags: backendservices, аndroid, push-notifications, GCM
teampulseid: 
ticketid: 1052512, 1051939
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Notifications (Backend Services)</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Push Notifications</td>	
  </tr>
</table>

## Description

Some Android devices cannot receive push notifications when the app is closed. The app can receive push notifications when it is running, either in the foreground or in the background.

## Cause

On these devices most of the apps are not permitted by default to be awaken in the background. This way the app cannot process the received push notification when it is not running. 

Currently, this behavior is identified only on devices from the following manufacturers:

* Huawei
* Xiaomi 

## Solution

You need to modify certain settings on your device.

### Huawei devices

1. Open **Settings &#8594; Protected Apps** 
2. Place your application in the list

### Xiaomi devices

1. On the app screen tap on the **Security** app
2. Select **Permissions &#8594; Autostart**
3. Locate your app in the list and enable "Autostart"
4. Restart the device

## Notes

 Currently, we have not identified a way to achieve this behavior programmatically from your application. You may consider to instruct your customers to enable the option on their devices if they fall under the above category.  
	
## See Also

* [Troubleshooting Push Notifications for Android](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/troubleshooting/push-trb-android)