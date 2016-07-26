---
title: How to Determine the User Account Making the Request in {{site.bs-bl}}
description: An example to perform a check and use the current user account properties
type: how-to
page_title: Determine the User Account Making the Request in {{site.bs-bl}}
slug: bl-determine-user-account
position:
tags: backendservices, user-management, business-logic, cloud-code
teampulseid: 
ticketid: 
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Business Logic</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Cloud Code for Data, Cloud Functions</td>
  </tr>
</table>

## Description

Often you may need to check the user account properties of the current user making a request to a content type or a Cloud Function. 

## Solution

You can get information about the account but only if the request is made by an authenticated user as opposed to an anonymous user. To do so, check for the information contained in the `principal.data` object of the `request` parameter.

Example:

```
if (request.principal.type === 'user') {
    var currentUserObject = request.principal.data;
    console.log("The current user username is: " + currentUserObject.Username);
} else if (request.principal.type === 'anonymous') {
    console.log("The current request is made anonymously. No data for the current user.");
} else {
    console.log("The current request is made from the Telerik Platform UI");
}
```  
## See Also

* [Getting Started with {{site.bl-data}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-getting-started)
* [{{site.bl-data}} Events](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-data-events)
* [Modifying Data Requests](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-modifying-requests)
* [Using the JavaScript SDK](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-using-javascript-sdk)
* [Getting Started with {{site.bl-func}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-functions/cloud-functions-getting-started)
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})
* [How to Get the Result Status of the Request]({% slug bl-get-request-result %})
* [How to Get the Body of the Incoming Request]({% slug bl-get-request-body %})
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})
