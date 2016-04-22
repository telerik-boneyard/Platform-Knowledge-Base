---
title: [Character Limit: 255, Recommendation is to have <= 75 characters for a title as this can impact indexing by search engines like Google, Bing, etc. The article title should be a combination of the main problem statement and if applicable, the key environment statement. Also determines the title in the table of contents.]
description: [Character Limit: 255, Recommended length: <= 155 characters. The description is what search engines usually show in the search results. Typically, search engines truncate the description after the 155th character. The description should be a brief overview of the how-to article. It should exclude unnecessary phrases like "This article contains ..."]
type: how-to
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
    <td>Code (AppBuilder), Views, App Distribution (AppManager), Data (Backend Services), Users, Notifications, Business Logic, Analytics, Feedback, Samples, Telerik Platform General, Third-party product</td>	
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

## Solution
<!-- Mandatory -->
Answer the question, using bullets, numbered steps or something else. The solution is used when we are sure that certain steps cover\solve the whole issue and they follow the best approach we are aware of for that purpose. If no clean resolution is available we must use the following include:

{% include /_troubleshooting/no-solution-available.html %}

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
Share links that might guide our clients further in achieving the desired behavior. Good examples for such links are the external\internal articles used for writing the KB.