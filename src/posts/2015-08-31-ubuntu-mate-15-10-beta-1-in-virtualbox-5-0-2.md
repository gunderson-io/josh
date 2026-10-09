---
layout: post
title: Ubuntu MATE 15.10 Beta 1 in VirtualBox 5.0.2
date: 2015-08-31T15:45:13-07:00
categories:
  - how-to
  - software
permalink: /2015/08/31/ubuntu-mate-15-10-beta-1-in-virtualbox-5-0-2/
tags:
  - Linux
  - MATE
  - Ubuntu
  - VirtualBox
---

<h2>Background</h2>
Anymore when it comes to Linux distros I prefer a Debian/Ubuntu base and the <a href="https://mate-desktop.org/">MATE</a> (maté) Desktop Environment (again, my desktop Linux distro of choice is <a href="https://linuxmint.com/">Linux Mint</a> MATE edition). Just give me APT + MATE + Firefox, please.

Earlier this year I jumped at the chance to try the official MATE spin of Ubuntu 15.04 Beta, as I do like to try out new builds but I can't stand Unity (or GNOME3 for that matter). Overall, it seemed like a fine OS but I saw no reason to switch from Mint.

Ubuntu MATE 15.10 Beta 1 was <a href="https://ubuntu-mate.org/blog/ubuntu-mate-wily-beta1/" target="_blank">announced recently</a> so I decided to check it out as well. This time I'm using a PC I built with 6 cores and 24GB of RAM, running Windows 10 RTM, so Microsoft will also probably have some decent data on how well this runs. ;)
<h2>Downloading the ISO and VirtualBox</h2>
This time I grabbed the .torrent for the <a href="https://ubuntu-mate.org/blog/ubuntu-mate-wily-beta1/" target="_blank">Ubuntu MATE 15.10 Beta 1 ISO</a> and it downloaded a lot faster (~4.4MB/s average).

I had already downloaded &amp; installed <a href="https://www.virtualbox.org/wiki/Downloads">VirtualBox</a> v5.0.2 prior to this.
<h2>Installing VirtualBox</h2>
I uncheck a few things when I install VirtualBox:
<ul>
	<li>VirtualBox USB Support</li>
	<li>VirtualBox Bridged Networking</li>
	<li>VirtualBox Host-Only Networking</li>
	<li>VirtualBox Python 2.x Support</li>
</ul>
<h2>Creating the VM</h2>
I created a new VM with default options except:
<ul>
	<li>Memory size: 4096 MB</li>
	<li>10.00 GB VDI</li>
</ul>
<h3>Change VM Settings</h3>
Since the ISO was still downloading I decided to change some more of the VM's Settings to my liking:
<h4>General/Advanced</h4>
Shared Clipboard: Bidirectional

Drag'n'Drop: Host To Guest
<h4>System/Motherboard</h4>
Boot Order: unchecked Floppy

Pointing Devices: PS/2 Mouse
<h4>System/Processor</h4>
Processor(s): 4 CPUs

Extended Features: check Enable PAE/NX
<h4>Display/Screen</h4>
Video Memory: bump up to 32 MB

Acceleration: check Enable 3D Acceleration
<h4>Storage</h4>
Removed the IDE Controller

Checked "Use Host I/O Cache" for the SATA Controller

Checked "Solid-state Drive" for the UbuntuMate.vdi

Added an empty Optical Drive to the SATA controller

Changed the ports so the Optical Drive is Port 0 and the SSD is Port 1
<h4>Audio</h4>
Audio Controller: Intel HD Audio
<h4>USB</h4>
Unchecked "Enable USB Controller"

&nbsp;

Some of the above settings won't have any effect until after the Guest Additions are installed.
<h2>Installing Ubuntu Mate</h2>
I booted to the ISO and immediately started the install instead of trying the Live version.

During install I checked both "Download updates..." and "Install 3rd-party software" boxes.

However, after reading the comments in latest DistroWatch Weekly, I deviated slightly from my standard VM partitioning scheme leftover from the magnetic hard drive days (2GB swap at the beginning, and Ext4 the rest for /), and chose to try XFS instead Ext4.

Note that the ~8GB should be plenty of space to try out a distro (as long as it's not one of the ones that include EVERYTHING), but I've run out of space in the past doing things like downloading &amp; building open-source software &amp; games.

I also set it to logon automatically and didn't bother with encrypting the home directory.

Once the install was complete I hit the <em>Restart Now</em> button, then pressed <kbd>Enter</kbd> after verifying the Installer did indeed eject the ISO (disc icon is grey at the bottom of the VirtualBox window), and let it reboot.
<h3>Initial Login and Updating</h3>
Close the Welcome screen. Optionally uncheck "Show this Welcome when I log on." so it doesn't show up again when you reboot.

Then let's make sure our fresh installation is up to date:

Open a Terminal -- There are few ways to do that:
<ul>
	<li>Press <kbd>F12</kbd> to show Tilda, a drop-down terminal similar to Guake, which is based upon the <kbd>~</kbd>-activated consoles in games like Quake</li>
	<li>Right-click on the Desktop (or something on the Desktop) and choose <em>Open In Terminal</em></li>
	<li><em>Applications -&gt; System Tools -&gt; MATE Terminal</em></li>
</ul>
Then:
<pre>sudo apt-get update &amp;&amp; sudo apt-get upgrade &amp;&amp; sudo apt-get dist-upgrade
sudo reboot</pre>
<h3>Installing Guest Additions</h3>
In the VirtualBox window's menu, choose <em>Devices -&gt; Insert Guest Additions CD image...</em>

Then back in the VM, hit <em>Cancel</em> at the Autorun prompt (it won't work anyway). A disc icon labeled "VBOXADDITIONS..." should now be visible on your desktop.

Right-click on the disc icon -&gt; <em>Open in Terminal</em>, then:
<pre>sudo ./VBoxLinuxAdditions.run</pre>
The installer complains about missing headers but continues on to build the modules and eventually we don't need to keep hitting <kbd>Ctrl</kbd> to escape the mouse cursor, so good enough pour moi.

Reboot just to make sure the Guest Additions stuff is all loaded:
<pre>sudo reboot</pre>
<h2>All Done?</h2>
We're done with the Guest Additions disc for now, so right-click on it and choose Eject.

It's all set up, updated, and ready to be customized, etc.

Mildly interesting is that Firefox is only at v38.0 -- v40.0.3 is released as of this writing.

Below are my usual next steps with notes regarding this specific install.
<h2>Totally optional things I also like to do</h2>
<ul>
	<li>change the resolution
<ul>
	<li>I usually choose 1280x960 because it fits nicely above the Windows Taskbar, however the Monitors configuration opens then closes immediately
<ul>
	<li>An error reporting dialog opened allowing me to send info re: Monitors crashing to Ubuntu, which I did.</li>
</ul>
</li>
	<li>Workaround: manually resize the VM window itself and it will adjust the VM's Desktop
<ul>
	<li>upon rebooting it keeps the new resolution</li>
</ul>
</li>
</ul>
</li>
	<li>get rid of the Welcome screen for good
<ul>
	<li>uncheck "Show this Welcome when I log on.", click Close.</li>
</ul>
</li>
	<li>disable autolocking when the screensaver starts
<ul>
	<li>Control Center -&gt; Screensaver
<ul>
	<li>OR System -&gt; Preferences -&gt; Look and Feel -&gt; Screensaver</li>
</ul>
</li>
	<li>uncheck "Lock screen when screensaver is active"</li>
</ul>
</li>
	<li>change to 12-hour clock, add my city so the temperature shows</li>
	<li>reduce the # of <del>Virtual Desktops</del> Workspaces to 1
<ul>
	<li>I don't use them and don't want to accidentally hit some hotkey that switches to a different one</li>
</ul>
</li>
	<li>rearrange the desktop Panels:
<ul>
	<li>delete the bottom Ppanel</li>
	<li>move top Panel to the bottom, remove Menu Bar &amp; Power button, and add/move missing elements:
<ul>
	<li>MATE Menu, and remove the Button text</li>
	<li>Window List</li>
	<li>Show Desktop</li>
	<li>a shortcut to Terminal</li>
</ul>
</li>
	<li>Ends up looking like this: https://imgur.com/N6bpfoI</li>
</ul>
</li>
	<li>Firefox:
<ul>
	<li>set the browser start page to something related to the current distro
<ul>
	<li>In this case: ubuntu-mate.org</li>
</ul>
</li>
	<li>change the default search engine to DuckDuckGo</li>
</ul>
</li>
	<li>install a couple more things:
<ul>
	<li>localepurge</li>
	<li>apt-fast
<ul>
	<li>OR setup mirrors in your sources.list</li>
</ul>
</li>
</ul>
</li>
</ul>
