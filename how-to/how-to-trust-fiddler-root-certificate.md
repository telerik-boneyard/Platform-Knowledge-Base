---
title: How to Trust the Fiddler Root Certificate
description: Step by step tutorial for trusting the Fiddler root certificate.
type: how-to
page_title: Trust the Fiddler Root certificate
slug: trust-fiddler-root-cert
position:
tags: fiddler, other
teampulseid: 
ticketid: 
pitsid: 
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Third-party product</td>	
  </tr>
</table>

## Description
When the Fiddler Root certificate on the machine is not trusted, you cannot capture HTTPS traffic and Fiddler logs do not contain any information about Telerik Platform/AppBuilder requests.

The article provides general steps for trusting the Fiddler Root certificate on your local machine. This is normally done automatically when installing Fiddler, but certain environment configurations disallow it and in such cases, you need to manually install and trust the certificate. 

## Solution
1. Run **Fiddler** and go to **Tools** -> **Fiddler Options**.
1. On the **HTTPS** page, click **Export Root Certificate to Desktop**.
1. In **Windows Explorer**, navigate to **Desktop** and double-click **FiddlerRoot.cer**.
1. Click **Install Certificate**, install it for the **Local Machine** and click **Next**.
1. Select **Automatically select the certificate store based on the type of certificate**.
1. Click **Next** and then **Finish**.
1. After you close the "**The import was successful**" alert, go back to **Fiddler's Tools** -> **Fiddler Options** -> **HTTPS**.

The Fiddler Root certificate is now trusted on your machine and you can capture HTTPS traffic.

## See Also
* [How to Capture Fiddler Trace]({% slug capture-fiddler-trace %})
* [Fiddler Documentation - Configure Windows to trust Fiddler Root Certificate](http://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/TrustFiddlerRootCert)