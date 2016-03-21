---
title: How to Whitelist the Elastic AWS IPs for Telerik Platform
description: Information for establishing a secure connection between your machine and Amazon Web Services AppBuilder stays behind.
type: how-to
page_title: Whitelisting Amazon IPs for secure AppBuilder connection
slug: how-to-whitelist-aws-ips 
position:
tags: platform-core, cloud-services
teampulseid: 
ticketid:  922445, 1014483
pitsid:

---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Telerik Platform</td>	
  </tr>
  <tr>
	<td>Feature</td>
	<td>Security, Connectivity</td>
  </tr>
</table>

## Description
Is there a way to whitelist the range of IP addresses that Telerik Platform uses on the Amazon Web Services infrastructure? How to do this having in mind that AWS IPs are elastic? I need this in order to establish a secure communication channel.

## Solution
> **IMPORTANT**: Please do have in mind that Amazon Web Services IP ranges are subject to change without notice. This is  further discussed [here](http://serverfault.com/questions/665191/whitelist-elastic-load-balancer-based-on-ip).

The following information should help you or your system administrator whitelest the elastic load-balancer based on the AWS IP range that Telerik Platform stays behind:

* The name of the load-balancer Telerik Platform services use is **_nginx7layerroutinglb-223465912.us-east-1.elb.amazonaws.com_**.
* The load-balancer is situated in the **us-east-1** region.
* The complete list of AWS IP addresses can be found [here](https://ip-ranges.amazonaws.com/ip-ranges.json). 
* Whitelist all the IPs from the above list, corresponding to the **us-east-1** region.

Domains used by Telerik Platform services:

* __identity.telerik.com__
* __platform.telerik.com__
* __*.icenium.com__
* __*.everlive.com__

Ports used by Telerik Platform services: __80__ and __443__