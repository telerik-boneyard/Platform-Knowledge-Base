---
title: AJAX jQuery Requests Do Not Work on Android
description: On Android devices, requesting JSON through jQuery AJAX does not return any data.
type: troubleshooting
page_title: All HTTP/HTTPS Requests Return "404 (Not Found)" on Android
slug: android-whitelist-not-enabled
position: 
tags: appbuilder, android, 3rd-party-js-library, core-plugin
teampulseid: 
ticketid: 1065764, 1070518
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>	
  </tr>
  <tr>
    <td>Plugin</td>
    <td>Whitelist</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>Android</td>	
  </tr>
  <tr>
    <td>{{site.ac}} framework version</td>
    <td>{{site.ac}} 4.0.0 and later</td>	
  </tr>
</table>

## Description

Hybrid application that is deployed on an Android device cannot do any HTTP/HTTPS requests.

## Error Message

Failed to load resource: the server responded with a status of 404 (Not Found) 

## Cause

{{site.ac}} 4.0 and above incorporates the {{site.ac}} domain whitelisting, a security model which provides a configurable security policy to define which external sites may be accessed. For Android, this policy is implemented by the [{{site.ac}} Whitelist Plugin](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/). If the plugin is not enabled in the project, any HTTP/HTTPS request will respond with a status of 404 (Not Found).

## Solution

To enable the {{site.ac}} Whitelist Plugin and allow the HTTP/HTTPS requests, complete the following steps:

1. Open the project in your preferred AppBuilder client.
1. Open project **Properties**.
1. Open the **Plugins** tab.
1. In the **Core Plugins** section, locate the **Whitelist** plugin.
1. **Enable** the **Whitelist** plugin for the project.
1. **Rebuild** the application and then **deploy** it on the Android device. 

## See Also

* [Cordova Whitelist Guide](https://cordova.apache.org/docs/en/latest/guide/appdev/whitelist/)