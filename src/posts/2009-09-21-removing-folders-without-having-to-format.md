---
layout: post
title: Removing folders without having to format
date: 2009-09-21T01:42:50-07:00
categories:
  - how-to
permalink: /2009/09/21/removing-folders-without-having-to-format/
---

Win7 on a new drive

want to delete everything but a few folders on the old drive that was used for Vista

In each folder (Program Files, Program Files (x86), Windows, etc.):

takeown /f "Folder Name" /r

cacls * /t /g USERNAME:F
