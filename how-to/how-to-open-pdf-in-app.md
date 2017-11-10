---
title: How to Open PDF Files Inside Your App Using PDF.js
description: Open PDF files on iOS, Android and Windows Phone devices using PDF.js
type: how-to
page_title: Open PDF Files Inside Your App Using PDF.js
slug: open-pdf-inside-app
position:
tags: pdf, pdf.js, custom
teampulseid: 
ticketid: 
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code ({{site.ab}}), Third-party product</td>	
  </tr>
  <tr>
	<td>Mobile development type</td>
	<td>Hybrid (Cordova app)</td>
  </tr>
</table>

## Description
Opening a PDF in a hybrid app is possible out of the box only on iOS devices. For Android and Windows Phone, the device needs to have an external PDF viewer. An alternative approach is to use a JavaScript library, like [PDF.js](https://mozilla.github.io/pdf.js/), to parse and render the PDF file inside the WebView. This article provides basic steps and a sample for opening a PDF file inside your app using PDF.js.

## Solution
1. Go to the [PDF.js page](https://mozilla.github.io/pdf.js/) and click **Download**.
2. On the download page, click **Stable**.
3. Extract the downloaded archive and copy the `pdf.js` and `pdf.worker.js` files from the `build` folder into a `scripts/pdf.js/` folder in your project.
4. Reference the `pdf.js` and `pdf.worker.js` files in your `index.html`. 
	
	```
    <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
    <script type="text/javascript" charset="utf-8" src="scripts/pdf.js/pdf.js"></script>
    <script type="text/javascript" charset="utf-8" src="scripts/pdf.js/pdf.worker.js"></script>
	```
5. [Enable the File core plugin](https://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-core-plugins/enable-disable-core) in your app.
6. (*Windows Phone only*) Explicitly set the path to the `pdf.worker.js` file in your code:

	```
        PDFJS.workerSrc = "scripts/pdf.js/pdf.worker.js";
	```
7. Use the File plugin to read the PDF file as a `Uint8Array` and pass it to the `PDFJS.getDocument()` function.
8. Render the parsed PDF content into a `canvas` element on the page.

A working example is available here: [PDF Create/Open sample app](https://github.com/PlatformSupport/pdf-sample).

## Notes
Steps 7 and 8 describe logic that includes code snippets, which are too long to present in a concise way in this article. You can refer to the [`scripts\open.js`](https://github.com/PlatformSupport/pdf-sample/blob/master/PDF%20Sample/scripts/open.js) file in the [PDF Create/Open sample app](https://github.com/PlatformSupport/pdf-sample).

This example relies heavily on a third-party library. At the time of testing, it worked on all three operating systems supported by Telerik Platform. However, there is no guarantee that this code will continue to work seamlessly with future OS versions. It is recommended to test this functionality in your app with each release of a new OS version and each update of the PDF.js library that you decide to use.

## See Also
* [PDF.js Getting Started](https://mozilla.github.io/pdf.js/getting_started/)
* [PDF.js Wiki](https://github.com/mozilla/pdf.js/wiki)
* [File Plugin Documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/)