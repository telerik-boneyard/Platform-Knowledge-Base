---
title: Extra Android Permissions Always Set
description: The built application package (APK) requires more permissions than the specified in my project settings.
type: troubleshooting
page_title: Unexpected Permissions in Android Аpp
slug: extra-android-permissions-always-set
position:
tags: appbuilder, android-permissions
teampulseid:
ticketid: 838093, 1082473
pitsid:

---
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>
  <tr>
    <td>Mobile development type</td>
    <td>{{site.ac}} app</td>
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>Android</td>
  </tr>
</table>

## Description
When I install my application on a device, it asks for permissions that I didn’t set up. Permissions are added although not included in any way in the `config.xml` or the `AndroidManifest.xml`.

## Cause
Some core Cordova plugins require certain Android permissions and they add these permissions to the `AndroidManifest.xml` at build time.

Using plugins is essentials in Cordova applications to access device features which on other hand require setting Android permissions.

Each plugin injects its required permissions in the `AndroidManifest.xml` file during build time - this is both done for convenience (you do not need to manually enter each required permission by the used plugins) but also to make sure that all required permissions are not omitted or deliberately removed as this would cause the plugin that requires them to not work properly.

## Solution
1. In order to reduce the number of permissions, disable any plugins that you are not using.
For example, if the app does not read, delete or add contacts, you should disable the core Contacts plugin. To do so, follow the steps to [manage Core plugins](https://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-core-plugins/enable-disable-core).

2. In order to check which Cordova plugins are affecting your app, examine the `plugin.xml` for each enabled/included plugin and look for any <uses-permission> modifications.

    Here is a small list of commonly used plugins and their permission requirements:
    -     **Battery**: Does not set additional permissions
    -     **Camera**: Sets **WRITE_EXTERNAL_STORAGE**
    -     **Capture**: Sets **RECORD_AUDIO**, **RECORD_VIDEO**, **WRITE_EXTERNAL_STORAGE**
    -     **Device**: Does not set additional permissions
    -     **Device Orientation**: Sets **ACCESS_COARSE_LOCATION** and  **ACCESS_FINE_LOCATION**
    -     **File**: Sets **WRITE_EXTERNAL_STORAGE**
    -     **Globalization**: Does not set additional permissions
    -     **InAppBrowser**: Does not set additional permissions
    -     **Media**: Sets **RECORD_AUDIO**, **MODIFY_AUDIO_SETTINGS**, **WRITE_EXTERNAL_STORAGE**, **READ_PHONE_STATE**
    -     **Network Information**:  **ACCESS_NETWORK_STATE**
    -     **Notification**: Does not set additional permissions
    -     **SplashScreen** - Does not set additional permissions
    -     **StatusBar**: Does not set additional permissions
    -     **Vibration**: **VIBRATE**
    -     **PushPlugin**: Sets **ACCESS_NETWORK_STATE**, **WAKE_LOCK**, **VIBRATE**
    -     **Telerik Analytics**: Sets **INTERNET**, **ACCESS_NETWORK_STATE**

3. If you are building in Debug mode the following Android permissions are added in order the LiveSync to work properly (they will not be added when building in Release):
```
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Notes
Apart from the permissions coming from plugins, make sure that there are no permissions set in the project properties for Android. Look at `.abproject` if some permissions are not set (this can also be viewed in the project's **Properties** &#8594; **Android** &#8594; **Permissions**).

## See Also
- [Android Permissions Explained](https://developer.telerik.com/featured/android-permissions-explained/)
- [Edit Configuration Files](https://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/edit-configuration)