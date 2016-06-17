---
title: Your Cloud Database Quota is Too High or Was Exceeded 
type: troubleshooting
page_title: You have exceeded the limit of your {{site.tbs}} subscription!
tags: [backendservices]
teampulseid:  
ticketid: 950285, 977670, 1012190
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Data (Backend Services)</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Data Storage</td>	
  </tr>
</table>

## Description

The Database quota usage of your {{site.tap}} app is quickly increasing even though it is not yet in production or is not actively used. 

Eventually, you also received an email notification that states that "You have exceeded the limit of your {{site.tbs}} subscription!" with the details about the exceeded database quota. 

## Possible Cause

Your app has logged too many cloud code logs which account for the database quota. A cloud code log is a statistical and debugging information about each operation of your app which involves a custom business logic code. 

## Solution

The suggested solution addresses only the aforementioned possible cause. 

To return the database quota usage back to the expected values you may consider the following:

1. Delete the cloud code logs 
	1. Open your app in {{site.tap}} portal
	2. Select **Business Logic** from the left-side navigation
	3. Click **Logs** from the tab navigation next to it
	4. Click the **Delete all** button

> After deleting the cloud code logs allow a few hours for the new database quota usage to be measured and updated in your subscription details. 

2. (Optional) Configure the Business Logic settings

You can manage the log retention policy from the Business Logic settings of your {{site.tp}} app. For example, if your app is in production or you do not longer need to keep the cloud code logs, disable the cloud code logging. 

1. Click **Settings** from the tab navigation
2. Deselect the *Enable cloud code logging* option


## Notes

???

## See Also

????