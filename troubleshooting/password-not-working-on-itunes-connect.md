---
title: Password Does Not Work When Publishing to iTunes Connect
description: AppBuilder would not allow me to log into iTunes Connect. Publishing app to Itunes - password and username not working, they work on Itunes Connect site.
type: troubleshooting
page_title: Credentials for iTunes Connect Do Not Work on Publish
slug: password-not-working-on-itunes-connect
tags: AppBuilder, iOS, publish
teampulseid:
ticketid: 1051976, 1073340
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Publish to iTunes Connect</td>
  </tr>
</table>

## Description
When using {{site.ab}} to publish an iOS app to iTunes Connect, the publish procedure fails with an error message about an app-specific password.

## Error Message
* `Sign in with the app-specific password you generated. If you forgot the app-specific password or need to create a new one, go to appleid.apple.com (-22938)`
* `Please sign in with an app-specific password. You can create one at appleid.apple.com. (-22910)`

## Cause
These errors mean that you have enabled two-step verification or two-factor authentication for your Apple ID. With these feaures enabled, iTunes Connect requires an app-specific password when you use services that do not support entering a verification code, such as {{site.ab}}. 

## Solution
Create an app-specific password in your Apple ID account page and use it when logging into iTunes Connect from {{site.ab}}. Instructions for generating an app-specfic password are available in [this article](https://support.apple.com/en-us/HT204397).

## See Also
* [Frequently asked questions about two-step verification for Apple ID](https://support.apple.com/en-us/HT204152)
* [Two-factor authentication for Apple ID](https://support.apple.com/en-us/HT204915)