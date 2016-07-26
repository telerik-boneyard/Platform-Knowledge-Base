---
title: How to Get the Body of the Incoming Request
description: An example to perform a check and use the incoming request body
type: how-to
page_title: How to Get the Body of the Incoming Request in the {{site.bs-bl}} Layer?
slug: bl-get-request-body
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
    <td>Cloud Code for Data, Cloud Functions</td>
  </tr>
</table>

## Description

Frequently you need to validate and use the incoming data for the request to a content type or to a Cloud Function. 

## Solution

For HTTP requests that are sent using the HTTP POST or PUT verbs (respectively `Create` and `Update` operations), the body of the request will be available in the `request.data` object.

Example:

```
if(request.data) {
	var incomingData = request.data;
	// use the data here
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
* [How to Determine the User Account Which Is Making the Request]({% slug bl-determine-user-account %})
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})