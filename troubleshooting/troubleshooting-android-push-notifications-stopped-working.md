---
title: Push Notifications to Android Stopped Working
description: Sending push notifications to Android throws "Error authenticating to Google Cloud Messaging"
type: troubleshooting
page_title:  Unsuccessful authentication to Google Cloud Messaging
slug: troubleshooting-android-push-notifications-stopped-working
position:
tags: Google Cloud Messaging, GCM, Android, push notifications, FCM
teampulseid:
ticketid: 1044096, 1045723
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
    <td>Push Notifications, Android</td>
  </tr>
</table>

## Description

Your Android app suddenly stopped receiving push notifications. The {{site.tp}} portal shows the following error message in the details pane for the failed push notification: `Error authenticating to Google Cloud Messaging server.`

## Error Message

`Error authenticating to Google Cloud Messaging server.`

## Cause

The error signifies that {{site.tp}} cannot authenticate to Google Cloud Messaging (GCM). Due to recent changes in the GCM infrastructure, the Google API key that you entered in {{site.tp}} may no longer be accepted by Google for authentication to GCM.

## Solution

Verify that the Google API key entered in {{site.tp}} for your app is a **Server** API key.

Check the type of your Android API key:

1. Open the [Google Developers console](https://console.developers.google.com/).
1. From the projects list select your project&mdash;look for the number used to subscribe the mobile app for push notifications (passed as `senderId` in the mobile app).
1. On the left, click **Credentials**.
1. In the **API keys** list, find the Google API key used in {{site.tp}}.
1. Verify that the key type is **Server**. Other key types such as *Android*, *Browser*, or *iOS* are not supported.
1. If the key type is not **Server**, issue a **Server** API key and enter it in {{site.tp}}. Take these steps:
  1. On the **Credentials** screen of your project in the [Google Cloud Console](https://console.developers.google.com/), click **Create credentials**.
  1. From the list of available credentials types, choose **API key**.
  1. Select the **Server key** option (other key types are not supported).
  1. Name the key as you find appropriate.
  1. Leave the IP addresses field blank.<br>The key will reside in {{site.tp}} and will not be exposed to third parties. It is used only in the server-to-server communication between {{site.tp}} and GCM.
  1. Click **Create**.
  1. Copy the generated key and paste it in your {{site.tp}} app in **Notifications > Push Notifications > Push Settings > Android**.
  1. Save the **Settings**.
  1. Test your setting by sending a push notification.

## See Also
* [Troubleshooting Push  Notifications](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/troubleshooting/push-trb-all.html)
