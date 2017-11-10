---
title: How to Obfuscate Java Code With ProGuard
description: Obfuscating the Java Code of an AppBuilder Apache Cordova app
type: how-to
page_title: Java Obfuscation for AppBuilder applications
slug: obfuscate-java-code
position:
tags: obfuscate, cordova, proguard
teampulseid: 
ticketid: 1077265
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder), Third-party product</td>	
  </tr>
  <tr>
	<td>Feature</td>
	<td>Security</td>
  </tr>
  <tr>
	<td>Mobile development type</td>
	<td>Hybrid (Cordova app)</td>
  </tr>
  <tr>
	<td>Mobile OS</td>
	<td>Android</td>
  </tr>
</table>

## Description
Application packages cannot be completely secured from reverse-engineering. Instead, it is recommended to use tools for code obfuscation and secure any proprietary code on a server. This article shows how to create a small custom plugin that enables ProGuard and obfuscates all Java code that is present in your {{site.ab}} {{site.ac}} application.

## Solution
1. Create an empty folder.
2. Inside the folder, create three files - `package.json`, `plugin.xml`, `enable-proguard.gradle`.
3. The `package.json` file contains only the most basic information required by a {{site.ac}} plugin. For example:

	```
	{
	  "name": "proguardplugin",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "keywords": [],
	  "author": "",
	  "license": "ISC"
	}
	```
4. The `plugin.xml` file is used to reference the `enable-proguard.gradle` file and include it in your app. For example:

	```
	<?xml version="1.0" encoding="UTF-8"?>
	<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
	        xmlns:android="http://schemas.android.com/apk/res/android"
	        id="proplugin"
	        version="0.0.1">
	
	    <name>proplugin</name>
	
	    <framework src="enable-proguard.gradle" custom="true" type="gradleReference"/>
	</plugin>
	```
5. The `enable-proguard.gradle` file contains the logic required to enable ProGuard and obfuscate your code.
	
	```
	android {
	    buildTypes {
	        release {
	            minifyEnabled true
	            proguardFile getDefaultProguardFile('proguard-android.txt')
	        }
	    }
	}
	```
6. The last step is to archive the folder containing those files and [import it to your app as a custom plugin](https://docs.telerik.com/platform/appbuilder/cordova/using-plugins/using-custom-plugins/add-custom-plugins).

## Notes
Obfuscation with ProGuard in {{site.ab}} can also be achieved by modifying an already existing custom plugin. This can be accomplished by adding the `enable-proguard.gradle` file to the plugin folder and referencing it in `plugin.xml`.

## See Also
* [Obfuscation (Wikipedia)](https://en.wikipedia.org/wiki/Obfuscation_(software))
* [ProGuard](https://proguard.sourceforge.net/)
* [Shrink Your Code and Resources](https://developer.android.com/studio/build/shrink-code.html)
* [Security and Design](https://developer.android.com/google/play/billing/billing_best_practices.html)
* [Securing a PhoneGap/Cordova Hybrid Mobile App](https://developer.telerik.com/featured/securing-phonegapcordova-hybrid-mobile-app/)
