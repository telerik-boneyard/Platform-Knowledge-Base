---
title: How to Run Your App in Background
description: Adding a background execution capabilities to your hybrid app 
type: how-to
page_title: How to Run Your App in Background
slug: how-to-run-your-app-in-background
position:
tags: plugin, cordova, apache cordova, background location, background, UIBackgroundModes, background services 
teampulseid: 
ticketid:  1084353, 1112995, 1110146, 1086740, 782288, 1084353, 885962, 1084104
pitsid:
---
                    
## Environment

<table>
  <tr>
    <td>Service</td>
    <td>
		{{site.ab-s}} ({{site.ab}}), {{site.tp}} General
	</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
</table>

## Description

Your app needs to execute tasks when running in the background on specified intervals even when the app is suspended. 

## Solution

Given the differences in the means iOS and Android are granting to the apps for working in the background there may be a different approaches to do so. You will usually need a {{site.ac}} plugin to register and execute your code in the background and ensure that the strict requirements and guidelines of the respective OS are met.  

iOS has a set of defined modes for background activities which your app should specify to be allowed to run tasks in the background while the app is suspended (for example, playing audio, tracking location, etc.). You can read more about the subject in [App Programming Guide for iOS &mdash; Background Execution](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html). The supported modes are listed the `UIBackgroundModes` section [here](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW10). 
To be able to use the background mode you need a plugin that incorporates such logic in it (JavaScript code without the native support via a plugin will not execute when the app enters in the background) and registers the correct background mode for this. For example, one such implementation is the popular in the community Cordova Background Geolocation plugin. Another one is the Cordova BackgroundFetch plugin for iOS.   

On Android this can be done via a plugin that is registering a service implemented with native code. A popular option for Android in the community is the Cordova Background Plugin (while it may not be compatible with the App Store requirements for using background modes). 

## Notes

Even that the app is allowed to run in the background the OS may determine that the background tasks are too intensive, frequent or battery-heavy and interrupt them. Ensure that you are using the correct plugin and native code implementation and required configuration for your task if you need to run a background task.  

In many cases it may be sufficient to run your code using the application life-cycle events when the app is paused or resumed, or use push notifications or local notifications for the purpose. 

Community plugins may not be compatible with the vendor stores and requirements for background execution. Consult the documentation and the purpose of the plugin beforehand. 

## See Also

* [App Programming Guide for iOS &mdash; Background Execution](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html)
* [Cordova Events](https://cordova.apache.org/docs/en/latest/cordova/events/events.html)
* [Push Notifications Plugin](http://plugins.telerik.com/cordova/plugin/pushnotification)
* [Local Notifications Plugin](http://plugins.telerik.com/cordova/plugin/localnotification)
