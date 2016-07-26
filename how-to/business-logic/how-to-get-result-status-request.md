---
title: How to Get the Result Status of the Request
description: An example to perform a check of the result request status
type: how-to
page_title: How to Get the Result Status of the Request in the {{site.bs-bl}} Layer?
slug: bl-get-request-result
position:
tags: backendservices, business-logic, cloud-code
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
    <td>Cloud Code for Data</td>
  </tr>
</table>

> Applicable only to {{site.bl-data}}.

## Description

Often you may need to check if the data operation completed with a success or an error in order to trigger additional business logic. 

## Solution

You can check how the data operation completed **only** in the {{site.bl-data}} `after*` event handlers using the `response` parameter.

Example:
```
if (response.success) {
    // the request completed with success
} else if (response.error) {
    // the request completed with error
} else {

}
```
## See Also

* [Getting Started with {{site.bl-data}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-getting-started)
* [{{site.bl-data}} Events](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-data-events)
* [Modifying Data Requests](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-modifying-requests)
* [Using the JavaScript SDK](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-using-javascript-sdk)
* [Getting Started with {{site.bl-func}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-functions/cloud-functions-getting-started)
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})
* [How to Get the Body of the Incoming Request]({% slug bl-get-request-body %})
* [How to Determine the User Account Which Is Making the Request]({% slug bl-determine-user-account %})
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})