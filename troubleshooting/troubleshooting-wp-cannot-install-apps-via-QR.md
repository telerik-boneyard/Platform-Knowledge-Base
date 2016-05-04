---
title: Cannot Install Company App on Windows Phone 8
description: Troubleshooting the Can't install company app error on WP8.
type: troubleshooting
page_title: App Won't Install after QR Code Deployment on WP8
slug: troubleshooting-wp-cannot-install-apps-via-qr
position:
tags: appbuilder, windows-phone, deployment
teampulseid:
ticketid:  1025952, 895131 
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
When building your project as a {{site.wp8}} application package and then installing it on real device an error stating `Can't install company app` occurs.

## Error Message
###`Can't install company app`
`Before you can install this app, you need to add a Telerik AD workplace account. Contact your company's support person for help.`

## Cause\Possible Cause(s)
The error indicates that the {{site.taet}} on the device is missing or it is expired.


## Solution
Install the {{site.taet}} (AET) on the device. More information about this can be found [here]({% slug how-to-install-wp-aet %}). 

## Notes
The {{site.taet}} is renewed each year. Make sure that you have installed a valid *.aetx* file on your {{site.wp8}} test devices.

## See Also
* [Cannot Run Installed Apps on Windows Phone 8]({% slug troubleshooting-wp-cannot-run-apps %})
* [MSDN - Renewing the Application Enrollment Token](https://social.msdn.microsoft.com/Forums/en-US/7370b401-4aed-444a-b62b-fd9f61b988c5/renew-of-application-enrollment-token-needed?forum=wpdevelop)