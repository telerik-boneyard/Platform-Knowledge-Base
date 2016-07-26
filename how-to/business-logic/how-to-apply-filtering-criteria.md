---
title: How To Apply Filtering Criteria Before Returning Data
description: An example to apply a filtering criteria before returning data
type: how-to
page_title: How To Apply Filtering Criteria Before Returning Data in the {{site.bs-bl}} Layer?
slug: bl-apply-filter
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

Often you may need to apply a strict filter on the items returned from the data operation or determine whether a filtering expression is incoming with the request.  

## Solution

Setting the following filter in the `beforeRead` event handler will instruct the server to return only the items where the field `IsActive` equals `true`.

```
var filter = {
    "IsActive": true
};

request.filterExpression = filter;
``` 

Another example is to restrict the returned result only to items that are modified after a certain date:

```
var rangeStart = new Date();
rangeStart.setDate(rangeStart.getDate() - 10);

request.filterExpression = { "ModifiedAt": {"$gte": rangeStart }}; // items modified in the last 10 days
```

You may also need to combine the incoming filter (if any) with the business logic filter. 

```  
if(request.filterExpression && Object.keys(request.filterExpression).length > 0) {
    var incomingFilter = request.filterExpression;

    var myFilter = {
    	"IsActive": true
	};

    newFilter = {
        $and: [incomingFilter, myFilter]
    }; 

	request.filterExpression = newFilter; 
}
```    

## See Also

* [Getting Started with {{site.bl-data}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-getting-started)
* [{{site.bl-data}} Events](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-data-events)
* [Modifying Data Requests](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-modifying-requests)
* [Introduction to Querying](http://docs.telerik.com/platform/backend-services/rest/queries/introduction)
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})
* [How to Get the Result Status of the Request]({% slug bl-get-request-result %})
* [How to Get the Body of the Incoming Request]({% slug bl-get-request-body %})
* [How to Determine the User Account Which Is Making the Request]({% slug bl-determine-user-account %})
* [How to Determine the Id of the Requested Item]({% slug bl-id-requested-item %})