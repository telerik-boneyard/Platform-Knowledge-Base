---
title: {{site.ab}} Cloud Builds Cannot Produce x86 Android Packages
description: APK files that have native code cannot be deployed on Android devices and emulators that use x86 CPU ABI.
type: troubleshooting
page_title: Only ARMv7a Architecture APK Files are Produced During Build
slug: android-building-to-x86
position: 
tags: appbuilder, build, cordova
teampulseid: 307650
ticketid: 1060943, 1071643, 1062263, 1049366
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>Android</td>	
  </tr> 
</table>

## Description

{{site.tp}} applications with plugins that have native code, such as [Crosswalk](https://plugins.telerik.com/cordova/plugin/crosswalk), [Couchbase-Lite](https://plugins.telerik.com/cordova/plugin/couchbase-lite) and others, cannot be deployed on Android devices and emulators that use **x86 CPU architecture**.

## Cause

At this stage {{site.ab}} produces only **ARMv7a** versions of the built applications.

## Solution

{% include /_troubleshooting/no-solution-available.html %}

## Suggested Workarounds

1. [Download the Archs Cordova plguin from GitHub as a ZIP file.](https://github.com/PlatformSupport/Archs)
1. [Import it as a custom plugin to your project.](https://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins)
1. Rebuild the application.

Now you should be able to deploy your project to Android devices and emulators which use x86 CPU ABI.

## Notes

The {{site.tp}} team is working on a fix for this issue. It will be included in a future {{site.tab}}  release.