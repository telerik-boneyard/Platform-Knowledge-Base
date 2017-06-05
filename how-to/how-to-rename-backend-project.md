---
title: {{Application.Title}} is Not Propagating Correctly into Emails
description: You have renamed the name of your project in Telerik Platform portal, but in emails {{Application.Title}} still appears the old name.
type: how-to
page_title: Rename Telerik Platform Backend Services Project
slug: how-to-rename-backend-project
position:
tags: backendservices, portal, email-notification
teampulseid:
ticketid: 1111828, 1072170, 1060801, 1054819, 1087785, 1100004
pitsid:

---
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.tp}}, {{site.bs}} {{site.bs-n}}</td>
  </tr>
</table>

## Description
After changing the application name, the old name {{Application.Title}} still appears in all automated emails.

## Solution
This is a known issue that is logged in the backlog to be fixed. The {{Application.Title}} uses a different field than the one changed through the Telerik Platform UI. At the moment, you can change this name only programmatically. To do so:

- Locate the app in Telerik Platform and the App ID and Master Key as explained here
- Send the following request to change the backend project title of your app and thus influence the Application.Title. You may use a simple HTTP tool like Postman, Fiddler, cURl, etc. to send the request.  Replace the placeholders for the actual App Id and Master Key values:


```JavaScript
PUT	https://api.everlive.com/v1/Metadata/Applications/<your-app-id>
Content-Type: application/json
Authorization: masterkey <actual-master-key>
Body:
{
    "Name": "NewName",
    "Title": "NewName"
}
```

The backend app name and title should now be changed.

## See Also
- [Using Placeholders in Email Templates](http://docs.telerik.com/platform/backend-services/javascript/email-templates/email-notifications-use-placeholders)
- [Sending Email from Cloud Code](http://docs.telerik.com/platform/backend-services/javascript/email-templates/email-notifications-send-cloud-code)
- [Managing Email Templates in the Portal](http://docs.telerik.com/platform/backend-services/javascript/email-templates/email-notifications-manage-templates-portal)