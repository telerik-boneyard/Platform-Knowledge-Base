---
title: Your Cloud Database Quota is Too High or Was Exceeded
type: troubleshooting
page_title: You have exceeded the limit of your {{site.tbs}} subscription!
tags: backendservices
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

You may have also received an email notification stating: "You have exceeded the limit of your {{site.tbs}} subscription!", followed by details about the exceeded database quota.

## Possible Cause

Your app is writing excessive amounts of Business Logic logs which count in the database quota. Business Logic logs contain statistical and debugging information about operations inside your app involving custom Cloud Functions, Stored Procedures, and other types of business logic code.

## Solution

You need to delete the Business Logic logs to return your data usage back into the Database quota limit.

To delete some or all Business Logic logs:

1. Log in to the {{site.tap}} portal and open your app.
2. Click **Business Logic** in the left-side navigation.
3. Click **Logs** in the tab navigation next to it.
4. Select what to delete:
  1. To delete all Business Logic logs, click the **Delete all** button.
  2. To delete a subset of the Business Logic logs, click the respective check boxes and then click the **Delete** button.
5. In the dialog box that appears, confirm the deletion.

> After deleting Business Logic logs, allow a few hours for the new database quota usage to be measured and updated in your subscription details.

</br>
> You can also delete Business Logic logs [programmatically](http://docs.telerik.com/platform/backend-services/rest/server-side-logic/cloud-code/debugging/managing-cloud-code-logs#delete-cloud-code-logs). This allows you to select which logs to delete using elaborate filtering criteria such as date, function name, result type, and so on.

You may also want to consider disabling the Business Logic logs if your app is in production or if you do not longer need to keep them.

To disable Business Logic logs:

1. Log in to the {{site.tap}} portal and open your app.
1. Click **Business Logic** in the left-side navigation.
1. Click **Settings** in the tab navigation.
1. Unselect the **Enable cloud code logging** option.

## See Also

* [View your {{site.tp}} Subscription](http://docs.telerik.com/platform/help/licensing/view-subscription)
* [Managing Business Logic Logs Programmatically](http://docs.telerik.com/platform/backend-services/rest/server-side-logic/cloud-code/debugging/managing-cloud-code-logs)
