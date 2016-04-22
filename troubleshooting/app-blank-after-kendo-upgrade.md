---
title: Upgrading from Kendo UI Core to Professional Breaks App
description: After upgrading an app through the Package Manager to use Kendo UI Professional, it appears blank on start up. 
type: troubleshooting
slug: app-broken-after-kendo-upgrade,
tags: kendo, package-manager, references
ticketid: 1017633

---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Package Manager</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>
  </tr>
</table>

## Description
When you switch between Kendo UI Core and Kendo UI Professional in your app using the **Package Manager**, you may lose all style and functionality. If you check the Simulator or Device console, you will see multiple error messages about missing files and, usually, a `kendo is not defined` error message.

## Error Message
`Uncaught ReferenceError: kendo is not defined.`

## Cause
When you change the Kendo UI package type, the Package Manager replaces the script and style files with new ones that have different names. This causes script and style references to become invalid.

## Solution
You need to update the Kendo UI references in your app's `index.html` file. Replace the file names in the references as follows:

* `kendo.mobile.min.js` &#8596; `kendo.dataviz.mobile.min.js`
* `kendo.mobile.all.min.css` &#8596; `kendo.dataviz.mobile.min.css`
