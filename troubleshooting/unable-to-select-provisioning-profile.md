---
title: Unable to Select Provisioning Profile for iOS App Build
description: When adding a provisioning profile in Telerik Platform and trying to build an iOS app, the provisioning profile seems to be invalid/not applicable, even though in Apple Dev Center it is valid.
type: troubleshooting
page_title: Invalid Provisioning Profle When Building for iOS
slug: unable-to-select-provisioning-profile
position:
tags: ios, code-signing, build
teampulseid:
ticketid: 1073167, 1074291, 1072732
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
    <td>Build - iOS, Publish - iOS</td>
  </tr>
</table>
</table>

## Description
When you try to build or Publish your iOS app, at the **Select Provision** screen, you are unable to select your already imported provisioning profile. You may see an error message or an X next to the App ID.

## Error Message
`No applicable provisioning profiles available`

## Possible Causes
There are a few reasons why your provisioning profile may not be applicable for an app build. Below, you can find a list:

1. The App ID of the provisioning profile does not match the Application Identifier of the app.
1. The provisioning profile has expired.
1. The type of provisioning profile that you have imported does not match the type of deployment that you are targetting (run on device, publish to App Store, distribute privately).
1. The certificate that you used to create your provisioning profile is not imported in {{site.tp}}.
1. The certificate that you used to create your provisioning profile has expired.
1. The certificate that you used to create your provisioning profile has been revoked.

## Solution
As there are a number of possible reasons for this problem, the best solution is to rule them out one by one. To do this, follow the steps below. Each step addresses one of the reasons listed above.

1. Open **Options** (&#8594; **Mobile**) &#8594; **iOS** &#8594; **Provisioning Profiles** and see if the App ID of any of your provisioning profiles matches the Application Identifier that you specified in the app **Properties** screen.

	If there is no match, you need to [adjust your app Application Identifier](http://docs.telerik.com/platform/appbuilder/cordova/configuring-your-app/general-properties) or [create a new App ID and provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/register-app-id) in the [iOS Dev Center](https://developer.apple.com/account/).
1. In the **Provisioning Profiles** screen, check your provisioning profile expiry date.

	If it has passed, you need to [create a new provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/code-signing) in the [iOS Dev Center](https://developer.apple.com/account/).
1. In the **Provisioning Profiles** screen, see the type of the provisioning profile that you have.

	For publishing to the App Store, the type needs to be **App Store**. For testing and private builds, you need **Development**, **Add Hoc** or **Enterprise** type of provisioning profile. If the type does not match the type of build that you want to make, you need to create a new [matching provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/code-sign-glossary#provisioning-profile) in the [iOS Dev Center](https://developer.apple.com/account/).
1. In the **Provisioninng Profiles** screen, select or expand the provisioning profile to see its certificate.

	If the certificate is grayed out, this means that you have not imported it into {{site.tp}}. Locate and [import the certificate](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/import-existing-ios-certificate).
1. Open **Options** (&#8594; **Mobile**) &#8594; **iOS** &#8594; **Cryptographic Identities** and check your certificate expiry date.

	If it has expired, you need to [create a new certificate](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/create-csr) in the [iOS Dev Center](https://developer.apple.com/account/) and then [generate a new provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/code-signing) with this certificate. When you are finished, [add the certificate](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/add-new-certificate) and [import the provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/add-provisioning-profile) in {{site.tp}}.
1. Open [iOS Dev Center](https://developer.apple.com/account/) and go to **Certificates, Identifiers & Profiles** &#8594; **Certificates** and see the status of your certificates.

	If the certificate that you used for generating your provisioning profile is missing from the list, this means it has been revoked. You need to [create a new certificate](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/create-csr) and then [generate a new provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/code-signing) with this certificate. When you are finished, [add the certificate](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/add-new-certificate) and [import the provisioning profile](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/configuring-code-signing-for-ios-apps/add-provisioning-profile) in {{site.tp}}.

## Notes
All procedures along with detailed explanations for creating App IDs, certificates and provisioning profiles are described in this section of the {{site.ab-s}} ({{site.ab}}) documentation: [Code Signing Your Hybrid App](http://docs.telerik.com/platform/appbuilder/cordova/code-signing-your-app/code-signing).