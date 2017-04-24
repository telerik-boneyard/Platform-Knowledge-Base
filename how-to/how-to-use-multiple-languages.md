---
title: How to Use Multiple Languages in a Hybrid Mobile App  
description: An approach to localize a hybrid app in different languages based on user selection for preferred language.
type: how-to
page_title: How to Prepare a Hybrid App Content for Internationalization and Localization in Multiple Languages 
slug: how-to-use-multiple-languages
position: 
tags: kendo, localization, internationalization, html  
teampulseid:
ticketid: 1065279, 1103587, 1081447
pitsid: 
---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>
		{{site.ab-s}} ({{site.ab}}), <!--Code (AppBuilder)-->
		{{site.sb-s}}, <!--Views-->
		{{site.tp}} General, <!--Telerik Platform-->
	</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Localization, Internationalization</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid ({{site.ac}} app)</td>
  </tr>
</table>

## Description

By adding a support for a few more languages than the default language of your app you can make it usable for more users. 

For newly-created apps in {{site.tp}} the {{site.sb-s}} service ({{site.sb-s}}) already provides a way to do so in the generated code. The procedure for doing so in a project generated via the Views service is explained in [Implement Multi-Lingual Support](http://docs.telerik.com/platform/screenbuilder/troubleshooting/localization). 

Refer to the solution below if you would like to update your existing app or use an approach outside of the {{site.sb-s}} service. 
 
## Solution

Consult the steps below to implement an internationalization of your hybrid app built with {{site.tp}} and Kendo Hybrid UI. 

1. Create a variable (or a file) that contains a mapping for the static strings and texts used in your app for the different languages you would like to support. For instance:

	```
	app.strings = {
	    en: {
	        name: "English",
	        homeHeader: "Welcome",
	        homeTitle: "Home",
	        homeLangButton: "Switch Language"
	    },
	    bg: {
	        name: "Bulgarian",
	        homeHeader: "Добре дошли",
	        homeTitle: "Начало",
	        homeLangButton: "Смени езика"
	    }
	};
	``` 

2. Iterate over your application views and set one of the sets of strings as default. You can also use the `changeLanguage` function to allow the user switching the language. 

	```
	'use strict';
  
	app.home = kendo.observable({
	    onShow: function() {},
	    afterShow: function () { },
	    lang: app.strings.en,
	    changeLanguage: function () {
	        var currentLanguage = this.get("lang").name;
	  
	        if (currentLanguage == "English") {
	            this.set("lang", app.strings.bg);
	        }
	        else {
	            this.set("lang", app.strings.en);
	        }
	    }
	});
	```

3. Make sure to bind the required elements in your views to the provided string values. For example, the following markup is binding the header title, a header of the page and a button to the localized strings. 

	```
	<div data-role="view" data-layout="main" data-model="app.home" 
	    data-init="app.home.onInit" data-show="app.home.onShow" data-after-show="app.home.afterShow" 
	    id="homeScreen" class="screen">
	    <header data-role="header">
	        <div data-role="navbar">
	            <h2 data-bind="text: lang.homeTitle"></h2>
	        </div>
	    </header>
	    <h2 data-bind="text:lang.homeHeader"></h2>
		<a data-role="button" data-bind="events: {click: changeLanguage}">
	    	<span data-bind="text: lang.homeLangButton"></span>
	    </a>
	</div>
	``` 
## See Also


* [Implement Multi-Lingual Support](http://docs.telerik.com/platform/screenbuilder/troubleshooting/localization)
* [Cordova Globalization Plugin](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-globalization/)