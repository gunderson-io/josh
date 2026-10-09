---
layout: post
title: Current Laptop OS Musings, 2017.01 Edition
date: 2017-01-04T22:05:07-08:00
categories:
  - software
permalink: /2017/01/04/current-laptop-os-musings-2017-01-edition/
tags:
  - 4MLinux
  - Arch Anywhere
  - Arch Linux
  - Cinnamon
  - Fedora
  - Gnome
  - GRUB
  - JWM
  - Kingston
  - laptop
  - Linux
  - Linux Mint
  - Sony
  - SSD
  - VAIO
  - Windows 10
  - Xfce
---

TL;DR: an incoherent rant detailing the OSs currently installed on my VAIO laptop upon entering 2017, gripes about them, and some other useless banter.
<h3>/dev/hda: Kingston HyperX 3K 240GB SATA III MLC SSD (SH103S3/240G)</h3>
Nice, fast SSD. No complaints, except I'd like a larger one to be able to install more distros simultaneously. I basically have four 20GB slots for Linux installs, but it'd be nice to be able to keep more around and see how they behave with updates and such to get a better feel and overall opinion of them.
<p style="padding-left: 30px;"><strong>/dev/hda1-3</strong> (~143GB): Windows 10 Pro x64 RTM + latest updates, and 2 apparently necessary additional 500MB partitions for Windows 10 to function.</p>
<p style="padding-left: 30px;"><img class="aligncenter wp-image-1749 size-large" src="/josh/media/2017/01/win-1024x576.png" width="700" height="394" /></p>
<p style="padding-left: 30px;">My biggest complaint with Windows 10 at the moment deals with Sleep/Standby, and more specifically laptops with external mice attached.</p>
<p style="padding-left: 30px;">If I wake it with the external wireless/USB mouse, then look away for 2 minutes to respond to a text message, it'll put itself to sleep. This does not happen when I wake it with the power button.</p>
<p style="padding-left: 30px;">There is a separate setting specifically for sleeping after being awoken by external device, and you have to modify the registry to even expose it. And then every system update resets &amp; hides the setting again (I think).</p>
<p style="padding-left: 30px;"><strong>/dev/hda4</strong>: extended partition containing the following:</p>
<p style="padding-left: 60px;"><strong>/dev/hda5</strong> (20GB): Arch/Xfce (installed using <a href="https://arch-anywhere.org/">Arch Anywhere</a>)</p>
<p style="padding-left: 60px;"><img class="aligncenter wp-image-1752 size-large" src="/josh/media/2017/01/Screenshot_2017-01-07_18-31-37-1024x576.png" width="700" height="394" /></p>
<p style="padding-left: 60px;">Really dig this setup. Biggest complaint (on all distros I think) is <em>still</em> how dark themes work with web elements in Firefox. Currently using a Stylish userstyle and manually adding additional things that don't show up right. Someday...</p>
<p style="padding-left: 60px;"><strong>/dev/hda6</strong> (20GB): Linux Mint 18.1/Cinnamon</p>
<p style="padding-left: 60px;"><img class="aligncenter wp-image-1750 size-large" src="/josh/media/2017/01/Screenshot-from-2017-01-07-18-30-03-1024x576.png" width="700" height="394" /></p>
<p style="padding-left: 60px;">Mint has been my go-to since '09 or so (Mint 7 maybe?), but over the past few years I've been disto-hopping more and more.</p>
<p style="padding-left: 60px;">This is the latest version of good ol' Mint with their own desktop environment. And aside from the "dark themes vs web elements" issues noted above, I'm really diggin the look of the Mint-Y Dark theme and Icons. Mint 18 seemed to have some issues, though after the 18.1 update, I can't even remember what they were.</p>
<p style="padding-left: 60px;"><strong>/dev/hda7</strong> (20GB): Fedora 25/gnome3</p>
<p style="padding-left: 60px;"><img class="aligncenter wp-image-1751 size-large" src="/josh/media/2017/01/Screenshot-from-2017-01-07-18-36-10-1024x576.png" width="700" height="394" /></p>
<p style="padding-left: 60px;">Man, I <em>still</em> really do not like gnome3 -- so much that I refuse to write in all (or any!) caps like they seem to prefer. I purposely chose it for this Fedora install so I'd be forced to use it and perhaps get more used to it (as if that was the problem...) but even with all the tweaks that I can find applied, still not great. It does look nice. I dig the Nodoka theme, especially the midnight variation.</p>
<p style="padding-left: 60px;">Wayland is the default display session in Fedora 25 and <a href="https://justgetflux.com/">f.lux</a> (one of my requirements) refuses to run under Wayland. Easy fix for that though: just need to select the non-Wayland session before you log in.</p>
<p style="padding-left: 60px;"><strong>/dev/hda8</strong> (20GB): <a href="https://4mlinux.com/">4MLinux</a> 21/JWM (Joe's Window Manager)</p>
<p style="padding-left: 60px;">This was a completely different distro, and a window manager I wanted to check out. It broke my GRUB install, and is not set up to automatically launch the WM, but it's interesting.</p>
<p style="padding-left: 60px;">The Update Tool apparently only updates the system by installing the latest version? Might look into this a little more, or more likely just try something else on that partition.</p>
<p style="padding-left: 60px;"><strong>/dev/hda9</strong> (2GB): shared swap partition for all the distros</p>
<p style="padding-left: 60px;">Likely never gets hit, but "just in case".</p>
<span style="border-radius: 2px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font: bold 11px/20px 'Helvetica Neue',Helvetica,sans-serif; color: #ffffff; background: #bd081c  no-repeat scroll 3px 50% / 14px 14px; position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer;">Save</span>
