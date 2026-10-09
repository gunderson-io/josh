---
layout: post
title: Distro-hopping in 2016
date: 2017-01-27T16:50:32-08:00
categories:
  - software
permalink: /2017/01/27/distro-hopping-in-2016/
tags:
  - "#!"
  - Alpine
  - Arch Anywhere
  - Arch Linux
  - Archbang
  - BBQLinux
  - Cinnamon
  - conky
  - Crunchbang
  - Debian
  - Devuan
  - "Exorcist: The Beginning"
  - Fedora
  - Gnome
  - Gnome3
  - Homebrew Channel
  - KDE
  - Kingston
  - Kubuntu
  - laptop
  - Linux Mint
  - LinuxBBQ
  - LinuxBBQ Cream
  - Longmire
  - Lubuntu
  - Nelum-Dev1
  - Openbox
  - openSUSE
  - Pet Sematary
  - Pet Sematary II
  - Qubes OS
  - Refracta
  - "Rosemary's Baby"
  - Sony
  - SSD
  - STAR
  - The Exorcist
  - tint2
  - Ubuntu
  - Ubuntu MATE
  - Ubuntu-Gnome
  - VAIO
  - Viperr
  - Void
  - wattOS
  - Wii
  - Windows 10
  - Xfce
  - Xubuntu
  - Zephyr
---

TL;DR: more gibberish about installing &amp; running Linux, during 2016.

&nbsp;
<h3>Main PC</h3>
The PC I built in 2011 currently runs Windows 10 Pro x64 and is the media/print server, video conversion, torrenting, and gaming rig. With constant new or recurring Windows annoyances re-triggering the question of just switching to Linux (but <em>still</em> requiring a Windows install to play most games) I finally tried some bare-metal installs on my PC.

The way I had it set up was cool: I had a cheap SSD in a USB3 SATA dock, and if it was powered on, the PC would boot to the GRUB menu on that SSD, otherwise I'd just see the BitLocker screen.

I installed Arch (using Architect) and Mint. It took some doing to get the 3 (vertical-horizontal-vertical) monitors aligned. Got the Audigy DG, Steam, and Minecraft working, looked into torrent apps, etc. It could work, maybe.

The confusion sets in with the disks I have in there that are software-RAID'd in Windows <em>and</em> BitLock'd. I've seen ways to access BitLock'd disks in Linux, and ways to access Windows software-RAID'd disks in Linux, but not disks that are both. I've yet to dig out some old SATA disks and unplug the existing disks to experiment further. This is really probably what would keep me from switching mainly to Linux on that PC, so most of the bare-metal Linux I do anymore is just on the VAIO laptop.
<h3>VAIO Laptop</h3>
I was doing Windows 10 Insider Builds on my VAIO laptop for a while. Only once did it kill my bootloader so I couldn't access my other OSs anymore, however, it was the build where it'd say my battery was a fake then shut down (regardless that the laptop was plugged in) that made me rethink running pre-release Windows builds.

Bought a cheap Wii off a neighbor on NextDoor, installed Homebrew Channel on it, and got Wii dev set up in Win10, Arch, Mint, and Ubuntu MATE. Also did the Java MOOC from University of Finland, and had that set up on all 4 as well.

Tired of setting up everything almost exactly the same 4 times, I had the brilliant idea of having a shared /home for the 3-4 different distros, which worked OK but there was definitely some oddness.
<h4>BBQLinux</h4>
I was thinking of looking into Android dev again and remembered BBQLinux, but since I already had Arch installed I just added reps to my old Architect install and updated it, and had to reinstall again using Architect. :\
<h3>Summer</h3>
<h4>~!# (Crunchbang)</h4>
During the summer I was fondly remembering #! (Crunchbang) 10 with it's minimalist style, and I remembered how after upgrading to #! 11 it lost <em>something</em> about it and I just stopped using it. So I checked out a couple follow-on projects: the <a href="https://www.bunsenlabs.org/">BusenLabs</a> "community continuation" and the <a href="https://crunchbangplusplus.org/">#!++ (CrunchBang++)</a> fork. There doesn't seem to be much going on with either after the initial scramble to get something out, and they are so similar that I couldn't even recommend one over the other without further testing.
<h3>Fall</h3>
During the Fall I tried out quite a few distros due to some serious binge-watching -- in October we try to watch as many horror-type movies as we can.
<h4>Fedora</h4>
In late September a buddy mentioned that he, too, had been using Mint as his go-to for his Linux needs for years, but had recently dumped it for Fedora and was amazed by its speed.

So I checked out Fedora 24, Gnome3 dark theme with a bunch of tweaks applied, better, but I still hate Gnome3 no matter how well she cleans up. Package management with dnf is similar enough to apt that it doesn't make a difference to me. Fedora always seems to have very new Kernels, which I like.

I somehow, again, found myself fondly remembering #! (Crunchbang) and then I thought "what about a Fedora-based system in the same vein as #! (with Openbox + tint2 + conky)?"

So, while binge-watching the latest season of <a href="https://www.imdb.com/title/tt1836037/">Longmire</a>, I experimented with that idea for a while: using a Fedora netinstall as a base, and configuring as necessary to make something similar to #!. Got it to a usable point, then got bored with it, and I also realized how much work (e.g. with "pipes" and such for the menus) the #! guys did to customize Debian/Openbox.
<h4>Viperr</h4>
That's when I found <a href="https://www.viperr.org">Viperr</a>, which I played with while watching <a href="https://www.imdb.com/title/tt0070047/">The Exorcist</a> (1973) and <a href="https://www.imdb.com/title/tt0204313/">Exorcist: The Beginning</a> (2004), and would describe as "just ok". Really the thing that bugged me most about Viperr was with their theming: they used a couple different shades of blue (one more "neon" one more "pale") for different things that did not go together at all. Totally clashed.

So I dumped Viperr and moved on. "What about using other bases for a #!-esque desktop, such as Arch?"
<h4>Archbang</h4>
Basically #! but on an Arch foundation. There are a bunch of variations now, even some tiny experimental ones. I just preferred my Arch/Xfce install.
<h4>Qubes OS</h4>
Qubes is a really neat idea, separating types of activities into isolated VMs. I played with it for hours while watching <a href="https://www.imdb.com/title/tt0098084/">Pet Sematary</a> (1989), <a href="https://www.imdb.com/title/tt0105128/">Pet Sematary II</a> (1992), and <a href="https://www.imdb.com/title/tt0063522/">Rosemary's Baby</a> (1968), and others.

Ultimately, being unable to easily set up D0 (or whatever) the way I wanted, kinda turned me off.
<h4>GParted Live</h4>
Rearranging and resizing partitions, I eventually decided on the current setup (detailed in an <a href="/josh/2017/01/04/current-laptop-os-musings-2017-01-edition/">earlier post</a>) which is essentially four 20GB partitions for Linux distros, a shared 2GB swap partition, and the rest for Win10.
<h4>Arch Anywhere</h4>
I ended up reinstalling Arch again (twice) in October using a different tool called Arch Anywhere -- once while watching <a href="https://www.imdb.com/title/tt0212985/">Hannibal</a> (2001) and once while watching <a href="https://www.imdb.com/title/tt0099697/">Graveyard Shift</a> (1990).
<h4>Ubuntu variants 16.10 releases</h4>
Also while watching as many ~horror movies as we could in October, I also tried out all the 16.10 releases of the official Ubuntu flavors.

<strong>Ubuntu</strong>: I cannot stand Unity to begin with (see also: gnome3) and now there is no way to move the window controls to the right side. Get this crap off my computer.

<strong>Ubuntu-MATE</strong>: this one was promising. Worked fine, seemed to be more up to date than Mint, but once Mint 18 came out I had to have the Mint-Y themes and they just don't quite work on U-MATE.

<strong>Kubuntu</strong>: KDE has been bloated crap for a long time now, and Plasma is its gnome3, i.e. slow, unintutive, and really doesn't look all that great either. Would rather use an Apple product.

I also tried Lubuntu and Xubuntu, which were fine yet unremarkable. It is liikely my hatred for Gnome3 led me to skip Ubuntu-Gnome altogether.
<h4>openSUSE</h4>
As I've mentioned in a <a href="/josh/2017/01/12/linux-beginnings/">previous post</a>, SuSE + KDE3 was my preferred distro/DE combo in college ('04-'05). Now openSUSE just seems like a complicated &amp; bloated has-been.
<h4>Devuan</h4>
While I think most distros nowadays have done so, it seems that switching to the systemd init system is a pretty controversial topic within the Linux community. <a href="https://devuan.org/">Devuan</a> (~"dev one") is a fork of Debian without systemd. And since it's Linux, regardless that it's still in beta, there are already several distros based upon it.

In addition to Devuan, I tried out several Devuan-based distros (<a href="https://sourceforge.net/projects/linnix/">STAR</a>, <a href="https://sourceforge.net/projects/zephyrlinux/">Zephyr</a>, <a href="https://sourceforge.net/projects/nelum-dev1/">Nelum-Dev1</a>, <a href="https://www.ibiblio.org/refracta/">Refracta</a>), and similar to Debian stable, it just doesn't seem interesting at all once it's installed, just super outdated. Maybe we don't <em>need</em> the latest kernel, but why not?
<h4>Alpine, Void, wattOS</h4>
These were some "super light" distros I wanted to check out. Although I found out quickly that wattOS is a lightened Ubuntu instead of its own super-light entity like the others.
<h4>Others</h4>
<strong>LinuxBBQ Cream</strong> -- one with 97,000 different environments, some neat, some shit. Probably tried a couple other LinuxBBQ releases as well.

<strong>Satanic Edition</strong> -- neat, except that after trying to do all the updates/upgrades, really not much of what made it special still remained. :(
<h4>Even More</h4>
ISOs I definitely tried (either in a VM or on the laptop) but since I neither had this post in mind nor took any notes at the time, I'm drawing a blank. That could also be a good thing, meaning I didn't hate them. :)
<ul>
 	<li>Antergos</li>
 	<li>Manjaro</li>
 	<li>Maui</li>
 	<li>Peppermint</li>
 	<li>Zorin</li>
 	<li>Linux Lite</li>
 	<li>Netrunner Rolling</li>
 	<li>Apricity</li>
</ul>
<h4>Still More?</h4>
ISOs I grabbed but may not have actually checked out recently.
<ul>
 	<li>Sabayon</li>
 	<li>Korora</li>
 	<li>prox3cubed</li>
 	<li>salix</li>
 	<li>slackel</li>
 	<li>crux</li>
</ul>
