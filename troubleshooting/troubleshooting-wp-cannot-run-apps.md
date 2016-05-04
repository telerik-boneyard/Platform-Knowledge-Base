---
title: Cannot Run Installed Apps on Windows Phone 8
description: Troubleshooting the Problem with app error on WP8.
type: troubleshooting
page_title: Problem With App Error on WP
slug: troubleshooting-wp-cannot-run-apps
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
Running an app on {{site.wp8}} devices results in an error stating `Problem with app`.

## Error Message
###`Problem with app`
`Your Telerik AD workplace account is expired, so you can't open this company app. Go to Settings > Workplace to update it.`

## Cause\Possible Cause(s)
The error indicates that the {{site.taet}} on the device is missing or it is expired.


## Solution
Install the {{site.taet}} (AET) on the device. More information about this can be found [here]({% slug how-to-install-wp-aet %}). 

## Notes
The {{site.taet}} is renewed each year. Make sure that you have installed a valid *.aetx* file on your {{site.wp8}} test devices.

## See Also
* [Cannot Install Company App on Windows Phone 8]({% slug troubleshooting-wp-cannot-install-apps-via-qr %})
* [MSDN - Renewing the Application Enrollment Token](https://social.msdn.microsoft.com/Forums/en-US/7370b401-4aed-444a-b62b-fd9f61b988c5/renew-of-application-enrollment-token-needed?forum=wpdevelop)