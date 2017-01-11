---
title: Push notifications are currently initializing
description: Error received when trying to register a device for push notifications on Android or iOS.
type: troubleshooting
page_title: Push notifications are currently initializing
slug: troubleshooting-push-notifications-are-currently-initializing
tags: push-notifications
teampulseid:
ticketid: 1073013, 907763
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Notifications (Backend Services)</td>
  </tr>
    <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Push Notifications</td>
  </tr>
    <tr>
    <td>{{site.ab}} area</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
</table>

## Description

Trying to register the device for push notifications using `everlive.push.register()` returns an error message.

## Error Message
`Push notifications are currently initializing.`

## Cause
This error is returned from the Telerik Platform JavaScript SDK when an initial call to `everlive.push.register()` has not yet returned result (the native part of the push initialization logic is not finished as something is preventing it) but the method was called again by the app.

## Solution

* Deploy the app as an application package to an actual device.
* For iOS,  check that the provisioning profile used to deploy the app is for explicit Apple App ID and features the Push Notifications entitlement.


## See Also
* [Troubleshooting Push Notifications](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/troubleshooting/introduction)
* [Initializing and Registering a Device](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/push-initialize-register#initializing-and-registering-a-device)