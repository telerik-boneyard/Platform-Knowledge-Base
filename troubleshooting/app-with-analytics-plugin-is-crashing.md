---
title: Analytics Plugin Causes the App to Freeze or Crash
description: Applications with enabled Progress Telerik Analytics plugin freeze or crash on start-up.
type: troubleshooting
page_title: Apps with Analytics Plugin Hang When Opened
slug: app-with-analytics-crashes
position:
tags: appbuilder, analytics, cordova, kendo
teampulseid:
ticketid:
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>
	{{site.ab-s}} ({{site.ab}}), <!--Code (AppBuilder)-->
	{{site.eq-s}} <!--Analytics-->
    </td>
  </tr>
  <tr>
    <td>Plugin</td>
    <td>Progress Telerik Analytics</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}}) app</td>
  </tr>
</table>

## Description
When you include the Analytics plugin to your app, you might experience a number of issues. The app might become unresponsive or crash on start-up.

## Possible Causes
1. **The app crashes on launch because two Analytics monitors are created simultaneously**</br> When you have enabled the automatic exception and app feature tracking and additionally use the [Analytics JavaScript API](http://docs.telerik.com/platform/analytics/integration/monitor/platform/javascript) to create a separate monitor to track exceptions manually.
1. **The app hangs because you are using an older version of Kendo**</br> When you are using an outdated version of Kendo UI (2013.x.x and older), the Analytics monitor cannot find a proper view on which to attach.

## Solution
1. Use either the automatic tracking feature or the JavaScript API, but not both at the same time. 
	* To disable the automatic tracking, you should [modify the plugin variables](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/set-plugin-variable) of the Analytics plugin by setting the `AUTO_TRACK_EXCEPTIONS` and `AUTO_TRACK_KENDO_EVENTS` options to **False**.  
1. [Update the Kendo UI framework](http://docs.telerik.com/platform/appbuilder/cordova/supported-frameworks/update-project-libraries#update-kendo-ui-core-or-kendo-ui-professional) to a more recent version (2015.x.x or newer).

## Notes
[Kendo UI Professional Is Not Available in the Package Manager]({% slug no-kendoui-professional-in-package-manager %})

## See Also
[1-click Analytics Integration in Hybrid Apps](http://developer.telerik.com/featured/1-click-analytics-integration-hybrid-apps/)
