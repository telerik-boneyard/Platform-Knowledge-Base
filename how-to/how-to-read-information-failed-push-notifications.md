---
title: How to Programmatically Read Information for Failed Push Notifications
description: Creating a work-flow for reading programmatically feedback information for failed push notifications
type: how-to
page_title: How to Programmatically Read Information for Failed Push Notifications
slug: how-to-read-information-failed-push-notifications
position:
tags: push-notifications
teampulseid: 
ticketid:  1046311, 1081831, 00386776
pitsid:

---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.bs-n}} ({{site.bs}})</td>   
  </tr>
  <tr>
    <td>Feature</td>
    <td>Push Notifications</td>
  </tr>
</table>

## Description

You need to programmatically track the status and feedback for the sent push notifications and optionally, take action in case of failed push notifications. 

## Solution

The following steps illustrate how to check the status for a push notification and in case of failed notifications, examine the logged feedback information for them. 
 
1. Request a push notification entry using the means explained in [Reading Push Notifications](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/push-read). For example, you can fetch all notifications that failed to be sent to more than 0 devices using the following filter. 

	```
	X-Everlive-Filter: { "Feedback.Failed": { "$gt": 0}} 
	``` 

2. Observe the returned `Feedback` object - it will contain a breakdown for each platform for the received from the vendor servers feedback for the given notification. For example, the following notification was sent to 8 iOS devices but failed for 1 device. 

	```
	{
	    "Feedback":{
	        "1":{
	            "Sent":0,
	            "Deactivated":0,
	            "Failed":0
	        },
	        "2":{
	            "Sent":0,
	            "Deactivated":0,
	            "Failed":0
	        },
	        "3":{
	            "Sent":0,
	            "Deactivated":0,
	            "Failed":0
	        },
	        "4":{
	            "Sent":8,
	            "Deactivated":0,
	            "Failed":1
	        }
	    }
	}
	```

3. To get the information for the failed notification:
	* Copy the Id of the item
	* Read the logs for this Id as explained in [Reading Push Notifications Logs](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/push-read-logs).

4. (Optional) Depending on the reason for the failed push notifications you can either troubleshoot and try to eliminate the reason for the failure or resend the notification to the failed devices as explained [here](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/push-resend). 

## Notes

You can read more information about the device platform types [here](https://docs.telerik.com/platform/backend-services/rest/push-notifications/push-object-fields).

You can read more information about the status field of a notification in the System set fields section [here](https://docs.telerik.com/platform/backend-services/rest/push-notifications/send-and-target/push-set-options#system-set-fields).

## See Also

* [Introduction to Administration API for Push Notifications](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/introduction)
* [Troubleshooting Push Notifications](https://docs.telerik.com/platform/backend-services/rest/push-notifications/troubleshooting/introduction)
* [Reading Push Notifications Logs](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/push-read-logs)
* [Reading Push Notifications](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/push-read)
* [Resending Push Notifications](https://docs.telerik.com/platform/backend-services/rest/administration-api/push-notifications/push-resend)
