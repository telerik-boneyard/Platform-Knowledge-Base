---
title: "FAQs: {{site.bs-bl}}"
description: "An overview of the most common {{site.tp}} {{site.bs-bl}} operations presented in a Q&A format."
type: faq
page_title: "FAQs: Common operations in {{site.bs-bl}}"
slug: faq-business-logic-data-operations
position:
tags: backendservices, cloud-code
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

## Introduction

This article answers questions about the {{site.bs-bl}} service of {{site.tp}}. They mainly revolve around making application-critical checks using the `request` and `response` objects and also performing common operations.

If not stated otherwise, the content is applicable to {{site.bl-data}} and {{site.bl-func}}.

* [Can I determine the user account making the request?](#can-i-determine-the-user-account-making-the-request)
* [How do I get the body of the incoming request?](#how-do-i-get-the-body-of-the-incoming-request)
* [How do I get the result status of the request?](#how-do-i-get-the-result-status-of-the-request)
* [How do I apply filtering criteria before returning data?](#how-do-i-apply-filtering-criteria-before-returning-data)
* [How do I determine the Id of the requested item?](#how-do-i-determine-the-id-of-the-requested-item)
* [Can I send a push notification when an item is created, updated, or deleted?](#can-i-send-a-push-notification-when-an-item-is-created-updated-or-deleted)

## Can I determine the user account making the request?

You can get information about the account from the `request.principal.data` object of the `request` parameters. This information, however, will be available only if the request was made by an authenticated user.

More information is available in [this article]({% slug bl-determine-user-account %}).

## How do I get the body of the incoming request?

You can get it from the `request` parameters.

More information is available in [this article]({% slug bl-get-request-body %}).

## How do I get the result status of the request?

You can use the `response` parameters of the `after` events of the {{site.bl-data}} to get the completion status of the data operation.

More information is available in [this article]({% slug bl-get-request-result %}).

## How do I apply filtering criteria before returning data?

**Applicable only to {{site.bl-data}}**. You can do this in the {{site.bl-data}} `before` event handlers.

More information is available in [this article]({% slug bl-apply-filter %}).

## How do I determine the Id of the requested item?

**Applicable only to {{site.bl-data}}**. You can get the `Id` of the requested item from the request parameters.

More information is available in [this article]({% slug bl-id-requested-item %}).

## Can I send a push notification when an item is created, updated, or deleted?

Yes. Use the [Cloud Code SDK](http://docs.telerik.com/platform/backend-services/javascript/apireference/CloudCode/Everlive/Everlive) in the appropriate `before` or `after` event handler to send a push notification. 

More information is available in [this article](../../backend-services/javascript/push-notifications/send-and-target/push-send#using-cloud-code).

## See Also

* [Getting Started with {{site.bl-data}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-getting-started)
* [{{site.bl-data}} Events](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-data-events)
* [Modifying Data Requests](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-for-data/cloud-code-for-data-modifying-requests)
* [Using the JavaScript SDK](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-code-using-javascript-sdk)
* [Getting Started with {{site.bl-func}}](http://docs.telerik.com/platform/backend-services/javascript/server-side-logic/cloud-code/cloud-functions/cloud-functions-getting-started)
