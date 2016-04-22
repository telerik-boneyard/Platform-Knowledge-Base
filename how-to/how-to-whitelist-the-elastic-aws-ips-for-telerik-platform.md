---
title: How to Whitelist the Elastic Amazon Web Services IPs
description: Whitelist the range of IP addresses that Telerik Platform uses. How to do this for elastic AWS IPs? I need to establish a secure communication channel. that AppBuilder stays behind.
type: how-to
page_title: Whitelisting Amazon IPs for Secure AppBuilder Connection
slug: how-to-whitelist-aws-ips 
position:
tags: platform-core, cloud-services
teampulseid: 
ticketid:  922445, 1014483
pitsid:
aws: Amazon Web Services

---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Telerik Platform General</td>	
  </tr>
  <tr>
	<td>Feature</td>
	<td>Security, Connectivity</td>
  </tr>
</table>

## Description
The Telerik Platform is hosted on the {{ page.aws }} (AWS) and uses a range of elastic IP addresses. If you are behind a firewall, you might need to whitelist this range of IPs to establish a secure connection between your system and the Telerik Platform.

## Solution
> **IMPORTANT**: {{ page.aws }} IP ranges are subject to change without notice. This is  further discussed [here](http://serverfault.com/questions/665191/whitelist-elastic-load-balancer-based-on-ip).

This information will help you or your system administrator whitelist the elastic load balancer based on the AWS IP range that Telerik Platform stays behind:

* The name of the load balancer that Telerik Platform services use is **_nginx7layerroutinglb-223465912.us-east-1.elb.amazonaws.com_**.
* The load balancer is situated in the **us-east-1** region.
* The complete list of AWS IP addresses can be found [here](https://ip-ranges.amazonaws.com/ip-ranges.json). 

Whitelist all the IPs from the above list, corresponding to the **us-east-1** region.

## Notes
Domains used by Telerik Platform services:

* **identity.telerik.com**
* **platform.telerik.com**
* **\*.icenium.com**
* **\*.everlive.com**

Ports used by Telerik Platform services: **80** and **443**