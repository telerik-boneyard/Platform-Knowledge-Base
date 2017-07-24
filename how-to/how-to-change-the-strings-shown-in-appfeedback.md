---
title: How to Change the Strings Shown in the UI of the AppFeedback Plugin
description: Modify the texts shown in the user interface of the AppFeedback plugin.  
type: troubleshooting
page_title: Modify the Texts in AppFeedback
slug:
position: 
tags: appfeedback, cordova, ios, android
teampulseid:
ticketid: 1103925
pitsid:
---

## Environment
<table>
 <tr>
   <td>Service</td>
   <td>{{site.ab-s}} ({{site.ab}}), {{site.af-s}}</td>
 </tr>
 <tr>
   <td>Plugin(s)</td>
   <td>Progress AppFeedback</td>
 </tr>
 <tr>
   <td>Mobile Development Type</td>
   <td>Hybrid</td>
 </tr>
 <tr>
   <td>Mobile OS</td>
   <td>Android, iOS</td>
 </tr>
</table>


## Description

This article provides the general steps you need to take to modify the strings shown in the user interface of the AppFeedback plugin.

## Solution for Android

To modify the strings for Android, you need to import the AppFeedback plugin to your project as a custom plugin.

1. Download the latest version of the AppFeedback plugin from the [GitHub repository](https://github.com/Telerik-Verified-Plugins/Telerik-AppFeedback).
2. Import the downloaded archive in your app as a [custom plugin](http://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins).
3. Open the `Plugins/Telerik-AppFeedback(-master)/src/android/FeedbackLib/res/values/values.xml` file. Here you can find all strings that can be modified. 
4. Modify the values you want to be changed. For example, to modify the title of the **Send Feedback** view you should change:  
```
<string name="title_activity_send_feedback">The New Send feedback</string>
```

## Solution for iOS

To modify the strings for iOS, you need to modify the options object passed to the plugin. For example:
```
var feedbackOptions = {
    enableShake: true,
    iOS: {
       feedbackSentAlertTitle: "Thanks",
       feedbackSentAlertText: "Just received your feedback",
       feedbackTitle: "Select an option to view or send feedback!"
    }
};
  
window.feedback.initialize(APP_FEEDBACK_API_KEY, feedbackOptions);
```

While for Android you can change all strings, for iOS only six items are exposed for modification. Below you can find the full list of properties and which UI element they affect: 
```
// Determines the title of the Alert window shown at the end of the feedback process.`
feedbackSentAlertTitle

// Determines the text of the Alert window shown at the end of the feedback process.
feedbackSentAlertText

// Determines the title of the feedback window.
feedbackTitle

// Determines the text displayed in the button which starts the feedback procedure.
feedbackMenuSendCaption

// Determines the text displayed in the button which opens the settings menu of the AppFeedback component.
feedbackMenuSettingsCaption

// Determines the text of the button which shows the current feedback items.
feedbackMenuMyFeedbackCaption
```  

## See Also

* [Introduction to Progress Telerik Platform AppFeedback](http://docs.telerik.com/platform/appfeedback/)
* [Adding In-App Feedback to Your Mobile App](http://developer.telerik.com/featured/adding-app-feedback-mobile-app/)
* [Progress AppFeedback plugin & sample](http://plugins.telerik.com/cordova/plugin/telerik-appfeedback)