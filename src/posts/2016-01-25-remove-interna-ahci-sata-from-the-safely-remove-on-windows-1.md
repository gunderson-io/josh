---
layout: post
title: "DRAFT: Remove interna AHCI/SATA from the safely remove on Windows 10"
date: 2016-01-25T21:53:52
categories:
  - how-to
original_status: draft
---

Regedit
Navigate to: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\storahci\Parameters\Device
Add a new Multi String Value called TreatAsInternalPort set the value (I have 8 internal drives, so 0-7):

0
1
2
4
5
6
7

(note the newlines after each number, including the last one)

http://superuser.com/questions/12955/how-can-i-remove-the-option-to-eject-sata-drives-from-the-windows-7-tray-icon/961242#961242
