---
title: How to Include the {{site.tuin}} Package
description: A tutorial for adding {{site.tuin}} to a mobile application in {{site.ab}}. You can use the UI controls by including the free limited edition or by downloading the pro version package from your account and importing it in your app.
type: how-to
page_title: How to Add {{site.tuin}} in {{site.ab}}
slug: include-nativescript-ui-package
position:
tags: appbuilder, nativescript
teampulseid:
ticketid:
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code ({{site.ab}})</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Package management</td>
  </tr>
  <tr>
    <td>Mobile Development type</td>
    <td>Native ({{site.ns}})</td>
  </tr>
</table>

## Description
[{{site.tuin}}](http://www.telerik.com/nativescript-ui) lets you incorporate native UI controls in your {{site.ns}} applications. You can choose between a free limited edition or a complete edition available with specific subscription plan. To have access to the UI components, you need to add the {{site.tuin}} package to your app in {{site.ab}}.

## Solution
### {{site.tuin}} (Free)
1. Open your app in {{site.ab}}.
1. In the **Project Navigator** (**Solution Explorer** in {{site.mvs}}), right-click the second node from the top and select **Manage Packages**.
1. On the **NPM** tab, search for `nativescript-telerik-ui` and select the package.
1. (Optional) Select a package version.
1. Click **Install**.

> **IMPORTANT:** The NPM `nativescript-telerik-ui-pro` package is for the Trial version.

<br />
### {{site.tuin}} (Pro)
1. Navigate to [www.telerik.com/account](https://www.telerik.com/account) and log in your account.
1. Under **Products and Subscriptions**, select **UI for {{site.ns}}**.
1. In the newly opened window, select **Download**.
1. Locate **Other Setup Files** and select `Telerik_UI_for_NativeScript.zip`. The file should begin downloading automatically.
1. After the download completes, extract the `.zip` file on your computer.<br/>
   The extracted file contains a `Packages` folder where you can find the required `nativescript-ui-pro.tgz` file. 
1. Run {{site.ab}} and open your app.
1. In the **Project Navigator** (**Solution Explorer** in {{site.mvs}}), right-click the second node from the top and select **Add** &#8594; **Existing Files**.
1. In the newly opened explorer window, navigate to `nativescript-ui-pro.tgz`, select it, and click **Open**.
1. Open `package.json` in the root of your app.
1. Inside the `dependencies` object add a path to the newly imported package: 
`"nativescript-telerik-ui-pro": "file:path-to-nativescript-ui-pro.tgz"`
<br/>
If the package was placed according to this tutorial, the dependency should look like this:
`"nativescript-telerik-ui-pro": "file:nativescript-ui-pro.tgz"`


<br />

> **IMPORTANT:** After you include the package in your project, you must add a reference to it in your [JavaScript](http://docs.telerik.com/devtools/nativescript-ui/getting-started) or [XML](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/ListView/getting-started) files.

## See Also
* [{{site.tuin}} Documentation](http://docs.telerik.com/devtools/nativescript-ui/introduction)
* [Managing Npm Packages for Native {{site.ab}} Apps](http://docs.telerik.com/platform/appbuilder/nativescript/working-with-frameworks/working-with-frameworks-ns)
