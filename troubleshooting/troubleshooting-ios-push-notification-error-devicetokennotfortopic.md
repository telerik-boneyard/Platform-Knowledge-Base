---
title: iOS Push Notification Error DeviceTokenNotForTopic
description: iOS devices cannot receive push notifications and DeviceTokenNotForTopic error is returned
type: troubleshooting
page_title: DeviceTokenNotForTopic iOS push notification error
slug: troubleshooting-ios-push-notification-error-devicetokennotfortopic 
position: 
tags: backendservices, ios, push-notifications
teampulseid:
ticketid: 1113257
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

Sending push notifications to iOS devices is failing. In {{site.tp}} push browser the reason for the failure is "DeviceTokenNotForTopic".
   
## Error Message

`DeviceTokenNotForTopic`. 

## Cause

This error is returned from the Apple Push Notficiation service (APNs) when the presented push notifications token attributes does not match the topic specified at the time of sending. In the context of {{site.tp}} this means the token was issued to an app with a given Apple App ID but the server push SSL certificate is configured for another Apple App ID. When the service is sending the push notifications to APNs they determine the topic (usually this is the App ID) and know how to address the notification to the particular device. In this case the topic (read "App ID") does not match on the device, hence the error.

## Solution 

Check whether the Apple App ID of the provisioning profile with which the application is deployed to a device is matching the Apple App ID for which the server push SSL certificate is configured. For example, you have deployed the app with the provisioning profile for *com.mycompany.mypushapp* but on the server you have uploaded a push certificate for *com.mycompany.myusuallapp*. 

## See Also

* [Troubleshooting Push Notifications](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/troubleshooting/introduction)
* [Troubleshooting Push Notifications for iOS](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/troubleshooting/push-trb-ios)
