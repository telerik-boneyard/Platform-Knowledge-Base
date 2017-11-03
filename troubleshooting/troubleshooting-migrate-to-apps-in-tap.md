---
title: Non-migrated Apps No Longer Visible in Telerik Platform / AppBuilder
description: Projects have disappeared in Telerik Platform / AppBuilder
type: troubleshooting
page_title: Can't See My Projects in Telerik Platform
slug: migrate-apps
position: 
tags: platform-core
teampulseid: 
ticketid: 1053525, 1053591, 1053606, 1053609, 1053695, 1047529, 1053767, 1053590
pitsid: 

---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Telerik Platform General, Code (AppBuilder), Data (Backend Services)</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>Apps in Telerik Platform</td>	
  </tr>
  <tr>
    <td>Code (AppBuilder) client</td>
    <td>In-Browser, Universal Desktop, Windows</td>	
  </tr>
</table>

## Description
<!-- Mandatory -->
Apps that are not migrated to Telerik Platform v2.0 are now missing in the {{site.tp}} dashboard. They are not shown in all of the online {{site.ab}} clients (In-Browser, Windows, Universal Desktop) as well.

## Cause
<!-- Mandatory -->
{{site.tp}} introduced a new project structure at the beginning of 2016, which aims to transform all different types of projects ({{site.ab}}, {{site.bs}}, etc.) into a single application. The reason for not being able to access your projects now is due to them not being migrated to apps (the new project type) during the transition period.


## Solution
<!-- Mandatory -->
To restore the projects in your {{site.tp}} account, you will need to migrate them:

1. Login to your account in [{{site.tp}}](https://platform.telerik.com).
1. Once you are on the apps dashboard, change the browser URL in the address bar from something similar to:<br>
`https://platform.telerik.com/#account/<your-account-id>/apps`<br>
to:<br>
`https://platform.telerik.com/#migration-wizard`<br>
This will open the migration wizard for your projects.
1. Next, follow the steps from this [article](https://docs.telerik.com/platform/help/app-migration), in order to check what the migration wizard do and understand how to relate your existing projects to apps.
1. After your projects are migrated, you will be able to access them again.

## Notes
<!-- Optional -->
This functionality will be available for a short period of time, so that you can review the whole process in the above link and decide how the apps should be configured during the migration. 

## See Also
<!-- Optional -->
[New App Structure in {{site.tp}}](https://docs.telerik.com/platform/help/getting-started/introduction)
