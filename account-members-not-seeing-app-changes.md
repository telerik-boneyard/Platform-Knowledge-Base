---
title: Team members cannot see the changes made by other developers
description: This troubleshooting tutorial is intended for developers who need to see the changes applied by other team members in their Telerik Platform account.  
type: Troubleshooting
page_title: Team members cannot see the changes made by other developers in an app
slug: account-members-not-seeing-app-changes
position:
tags: team members, collaboration, changes, initial setup, default files, version control, git
<!-- TO DO: Do we we need the below fields for How-To articles? -->
teampulseid: 
ticketid:  1000257, 984390, 956285, 945633, 945575, 945500, 931027
pitsid: <!-- Not sure we need this, as pits item are related to teampulse anyway -->
---
## Environment
<!-- Environment Table -->
<!-- TO DO:
     We need to check how such can be developed according to our needs:
 	 We don't need Header roll, but rather a title: Environment. -->
> **Service:** AppBuilder
>
> **Mobile Development Type:** Hybrid and Native
>
> **Telerik Platform Client:** In-Browser, Classic Windows, Universal Desktop
>
> **Area:** Version Control and Collaboration

## Description
<!-- Mandatory -->
We have one developer creating an app in Telerik Platform. None of the other team members can see the changes that developer has made. They could see the app but only in its initial setup with the default files. I ensured all team members have full rights. I also tried opening the app in the desktop and Windows clients as I thought that they are sypposed to sync projects with the In-Browser client. So when changes are saved, the other developers should be able to go back into any of the three clients and see any changes the other developers made.

## Solution
<!-- Mandatory -->
In Telerik Platform projects are not configured for collaboration by default. This means that when a new project is created, the project automatically becomes visible to all team members of the account. However, they cannot contribute or see your changes in it. Essentially every developer (member of the account) works within their own repository inside Telerik Platform. This is why without configuring a 3rd party remote repository, you can only commit the changes in your own local repository.

To collaborate with other users in Telerik Platform, you need to configure your project for collaboration by setting up a Git repository and inviting the other Telerik Platform users as collaborators to it. Once you do that you can push all changes in the remote repository and allow your team members to pull them thus ensuring you're all working on the latest version of the project and sharing version history.

The following tutorials provide more information on setting up a remote repository in Telerik Platform and performing version control operations:
* [Configure Your Project for Collaboration in Telerik Platform](http://docs.telerik.com/platform/appbuilder/creating-your-project/collaborating/configure-for-collaboration#configure-for-collaboration-from-the-appbuilder-in-browser-client)
* [Configuring Third-Party Version Control](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/configuring-third-party-vc)

## See Also
<!-- Optional -->
* [Version Control and Collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/overview)
* [Open an Existing App for Collaboration](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/open-existing-project)
* [Collaborate Across the Offline and Cloud Tools](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/collaborating/develop-across-clients)
* [Invite Collaborators](http://docs.telerik.com/platform/appbuilder/development-tools/version-control/third-party-vc/configuring-third-party-vc/invite-collaborators)


