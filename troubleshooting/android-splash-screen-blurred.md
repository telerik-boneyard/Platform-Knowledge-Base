---
title: Android Splash Screen Appears Blurred
description: Splash screen image renders blurred in app. Splash screens in apps are slightly blurred on larger devices (tablets).
type: troubleshooting
page_title: Splash Screen is Blurred on Android Device with Large Screen
slug: android-splash-screen-blurred
position:
tags: android
teampulseid:
ticketid:
pitsid:

---

## Environment
<table>
  <table>
  <tr>
    <td>Service</td>
    <td>{{site.ab-s}} ({{site.ab}})</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Customize assets</td>
  </tr>
</table>
</table>

## Description
Splash screen images appear blurred on larger devices. Even when you upload images for all large screen sizes in your app, some devices show the splash screen blurred or distorted.

## Cause
This problem with Android devices comes from the fact that their screen sizes vary a lot and there may not be a splashscreen image from the pre-defined sizes that exactly fits the given screen. In such a case, the image is resized to fit the screen, which may result in a distorted or blurred splash screen. 

## Solution
When targeting multiple devices and resolutions on Android, it is best to use 9-patch images, to ensure that the splash screen will show without blurring.

You can create 9-patch images in every image editing tool by following the requirements for such an image, that are listed in the [Android documentation on 9-patch images](https://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch). If you do not want to create the images manually, you can use [this online tool](https://romannurik.github.io/AndroidAssetStudio/nine-patches.html) or the [built-in editor of the Android SDK](https://developer.android.com/studio/write/draw9patch.html).

When you have the 9-patch image, follow these steps to add it to your app:

1. Open your app **Properties**.
2. Navigate to the **Assets** tab.
3. Under the **Android** tab, scroll down to **9Patch Splash Screens**.
4. Replace each splash screen individually.
5. Re-build your app and deploy it on the Android device.

The Android splash screen should now be sized to fit the device screen correctly.
