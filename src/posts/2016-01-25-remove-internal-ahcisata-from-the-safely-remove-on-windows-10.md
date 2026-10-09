---
layout: post
title: Remove internal AHCI/SATA from the Safely Remove on Windows 10
date: 2016-01-25T16:43:43-08:00
categories:
  - how-to
permalink: /2016/01/25/remove-internal-ahcisata-from-the-safely-remove-on-windows-10/
---

I have my motherboard set to use devices as AHCI, and all my SATA drives show up under the Safely Remove icon in Windows 10. Since I rarely need to remove the boot SSD while I'm actively using the computer, I don't want to see it or any of the other internal drives in that menu.

Run RegEdit and navigate to:
<p style="padding-left: 30px;">HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\storahci\Parameters\Device</p>
Add a new Multi String Value called TreatAsInternalPort set the value like so (I have 8 internal drives I want to hide, so 0-7):
<pre>0
1
2
4
5
6
7

</pre>
(note the newlines after each number, including the last one)

Found here: https://superuser.com/questions/12955/how-can-i-remove-the-option-to-eject-sata-drives-from-the-windows-7-tray-icon/961242#961242
