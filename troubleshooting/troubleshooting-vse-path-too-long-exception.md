---
title: Path Too Long Exception When Building Project in Microsoft Visual Studio
description: AppBuilder projects with fully qualified file names longer that 260 symbols fail to build.
type: troubleshooting
page_title: Cloud Build Fails When File Path Length Is Longer Than 260 Characters
slug: vse-path-too-long-exception
position:
tags: appbuilder, vs-extension, build
teampulseid:
ticketid:  1044168, 1001926
pitsid:
---

## Environment
<table>
  <tr>
    <td>Service</td>
    <td>Code (AppBuilder)</td>	
  </tr>
  <tr>
    <td>Code (AppBuilder) client</td>
    <td>Extension for Visual Studio</td>	
  </tr>
</table>

## Description
When you attempt to build your AppBuilder project in Microsoft Visual Studio, the following exception occurs: `System.IO.PathTooLongException`.

## Error Message

`System.IO.PathTooLongException: The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters.`

## Cause
This exception is caused by a restriction in the Microsoft Windows API. For more information about this issue, see [Maximum Path Length Limitation](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx#maxpath).

## Solution
Verify that your project does not contain any [fully qualified file names](https://en.wikipedia.org/wiki/Fully_qualified_name) longer than 218[\*](#notes) characters. To achieve a path length that does not exceed 218 characters, you can modify the file structure or rename some of the files or folders.

## Notes
Only 218 from the total 260 symbols are available to use. The remaining 42 symbols are reserved for your project's fully qualified name that is stored in the cloud.