---
title: How to Rename a Field in Content Type
description: Rename a field in content type
type: how-to
page_title: How to Change the Name of a Field in a Content Type
slug: rename-field-in-content-type
position:
tags: content-type
teampulseid: 
ticketid:  1046311
pitsid:

---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>{{site.bs-d}} ({{site.bs}})</td>   
  </tr>
</table>

## Description
You want to rename an existing field in a content type. The rename option is not available in {{site.tp}} UI. 

## Solution
Each item in a content type consists of field-value pairs ({Field-Name: Field-Value}). When you want to rename the field name you need to update all items in the database ("Field-Name" with "New-Field-Name").

>As this is an update database operation, updating the field names will also amend the following system fields:
> * "ModifiedAt" value will be updated with current date for all renamed items
> * "ModifiedBy" value will be set to an empty Guid like "00000000-0000-0000-0000-000000000000" for all renamed items

To rename a field you have to complete the following steps:

1. Update the field name in the database - you can use '$rename' operator and issue a PUT request:

  ```HTTPS
  Request:
      PUT https://api.everlive.com/v1/{{site.app-id}}/content-type-name
  Headers:
      Authorization  masterkey  {{site.master-key}}
      Content-Type application/json
  Data:
      {
          "$rename": {"old-field-name": "new-field-name" }
      }
  ```

2. Update the name of the column as shown in the Data Browser
  * Delete the field with the old name from {{site.tp}} -> Data -> Types -> Edit Structure (this will have no effect over the data).
  * Create a new field with the new name that matches the "new-field-name" from Step 1. The new field will correctly bind to the renamed keys in the stored data in Step 1 and will be displayed properly in the UI - Data Browser.
