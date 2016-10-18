---
title: Team Members Cannot See the Changes Made by Other Developers
description: This troubleshooting tutorial is intended for developers who need to see the changes applied by other team members in their Telerik Platform account.  
type: Troubleshooting
page_title: Developers Working on the Same Project Cannot See Changes Applied by Other Team Members
slug: account-members-not-seeing-app-changes
position:
tags: team members, collaboration, changes, initial setup, default files, version control, git
<!-- TO DO: Do we we need the below fields for How-To articles? -->
teampulseid: 
ticketid:  1000257, 984390, 956285, 945633, 945575, 945500, 931027
pitsid: <!-- Not sure we need this, as pits item are related to teampulse anyway -->
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Telerik Platform</td>	
  </tr>
  <tr>
	<td>Feature</td>
	<td>Version Control and Collaboration</td>
  </tr>
</table>

## Description
<!-- Mandatory -->
Developers working on the same project in Telerik Platform cannot see each others changes. They could see the project but only in its initial setup with the default files, even if all team members have full rights. Opening the project from other Telerik Platform clients also doesn't work, even though the universal desktop client and the classic windows client display the same set of apps as the in-browser client.

## Solution
<!-- Mandatory -->
In Telerik Platform when a new app is created, it automatically becomes visible to all team members of the account. The app, however, is not configured for collaboration by default and account members cannot contribute or see each others changes in it. Instead a local repository is created for every account member who opens the app. All version control operations are performed within the local repository and are therefore not available to the other team members working on the app.

To collaborate with other users in Telerik Platform, account members need to manually configure a remote repository for their apps. They can use any third-party Git provider such as GutHub or BitBucket and follow the procedure for [configuring a Telerik Platform app for collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/configure-for-collaboration). In order for multiple users to collaborate on the app, they have to be  [invited as collaborators]() in the remote repository. Then each team member can push changes from Telerik Platform to the remote repository and allow the other team members to pull them in their local repositories inside Telerik Platform. This way the team can always be working on the latest version of the app and the team members can see the version history of the app.

##Notes

Telerik Platorm users can use the quick connect option to connect apps to any Git provider or the advanced connect option to connect to a GitHub repository:

* [Connect to Any Git Repository (Quick Connect)](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/connect-any-provider)
* [Connect to a GitHub Repository (Advanced Connect)](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/github-integration)
* [Invite Collaborators using Advanced Connect](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/invite-collaborators)

## See Also
<!-- Optional -->
* [Version Control and Collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/overview)
* [Open an Existing App for Collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/open-existing-project)
* [Collaborate Across the Offline and Cloud Tools](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/develop-across-clients)
* [Invite Collaborators](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/invite-collaborators)


