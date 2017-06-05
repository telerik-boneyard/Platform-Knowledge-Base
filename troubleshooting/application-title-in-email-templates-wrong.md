---
title: Application.Title in Email Template is Wrong
description: You renamed the name of your project in Telerik Platform portal, but in emails Application.Title still the old name appears.
type: troubleshooting
page_title: How to Change the Application.Title in Email Templates
slug: application-title-in-email-templates-wrong
position:
tags: backendservices, portal, email-notification
teampulseid:
ticketid: 1111828, 1072170, 1060801, 1054819, 1087785, 1100004, 1058035, 1087785
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
After changing the application name in {{site.tp}} portal, the old name is still appearing in all automated emails. This would happen also in all templates where the {% raw %}{{`Application.Title`}}{% endraw %} is used.
The old application name also appears in "Backend Services usage details" dashboards in {{site.tp}}.

## Cause
The {% raw %}{{`Application.Title`}}{% endraw %} takes its name after the initial name of the app in {{site.tp}}. The value in this field remains unchanged when you modify the app name from the {{site.tp}} UI.

## Solution
You can change the name programmatically:

- Locate the app in Telerik Platform and then obtain its App ID and Master Key as explained [here](http://docs.telerik.com/platform/backend-services/javascript/security/security-keys-get)
- Send the following request to change the backend project title of your app and thus influence the {% raw %}{{`Application.Title`}}{% endraw %}. You may use a simple HTTP tool like Postman, Fiddler, cURL, etc. to send the request.  Replace the placeholders for the actual App Id and Master Key values:

```HTTP
PUT	https://api.everlive.com/v1/Metadata/Applications/<your-app-id>
Content-Type: application/json
Authorization: masterkey <actual-master-key>
Body:
{
    "Name": "NewName", // no spaces allowed in Name
    "Title": "New Name" // spaces are allowed in Title
}
```

The backend app `Name` and `Title` should now be changed.

## See Also
- [Operations with Backend Services Projects](http://docs.telerik.com/platform/backend-services/rest/administration-api/projects/managing-projects)
- [Using Placeholders in Email Templates](http://docs.telerik.com/platform/backend-services/javascript/email-templates/email-notifications-use-placeholders)
- [Sending Email from Cloud Code](http://docs.telerik.com/platform/backend-services/javascript/email-templates/email-notifications-send-cloud-code)
- [Managing Email Templates in the Portal](http://docs.telerik.com/platform/backend-services/javascript/email-templates/email-notifications-manage-templates-portal)
