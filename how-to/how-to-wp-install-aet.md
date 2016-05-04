---
title: How to Install the Telerik Application Enrollment Token
description: Install the Telerik AET on WP device and add the Telerik AD workplace.
type: how-to
page_title: Adding the Telerik AD Workplace on WP8 Devices
slug: how-to-install-wp-aet
position:
tags: appbuilder, windows-phone, deployment
teampulseid: 
ticketid:
pitsid:

---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Cloud Build - Application package, Deployment - QR code</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>Windows Phone</td>	
  </tr> 
</table>

## Description
To deploy {{site.wp8}} apps built with {{site.tp}} via QR code, you need to have the {{site.taet}} (AET) installed on the device. It configures the Telerik AD workplace account, which is essential for installing and running {{site.ab}} apps on test devices.

## Solution
1. Build your project in the cloud for the **Windows Phone** platform as an **App package**.
1. When the build procedure finishes, click on the **Install** button for the {{site.taet}} (AET).
1. Scan the AET QR code with your device. This will download and then run the *.aetx* file on the physical device.
1. When asked if you want to add a workplace account, click **add**. 
1. If no error or other notification occurs, the AET should be installed and the Telerik AD workplace configured successfully on the device.

Once the Telelrik AD workplace is added, continue with installing your {{site.ab}} projects on the device.

## Notes
<!-- Optional -->
The {{site.taet}} is renewed each year. Make sure that you have installed a valid *.aetx* file on your {{site.wp8}} test devices.

## See Also
* [MSDN - What is a workplace account](http://www.windowsphone.com/en-us/how-to/wp8/accounts-and-billing/what-is-a-workplace-account)