---
title: Cannot See Bottom of Screen on Windows Phone Devices
description: Cannot see tab strip or other contents in the bottom of the screen on Windows Phone devices with software navigation buttons
type: troubleshooting
page_title: Cannot See Navigation TabStrip on Windows Phone Devices
slug: cannot-see-bottom-of-screen-on-wp-devices
position: 
tags: windows-phone
teampulseid:
ticketid: 1084297, 1072429
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
    <td>Run on Device</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>Windows Phone</td>
  </tr>
  <tr>
    <td>Mobile OS version</td>
    <td>8.1+</td>
  </tr> 
</table>

## Description
When you run your hybrid app on a Windows Phone device that has software buttons (on-screen navigation), you may notice that the software buttons cover the bottom of the app screen. In Kendo Hybrid UI apps with TabStrip navigation, the TabStrip is partially or completely covered.

## Cause
The Windows Phone 8.0 SDK, used by default in {{site.tp}} apps, cannot detect the height that the software buttons take up and the screen height is incorrectly calculated to a higher number than what is available. When this happens, contents at the end of a view are placed behind the software buttons.


## Solution
You can fix this problem by updating your project SDK to 8.1. To do this, follow the steps below:

1. Open the **Properties** page of your project.
2. Select the **Windows Phone** tab.
3. Under **SDK Version**, select **8.1**. 
4. Save and re-deploy your project directly on the Windows Phone device, without using the {{site.ab-app}}.

The 8.1 SDK correctly calculates the available screen size and all app contents are visible.