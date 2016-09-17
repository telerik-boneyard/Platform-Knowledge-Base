---
title: How to Determine the Id of the Requested Data Item in {{site.bs-bl}}
description: An example to determine the Id of the requested data item in {{site.bs-bl}}
type: how-to
page_title: How To Determine the Id of the Requested Item in the {{site.bs-bl}} Layer
slug: bl-id-requested-item
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

Often you may need to determine when data is accessed by item Id (and respectively the `Id` of the requested item). This may be helpful in cases when you would like to apply different business logic for data operations per Id and operations that are accessing or filtering all data items. For example, you may deny `Delete` requests that are not per `Id`. This check is applicable to `Read`, `Update` and `Delete` requests and their respective events in the {{site.bl-data}}. 

## Solution

You can get the `Id` of the item from the *request* parameters but only if the request is made by `Id` as opposed to requests by filter (or to all items).

Example:

```
if (request.itemId) {
	// data is accessed per item Id
	// access the item Id 
	var requestedItemId = request.itemId;
} else {
	// the request is accessing all items or supplying a filter
}
```

## See Also

* [Getting Started with {{site.bl-data}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-getting-started)
* [{{site.bl-data}} Events](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-data-events)
* [Modifying Data Requests](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-modifying-requests)
* [Using the JavaScript SDK](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-using-javascript-sdk)
* [How To Apply Filtering Criteria Before Returning Data]({% slug bl-apply-filter %})
* [How to Get the Result Status of the Request]({% slug bl-get-request-result %})
* [How to Get the Body of the Incoming Request]({% slug bl-get-request-body %})
* [How to Determine the User Account Which Is Making the Request]({% slug bl-determine-user-account %})
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})