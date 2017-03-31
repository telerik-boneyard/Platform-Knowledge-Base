---
title: Team Members Cannot See Changes Made by Other Developers
description: Тutorial intended for developers who need to see the changes applied by other team members in their {{site.tp}} account.  
type: Troubleshooting
page_title: Changes Made by Team Мembers Are Not Visible to Other Developers
slug: account-members-not-seeing-app-changes
position:
tags: version-control, github, collaboration
teampulseid: 
ticketid:  1000257, 984390, 956285, 945633, 945575, 945500, 931027
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.tp}}</td>	
  </tr>
  <tr>
	<td>Feature</td>
	<td>Version Control and Collaboration</td>
  </tr>
</table>

## Description
Developers working on the same project in {{site.tp}} cannot see each others changes. They could see the project but only in its initial setup with the default files, even if all team members have full rights. Opening the project from other {{site.tp}} clients also doesn't work, even though the universal desktop client and the classic windows client display the same set of apps as the in-browser client.

## Solution
In {{site.tp}} when a new app is created, it automatically becomes visible to all team members of the account. The app, however, is not configured for collaboration by default and account members cannot contribute or see each others changes in it. Instead a local repository is created for every account member who opens the app. All version control operations are performed within the local repository and are therefore not available to the other team members working on the app.

To collaborate with other users in {{site.tp}}, account members need to manually configure a remote repository for their apps. They can use any third-party Git provider such as GitHub or BitBucket and follow the procedure for [configuring a {{site.tp}} app for collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/configure-for-collaboration). In order for multiple users to collaborate on the app, they have to be [invited as collaborators](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/invite-collaborators) in the remote repository. Then each team member can push changes from {{site.tp}} to the remote repository and allow the other team members to pull them in their local repositories inside {{site.tp}}. This way the team can always work on the latest version of the app and the team members can see the version history of the app.

## Notes
{{site.tp}} users can use the quick connect option to connect apps to any Git provider or the advanced connect option to connect to a GitHub repository:

* [Connect to Any Git Repository (Quick Connect)](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/connect-any-provider)
* [Connect to a GitHub Repository (Advanced Connect)](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/github-integration)
* [Invite Collaborators using Advanced Connect](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/invite-collaborators)

## See Also
* [Version Control and Collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/overview)
* [Open an Existing App for Collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/open-existing-project)
* [Collaborate Across the Offline and Cloud Tools](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/develop-across-clients)