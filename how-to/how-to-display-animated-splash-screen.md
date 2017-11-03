---
title: How to Display an Animated Splash Screen in a Hybrid App
description: Make the splash screen with animated logo. Way to add an animated splash screen.
type: how-to
page_title: Show an Animated Splash Screen
slug: display-animated-splash-screen
position: 
tags: AppBuilder, Cordova, core, plugin, splashscreen, splash, screen, animation
teampulseid:
ticketid: 1066046, 1060903, 1057281
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
    <td>Splash screen</td>	
  </tr>
  <tr>
    <td>Plugin</td>
    <td>Cordova Splash Screen</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid {{site.ac}}</td>	
  </tr>
</table>

## Description

It is not possible to use an animated splash screen using the integrated functionality for building hybrid mobile applications in {{site.tp}}.

## Solution

{% include /_troubleshooting/no-solution-available.html %}

## Suggested Workarounds

Display the animation in the first view of the app:

1. Display a static splash screen that corresponds to the first frame of the animation.
1. Once the splash screen is hidden, display a view containing the actual animation.
1. After the animation is completed, navigate to a desired view.

## See Also

* [Configure the Icons and Splash Screens Using Multiple Image Sources](https://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/assets/configure-icons-splashscreens)
* [Cordova Splash Screen Plugin](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)