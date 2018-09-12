---
title: Access Selected DataValueField
description: An example on how to access the selected DataValueField on the Kendo UI ListBox change event.
type: how-to
page_title: Access the Selected DataValueField on the ListBox Change Event | UI for ASP.NET MVC
slug: access-the-selected-data-value-field-on-the-listbox-change-event
ticketid: 1118759
res_type: kb
author: Kaloyan Kotorov
---


## Description

How can I get the `DataValueField` from the selected item on the `change` event of the Kendo UI ListBox? 

## Solution

1. Retrieve the selected element.
1. Based on the selected element, retrieve the information for the `dataItem` that is associated with the following line:  

    ```
    function onChange(e) {
        var element = e.sender.select();
        var dataItem = e.sender.dataItem(element[0])
        console.log(dataItem)
    }
    ```

For more information, refer to the articles on:
* The [`select`](http://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/methods/select) event of the ListBox.
* The [`dataItem`](http://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/methods/dataitem) method of the ListBox.
