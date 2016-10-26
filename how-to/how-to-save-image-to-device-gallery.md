---
title: How to Save Images to the Device Photo Gallery
description: Downloaded image is not shown in device gallery. How to show downloaded images to the device image gallery on Android and iOS?
type: how-to
page_title: How to Show Downloaded Image in the Device Photo Gallery
slug: save-image-in-gallery
position:
tags: Android, iOS, custom-plugin
ticketid: 1013757, 994473, 979194
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Run on Device</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS, Android</td>
  </tr>
</table>

## Description
When your app downloads an image on the user device, the image does not appear in the device photo gallery. This happens because the image is usually stored in the app sandbox or another private directory. Also, on Android, the app needs to trigger the OS media scanner in order to index the images in the gallery.

## Solution
You can use a custom plugin to save the image in the device photo gallery. One such plugin is [SaveImage](https://github.com/quiply/SaveImage). To use this plugin in your app, follow the steps below:

1. [Import the plugin in your {{site.ab}} project](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins).
2. Download your image, using [the File Transfer core plugin](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file-transfer/).
3. Use the `saveImageToGallery` method of the **SaveImage** plugin to copy the image to the device photo gallery.

You can find a fully functional sample project, demonstrating this approach here: [ImageToGallery Sample](https://github.com/PlatformSupport/ImageToGallery).

## See Also
Some plugins that deal with the same problem are listed below:

* [Canvas2ImagePlugin](https://github.com/devgeeks/Canvas2ImagePlugin)
* [MediaScannerPlugin](https://github.com/begrossi/MediaScannerPlugin)