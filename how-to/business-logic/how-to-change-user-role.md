---
title: How to Change User Role Programatically
description: An example on changing the user role programatically, using cloud code
type: how-to
page_title: How to Change User Role Programatically
slug: bl-change-user-role
position:
tags: backendservices, business-logic, cloud-code, user-role, cloud-functions
teampulseid: 
ticketid: 1016776
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.bs-bl}}, {{site.bs-u}}</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>{{site.bl-func}}, {{site.bl-data}}</td>
  </tr>
</table>

## Description

Frequently you need to set programmatically the role of a user account based on certain logic. For example, when the user achieves certain rank or performs an in-app purchase. This requires administrative privileges for the app and can be achieved with server-side logic.

## Solution

You can add such logic to the business logic layer - for example you may expose a Cloud Function available to administrattors only or after a user account is created - check for certain conditions and update the role.

Updating a user role requires the use of a [Master Key]({https://docs.telerik.com/platform/backend-services/javascript/security/security-master-key-auth}) - it is strongly recommended not to include your Master Key inside your app code - therefore a perfect solution is to use Cloud Code as the code stays on {{site.tp}} server. 

Here is an example using the JavaScript SDK in the Cloud Code to change the user role:

```JavaScript
    // Set the new user role (the roleID of your custom role)
    // Get the userId to which the new role will be applied.
    var customRoleId = 'custom-role-id-here';
    var userId = 'user-id-here';

    // Check if the user is eligible for role change (matches a condition you have set) 
    if ('your-condition') {

        // Create an Everlive instance authorized with a Master Key. The Master Key is needed to modify the user role.
        var everliveWithMasterKey = Everlive.Sdk.withMasterKey();

        // Update the user role by setting its roleId.
        everliveWithMasterKey.Users.updateSingle({ 'Id': userId, 'Role': customRoleId },
            function(data) {
                // Exit after the role was modified
                done();
            },
            function(error) {
                console.log(JSON.stringify(error));
                // The role was not modified. Exit the function.
                done();
            });

    } else {
        // The user is not eligible for role change. Exit the function.
        done();
    }
```

## Notes
If you decide to go with a Cloud function, you can [set permisions on who can execute {{site.bl-func}}]({https://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-functions/cloud-functions-security}) in order to achieve better security. For example, you can allow only users with an "Administrator" role to be able to invoke the Cloud function.
 
## See Also

* [Change the user role manually from {{site.tp}} portal]({https://docs.telerik.com/platform/backend-services/javascript/access-control/roles/roles-manage-portal})
* [{{site.bl-data}} Events](https://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-data-events)
* [Modifying Data Requests](https://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-modifying-requests)
* [Introduction to Querying](https://docs.telerik.com/platform/backend-services/rest/queries/introduction)
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})
* [How to Get the Result Status of the Request]({% slug bl-get-request-result %})
* [How to Get the Body of the Incoming Request]({% slug bl-get-request-body %})
* [How to Determine the User Account Which Is Making the Request]({% slug bl-determine-user-account %})
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})
