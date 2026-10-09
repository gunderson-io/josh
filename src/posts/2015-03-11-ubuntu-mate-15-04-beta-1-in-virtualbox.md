---
layout: post
title: Ubuntu MATE 15.04 Beta 1 in VirtualBox
date: 2015-03-11T16:15:16-07:00
categories:
  - how-to
  - software
permalink: /2015/03/11/ubuntu-mate-15-04-beta-1-in-virtualbox/
tags:
  - MATE
  - Ubuntu
  - VirtualBox
---

My distro of choice is <a href="https://linuxmint.com/">Linux Mint</a> MATE edition, so naturally I was excited to hear there is an official MATE spin of Ubuntu. <a href="https://mate-desktop.org/">MATE</a> (maté) is a fork of the old GNOME2 desktop environment, with bugfixes and enhancements.

Here's my experience this evening while watching season 9 &amp; 10 of <a href="https://roosterteeth.com/archive/?sid=rvb">Red vs. Blue</a>.

&nbsp;

I started downloading the <a href="https://cdimage.ubuntu.com/ubuntu-mate/releases/vivid/beta-1/">Ubuntu MATE 15.04 Beta 1 ISO</a> and while that trickled in at only ~1MB/s, I downloaded and installed <a href="https://www.virtualbox.org/wiki/Downloads">VirtualBox</a> v4.3.24.

I created a new VM with default options (including only an 8GB VDI) besides bumping up Memory size to 2GB.

&nbsp;

I booted to the ISO and immediately started the install instead of trying the Live version. During install I checked both "Download updates..." and "Install 3rd-party software" boxes, and my standard VM partitioning scheme leftover from the magnetic hard drive days (2GB swap at the beginning, and Ext4 the rest for /). Note that this will be plenty of space to try out a distro (as long as it's not one of the ones that include EVERYTHING), but I've run out of space in the past doing things like downloading &amp; building open-source software &amp; games.

I also set it to logon automatically and didn't bother with encrypting the home directory.

&nbsp;

First thing, updated (using the new F12 ~Guake terminal, Tilda):
<pre>sudo apt-get update</pre>
<pre>sudo apt-get upgrade</pre>
<pre>sudo apt-get dist-upgrade</pre>
<pre>sudo reboot</pre>
And when it came back up it no longer  had Guest Additions installed since it upgraded the kernel, so I installed linux headers for the new/current kernel and gcc so the Guest Additions would build &amp; install:
<pre>sudo apt-get install linux-headers-$(uname -r) gcc</pre>
Inserted Guest Additions disc via the Devices menu in VirtualBox, then right-clicked on disc icon -&gt; open in Terminal
<pre>sudo ./VBoxLinuxAdditionsInstall.run</pre>
Still complains about not having headers for the current verison of the kernel, but it seems to have worked anyway.

Rebooted, and we're back with seamless mouse integration and adjustable resolution.

&nbsp;

Then followed this: https://ubuntu-mate.community/t/enabling-indicators-in-ubuntu-mate-14-10-and-15-04/22

Which didn't do anything noticeable (to me at least).

&nbsp;

Totally optional things I also like to do:
<ul>
	<li>disable autolocking when the screensaver starts
<ul>
	<li>Control Center -&gt; Screensaver, uncheck "Lock screen when screensaver is active"</li>
</ul>
</li>
	<li>change to 12-hour clock, add my city so the temperature shows</li>
	<li>rearrange the menu:
<ul>
	<li>delete bottom panel, move top one to bottom, add missing elements (window list)</li>
</ul>
</li>
	<li>set the browser start page to something related to the current distro
<ul>
	<li>I used ubuntu-mate.org</li>
</ul>
</li>
	<li>install a couple more things:
<ul>
	<li>localepurge</li>
</ul>
</li>
</ul>
