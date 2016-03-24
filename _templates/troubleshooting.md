---
title: [Character Limit: 255, Recommendation is to have <= 75 characters for a title as this can impact indexing by search engines like Google, Bing, etc. The article title should be a combination of the main problem statement and if applicable, the key environment statement. Also determines the title in the table of contents.]
description: [Character Limit: 255, Recommended length: <= 155 characters. The description is what search engines usually show in the search results. Typically, search engines truncate the description after the 155th character. The description should be a brief overview of the how-to article. It should exclude unnecessary phrases like "This article contains ..."]
type: troubleshooting
page_title: [Text that will populate the HTML file’s head:title attribute. It is good to use different than the title name here, in order to cover more key words and be more discoverable via searches.]
slug: [Unique identifier of the article. Used for cross-referencing. Ex: how-to-write-an-essay-nativescript]
position: [Keep this field blank for now!!! Integer specifying the display position of the article in the navigation. If omitted, the articles are ordered alphabetically based on file name]
tags: [Relevant keywords. A list of the available KB tags is available in the tags.md file under _templates. Separate multiple tags with commas. Currently not used but always fill in for future proofness.]
teampulseid: [A number, representing the TeamPulse ID of the issue\question. Leave this blank if the issue\question doesn't exist as an item in TeamPulse]
ticketid: [A number, representing the ticket ID associated with this issue\question. The field can contain more than one ticket IDs (e.g. several clients have reported it). In such cases, we separate the ticket IDs with commas. Leave this blank if the issue\question is not related to a support case]
pitsid: [A number, representing the public issue tracker ID associated with the issue\question. Leave this blank for now as PITS is not developed yet]

---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code, Views, Distribution, Data, Users, Notifications, Business Logic, Analytics, Feedback, Samples, Telerik Platform General, third-party product</td>	
  </tr>
  <tr>
    <td>Feature</td>
    <td>[specify explicitly]</td>	
  </tr>
  <tr>
    <td>Plugin(s)</td>
    <td>[specify explicitly]</td>	
  </tr>
  <tr>
    <td>Mobile development type</td>
    <td>Hybrid (Cordova app), Native (NativeScript app)</td>	
  </tr>
  <tr>
    <td>Code (AppBuilder) client</td>
    <td>In-Browser, Extension for Visual Studio, Universal Desktop, Windows, Command-line interface, Sublime Text</td>	
  </tr>
  <tr>
    <td>Mobile OS</td>
    <td>iOS, Android, Windows Phone 8</td>	
  </tr>
  <tr>
    <td>Mobile OS version</td>
    <td>[specify explicitly]</td>	
  </tr>  
  <tr>
    <td>Backend Services area</td>
    <td>JavaScript SDK (Hybrid app), JavaScript SDK (Web app), JavaScript SDK (Cloud Code), .NET SDK (Web app), Native iOS app, Native Android app, Native Windows Phone app</td>	
  </tr>
  <tr>
    <td>Cordova\NativeScript framework version</td>
    <td>[specify explicitly]</td>	
  </tr>
  <tr>
    <td>Browser</td>
    <td>[specify explicitly]</td>	
  </tr>
  <tr>
    <td>Browser version</td>
    <td>[specify explicitly]</td>	
  </tr>
  <tr>
    <td>.NET framework version</td>
    <td>[specify explicitly]</td>	
  </tr>
  <tr>
    <td>Visual Studio version</td>
    <td>[specify explicitly]</td>	
  </tr>
</table>

## Description
<!-- Mandatory -->
State the question.

* Use complete thoughts.
* Use words and phrases the customer used to describe the issue (even if technically inaccurate). This, as well as providing technical details and keywords benefits higher indexing of the article among Google searches. 
* If possible restate the problem in technical wording. This increases the ability to find the article for internal staff.
* Add factual statements that clarify the issue.  These are facts that will not change when the issue is resolved.
Information or troubleshooting steps that bring clarity to the issue but are not part of the actual problem.

## Steps to Reproduce
<!-- Optional -->
<!-- TO DO: Decide which name suits better -->
Environment information that is not listed in the Environment section of the article.
Clarifying information that does not go in the Problem Description or Error Message.

Steps to reproduce an issue are required if:

* we can identify clean path of reproducing the faulty behavior 
* do not require customer proprietary code

TSEs should supply steps to reproduce the issue when available.

## Error Message
<!-- Optional -->
List the exact error message(s) pertaining to the issue.
Remove any customer-specific information from the error message, such as product names or file names.

## Cause\Possible Cause(s)
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
Provide information about resolving the issue. Use bullets or numbered steps, if applicable. The solution is used when we are sure that certain steps cover\solve the whole issue and they follow the best approach we are aware of for that purpose. If no clean resolution is available we must use the following include:

{% include /_troubleshooting/no-solution-available.html %}

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

## Suggested Workarounds
<!-- Optional -->
State the workaround for the issue, if no solution is available.

If multiple workarounds are available, use h3 elements, like this:
### Workaround #1
Content here...

### Workaround #2
Content here...

### Workaround #3
Content here...

## Notes
<!-- Optional -->
Add any information applicable to the article that does not fit in the fields above. References to other written documents.

## See Also
<!-- Optional -->
Share links that might guide our clients further in resolving the issue or achieving the desired behavior. Good examples for such links are the external\internal articles used for writing the KB.