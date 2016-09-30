---
title: App Cannot Connect to a Remote Service over HTTPS When Running on Device
description: App cannot read or send data to a web service via HTTPS when deployed on a device and produces an unspecific error.
page_title: App Cannot Connect to Remote Service over HTTPS When Running on Device
slug: app-cannot-connect-to-remote-service
tags: connect, iOS, web-service, AppBuilder
ticketid: 1061272, 1029681, 1011781, 1006104
---

## Environment 
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>
  </tr>
  <tr>
    <td>Feature</td>
    <td>Run on Device</td>
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app)</td>
  </tr>
</table>

## Description
All HTTPS requests to a specific remote point fail when you deploy your app on a physical device. The same requests work when the app is running in the device simulator. Upon inspecting the error arguments of the failed request, you find `statusText: error` and no error message or response text.

The issue is observed on iOS devices with either **Release** or **Debug** build configuration and on Android devices when the app is built with **Release** configuration.

## Cause
This problem occurs when the remote server uses an untrusted SSL certificate. It could happen if the server uses a certificate form a trusted authority but does not have any intermediate certificates installed, or if the server uses a self-signed certificate. You can check if there is such a problem with your server certificate by running it through an online SSL certificate checker tool like [Symantec CryptoReport](https://cryptoreport.symantec.com/checker/).

As a common security measure, the WebView blocks HTTPS requests to untrusted remote points.

The Android WebView makes an exception to this rule, allowing connections over HTTPS to a server using an untrusted certificate, but only when you build the app with **Debug** build configuration. When the app is built with **Release** configuration, connections to such servers are blocked for security reasons.

The iOS WebView blocks all HTTPS requests to untrusted remote points, no matter what build configuration you use to produce the app package.

## Solution
Use a trusted certificate on the server that you want to connect to. If you are already using a certificate issued by a trusted certificate authority, you need to check for any missing intermediate certificates that link your certificate to the root certificate of the issuer.

## Notes

Sometimes, using a trusted certificate is not possible for development and testing scenarios, or you may need a quick fix until the server is correctly configured. In these cases, to be able to work on your iOS version of the app, you can choose to modify the behavior of the app and prevent it from blocking the request. You can achieve this using the third-party [Certificate Plugin](https://github.com/hypery2k/cordova-certificate-plugin).

When you publish your app, you *must remove the Certificate plugin* and ensure that the remote server uses a trusted certificate.