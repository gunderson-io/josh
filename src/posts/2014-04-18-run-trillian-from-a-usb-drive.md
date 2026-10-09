---
layout: post
title: Run Trillian from a USB drive
date: 2014-04-18T01:40:49-07:00
categories:
  - how-to
  - software
permalink: /2014/04/18/run-trillian-from-a-usb-drive/
tags:
  - PortableApps
  - Trillian
  - USB
  - Windows
  - Windows 7
  - Windows 8
---

I've been using <a href="https://portableapps.com">PortableApps</a> and <a href="https://trillian.im">Trillian Pro</a> for years, but there is no official way to run Trillian from a USB stick. So I did some digging a while back and got it working.

Setup
I'm using my Microsoft Account to log into a 64-bit Windows 8 PC, so if you're using something different the folders below may be slightly different.

I also don't install any plugins or skins so there may be extra steps involved if you do.

[instructions for a new Portable Trillian installation]
Install Trillian on your PC
Install any plugins, skins, etc. you want.
Set up your accounts

<ul>
    <li>copy the "C:Program Files (x86)Trillian" folder to your USB Flash Drive</li>
</ul>

*optional: rename to TrillianPortable (that's how I'm going to refer to that particular folder in the rest of this post anyway)
* copy "C:Users[your Windows username]AppDataRoamingTrillianusers" folder into the TrillianPortable folder as well
* modify Trillian.ini:
<code>[General]
Use User Directory=0
Global Directory=usersglobal</code>

<h1>Updating</h1>

Since then, Trillian has been asking me to update for a while now, so here's what I finally did 1/16/2014 to successfully update my Portable Trillian install to v5.4 Build 15 Pro:

[Instructions for updating an existing Portable Trillian installation]

<ul>
    <li>(optional) RAR'd the TrillianPortable folder and saved it elsewhere as backup</li>
    <li>delete everything in there except</li>
    <li>trillian.ini</li>
    <li>users folder</li>
</ul>

Download and install the <a href="https://www.trillian.im/download/">latest version of Trillian</a> on your PC

shut down Trillian

Go to Trillian install dir on PC (e.g. C:Program Files (x86)Trillian)

Copy everything except trillian.ini into TrillianPortable folder on USB drive

launch, enjoy

Notes

When you run Trillian from the USB drive, it /should be/ isolated from the host PC unless you do something like associate the various IM protocols with your Portable Trillian exe
