---
title: Additional Digit Appended to Version Code after Android Build
description: The Android Version Code has the number two (2) appended to it after an application package cloud build.
type: troubleshooting
page_title: Wrong Version Code after Cloud Build
slug: additional-digit-appended-to-apk
position:
tags: appbuilder, android, cordova
teampulseid:
ticketid: 1003785, 1015088, 1020035
pitsid:

---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code, Distribution</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Android Cloud Build - Application package </td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid 
  <tr>
    <td>Mobile OS</td>
    <td>Android</td>	
  </tr>
  <tr>
    <td>Cordova framework version</td>
    <td>Cordova 3.7.0 and above</td>	
  </tr>
</table>

## Description
There is an additional **2** appended in the `android:versionCode` property after you build a hybrid project for the Android platform. For example, if you have set the **Properties > Android > Version Code** to **1**, after the Cloud Build or Publish operation, the actual versionCode in the `AndroidManifest.xml` of the apk will be **12**.

## Steps to Reproduce
1. Create a Cordova application.
1. Verify that the **Version Code** property, under **Properties > Android** is set to **1**.
1. Build the project for the Android platform as an application package.
1. Check the `AndroidManifest.xml` of the built apk. The `android:versionCode` is **12**.


## Cause
This is an external issue in the Apache Cordova framework. More information about this is available here:

* [platforms/android/build.gradle Modifies Android versionCode on Jira](https://issues.apache.org/jira/browse/CB-8976?jql=text%20~%20%22versionCode%22)
* [Why does Cordova/Phonegap append 8 to my Android Version Code? on Stack Overflow](http://stackoverflow.com/questions/32951375/why-does-cordova-phonegap-append-8-to-my-android-version-code)

## Solution
No verified solution available.

This is the original behavior applied by Cordova for differentiating between the Android ARM and x86 types of Gradle build. At this stage, we have decided not to interfere with this logic, as our modification can conflict with the solution Cordova comes up with in the future.

## Notes
Even though modified internally, the version code will not increase too quickly and you will not run out of possible version codes.

With the current convention and the internal modification, when you increase your version code by one, your actual version code will be increased by ten. For example, when you enter 16, the version code of the apk becomes 162. The next time you need to increase this, you can enter 17 and the version code will become 172.

If you follow the [standards for versioning](http://developer.android.com/tools/publishing/versioning.html) your app, you will be able to use 214,748,364 numbers for version code.