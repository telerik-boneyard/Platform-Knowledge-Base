---
title: [Title]
description: [Brief description of the How-To article]
type: [Troubleshooting]
teampulseid: [number]
ticketid: [number]
pitsid: [number] <!-- Not sure we need this, as pits item are related to teampulse anyway -->
<!-- TO DO: What else should we have here? -->
---

# Title
<!-- Mandatory, Character Limit: 255 -->
<!-- Recommendation is to have <= 75 characters for a title as this can impact indexing by search engines like Google, Bing, etc. -->
<!-- The article title should be a combination of the main problem statement and if applicable, the key environment statement. -->



<!-- Environment Table -->
<!-- TO DO:
     We need to check how such can be developed according to our needs:
 	 We don't need Header roll, but rather a title: Environment.
     E.g. - Telerik Product, Version, SDK, SDK version, Mobile OS Vendor, Mobile OS Vendor Version, Client, Client Version, App Type (Hybrid/NativeScript/Native), 3rd party integration, Browser Type, Browser Version -->
| Service:     | [AppBuilder], [Backend Services], [AppManager] |
| Other stuff: | [Other stuff here]                             |



## Description
<!-- Mandatory -->
State the question.

* Use complete thoughts.
* Use words and phrases the customer used to describe the issue (even if technically inaccurate).  
* If possible restate the problem in technical wording. This increases the ability to find the article for internal staff.

## Steps to Reproduce\Additional Details
<!-- Optional -->
<!-- TO DO: Decide which name suits better -->
Environment information that is not listed in the Environment section of the article.
Clarifying information that does not go in the Problem Description or Error Message.

Steps to reproduce an issue are required if:

* they are easily reproduced
* do not require customer proprietary code
* are so complex that they will not make sense to the reader.

TSEs should supply steps to reproduce the issue when available.

Add factual statements that clarify the issue.  These are facts that will not change when the issue is resolved.
Information or troubleshooting steps that bring clarity to the issue but are not part of the actual problem.

## Error Message
<!-- Optional -->
List the exact error message(s) pertaining to the issue.
Remove any customer-specific information from the error message, such as product names or file names.

## Cause
<!-- Mandatory -->
Describe the underlying (root) cause of the problem in customer-consumable language.  Use discretion for proprietary information.
Customers value this information as it:

* Helps confirm that the resolution is relevant to their issue.
* Builds their confidence that the solution is proven and understood. 

If the root cause is not known use the standard statement:  
<!-- TO DO: We need to come up with proper statement, or use this? -->
"The exact cause is not known at this time."

<!-- TO DO: Add examples as at some stage. E.g.:
        The exact cause is not known at this time.
        This is expected behavior. <add concise description of why it is expected>
        The schema used by the ODBC DataServer for the SQL database no longer matches the actual schema of the SQL database. -->


## Solution
<!-- Mandatory -->
A Solution tells the reader what to do and how to do it 

<!-- TO DO: We need to add sample statements for the different cases. E.g.:
Use bullets or numbered steps and the commands needed to resolve the issue.

-Article references an enhancement:

	* State the enhancement number (if applicable) and, if implemented, the version where it is implemented.
	* Use resolution template identified below depending upon the scenario:
-For enhancement cases where there isn’t or we don’t know if there is an Idea:
 
	"It was determined that the Progress Product is functioning as designed.
 
	An enhancement to the product can be requested through the Progress Community via an Ideas submission.  Customer feedback is valuable and Idea submissions are monitored by our Product Management team.  Enhancement requests are reviewed during the planning phase of each new product release and a list of the enhancements chosen for implementation can be found in the Release Notes documents that accompany each release.  Once an Idea is submitted the Progress Software Community will have the opportunity to comment on and vote for the Idea.
 
	For detailed information on how to submit an Idea, please refer to Knowledge Base article 000010839, <Smart Link to article 000010839>."
 
-For enhancement cases where we know there is an Idea:

	It was determined that the Progress Product is functioning as designed.
 
	An enhancement request has been submitted as an Idea on the Progress Community.  To promote the Idea, click on this link: <link to Idea>.  Customer feedback is valuable and Idea submissions are monitored by our Product Management team.  Enhancement requests are reviewed during the planning phase of each new product release and a list of the enhancements chosen for implementation can be found in the Release Notes documents that accompany each release.  Once an Idea is submitted the Progress Software Community will have the opportunity to comment on and vote for the Idea.
 
	For detailed information on how to submit an Idea, please refer to Knowledge Base article 000010839, <Smart Link to article 000010839>.

-Article references a defect: 

	* State the version or hot fix number where it is fixed. -->

## Workaround
<!-- Optional -->
State the workaround to the issue. If multiple steps are needed, list them using bullets or numbered lists.

## Notes
<!-- Optional -->
Add any information applicable to the article that does not fit in the fields above. References to other written documents.