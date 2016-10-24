---
title: [Must contain "FAQs". Character Limit: 255, Recommendation is to have <= 75 characters for a title as this can impact indexing by search engines like Google, Bing, etc. The article title should be a combination of the main problem statement and if applicable, the key environment statement. Also determines the title in the table of contents.]
description: [Character Limit: 255, Recommended length: <= 155 characters. The description is what search engines usually show in the search results. Typically, search engines truncate the description after the 155th character. The description should be a brief overview of the how-to article. It should exclude unnecessary phrases like "This article contains ..."]
type: faq
page_title: [Text that will populate the HTML file’s head:title attribute. Must contain "FAQs". It is good to use different than the title name here, in order to cover more key words and be more discoverable via searches.]
slug: [Unique identifier of the article. Used for cross-referencing. Ex: faq-cloud-code-users]
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
    <td>am-ad
		{{site.ab-s}} ({{site.ab}}), <!--Code (AppBuilder)-->
		{{site.sb-s}}, <!--Views-->
		{{site.am-ad}} ({{site.am}}), <!--App Distribution (AppManager)-->
		{{site.bs-d}} ({{site.bs}}), <!--Data (Backend Services)-->
		{{site.bs-u}}, <!--Users-->
		{{site.bs-n}}, <!--Notifications-->
		{{site.bs-bl}}, <!--Business Logic-->
		{{site.eq-s}}, <!--Analytics-->
		{{site.af-s}}, <!--Feedback-->
		Samples, 
		{{site.tp}} General, <!--Telerik Platform-->
		Third-party product
	</td>
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
    <td>Hybrid ({{site.ac}} app), Native ({{site.ns}} app)</td>
  </tr>
  <tr>
    <td>{{site.ab-s}} ({{site.ab}})<!--Code (AppBuilder)--> client</td>
    <td>{{site.ab-web}}, {{site.ab-vse}}, {{site.ab-proton}}, {{site.ab-win}}, {{site.ab-cli}}, {{site.ab-sp}}</td>
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
    <td>{{site.bs}}<!--Backend Services--> area</td>
    <td>JavaScript SDK (Hybrid app), JavaScript SDK (Web app), JavaScript SDK (Cloud Code), .NET SDK (Web app), Native iOS app, Native Android app, Native Windows Phone app</td>
  </tr>
  <tr>
    <td>{{site.ac}}\{{site.ns}} framework version</td>
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
    <td>{{site.mvs}}<!--Microsoft Visual Studio--> version</td>
    <td>[specify explicitly]</td>
  </tr>
</table>

## Introduction
<!-- Mandatory -->
Summarize the topic to which the FAQs are relating. One or two sentences are enough.

End the section with an article table of contents (TOC):

* [FAQ 1?](#faq-1)
* [FAQ 2?](#faq-2)
* [FAQ 3?](#faq-3)

## FAQ 1?

Write the section name as a question. Put yourself in the shoes of the user when composing the sentence. Use as many keywords as possible while still keeping the sentence organic. When multiple keyword choices are available, try and include the spare ones in the answer to aid SEO.

In the section body, answer the question. Get straight to it, do not make introductions.
If the question can be answered with yes or no, do it. Continue with a sentence containing more information.

If the answer features instructions, do the following:
* For short instructions, keep them in the FAQ.
* For long instructions, create a How-to article with them and link it from the FAQ or link to existing documentation.

## FAQ 2?

## FAQ 3?
