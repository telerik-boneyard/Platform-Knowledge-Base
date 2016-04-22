---
title: Input Type File Not Working on Android
description: HTML input element of type file is not working in the Android web view.
type: troubleshooting
page_title: HTML File Input Not Responding in the Android Web View
slug: troubleshooting-input-type-file-not-working-in-android
position:
tags: appbuilder, android
teampulseid:
ticketid:  1002377,  1020566, 1018666
pitsid:

---

## Environment
<table>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>Android</td>	
  </tr>
  <tr>
    <td>Mobile OS version</td>
    <td>4.4 KitKat and above</td>	
  </tr>  
</table>

## Description
Using `<input type="file">` doesn't work on some Android devices. In most of the cases, when the **Choose File** button is tapped there is no response from the web view and the user cannot select a file from the device. 


## Steps to Reproduce
1. Create a Cordova application.
1. Insert the `<input type="file">` element in the `<body>` of the *index.html* file.
1. Build and deploy the project to an Android 4.4 or higher device.
1. Try to interact with the **Choose File** button.

## Cause
This is an external issue in the Google Chromium web view. More information about this is available here:

* [File input element not opening file picker in Android 4.4 on Jira](https://issues.apache.org/jira/browse/CB-5294)
* [File upload broken as a Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=278640)
* [HTML file input in Android webview (4.4 KitKat) on Stack Overflow](http://stackoverflow.com/questions/19882331/html-file-input-in-android-webview-android-4-4-kitkat)

## Solution
{% include /_troubleshooting/no-solution-available.html %}

## Suggested Workarounds
### Workaround #1
Replace the default web view in your application with Crosswalk which provides a fix for the `<input type="file">` problem. You can find more about Crosswalk [here](https://crosswalk-project.org/).

1. Open your project in **Code** (formerly AppBuilder).
1. Make sure that it targets Cordova 4.0 or higher. If it doesn't, you will need to [migrate it](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/configure-target-framework#procedure).
1. [Change the Android web view to Crosswalk](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/configure-web-views).
1. Build and deploy your AppBuilder project on Android device in order to verify that the change resolves the issue.

### Workaround #2
Use a third-party Cordova plugin to handle the file upload on Android. Such plugin can be found [here](https://github.com/MaginSoft/MFileChooser) and to import in your AppBuilder project, you can follow [these steps](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins). 

### Workaround #3
If you want to upload an image from the device gallery or take a photo with the device camera, you can also use the Cordova Camera plugin integrated in Telerik Platform.

1. [Enable the Camera plugin from the Plugins page of your project](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-core-plugins/enable-disable-core).
1. In your application, replace the `<input type="file">` element with a call to the Camera plugin API. For example:

```JavaScript
navigator.camera.getPicture(function(){
    // On Success logic
    that._onPhotoURISuccess.apply(that,arguments);
}, function(){
    // On Failure logic
    cameraApp._onFail.apply(that,arguments);
}, {
    quality: 50,
    destinationType: cameraApp._destinationType.FILE_URI,
    sourceType: PHOTOLIBRARY
});
```
> **IMPORTANT:** Plugin APIs can be accessed after the *deviceready* event has fired. Otherwise, their JavaScript objects might be undefined.

To learn more about working with the Camera, check the [Telerik Platform Camera sample app](http://docs.telerik.com/platform/samples/Sample-Camera/) and the complete documentation for the [Cordova Camera API](https://github.com/apache/cordova-plugin-camera).