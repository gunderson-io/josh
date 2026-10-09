---
layout: post
title: Linux Beginnings
date: 2017-01-12T23:56:30-08:00
categories:
  - software
permalink: /2017/01/12/linux-beginnings/
tags:
  - Arch Linux
  - Architect Linux
  - Dell
  - Gnome
  - KDE
  - Linux
  - Linux Mint
  - Linux-Mandrake
  - SuSE
  - VAIO
  - VirtualBox
---

<!-- wp:paragraph -->
<p> TL;DR: some background on my experiences with Linux, through 2015.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1770,"align":"center"} -->
<div class="wp-block-image"><figure class="aligncenter"><img src="/josh/media/2017/01/tclos6-257x300.jpg" alt="" class="wp-image-1770"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In 1999 or so I bought a boxed The Complete Linux Operating System 6.0 from the Tacoma CompUSA (or was it still Computer City then?). Or maybe I got it at Future Shop in South Hill? Or Borders in Tacoma? Or Borders in South Hill that replaced the Future Shop?! Anyway, it included Linux-Mandrake 6.0, which was purported to be "Red Hat Linux 6.0 with enhancements", stepped you through a super tedious installation, and once you finally got it installed, the GUI looked like crap. But it was an interesting learning experience.</p>
<!-- /wp:paragraph -->

<!-- wp:media-text {"mediaId":1962,"mediaType":"image"} -->
<div class="wp-block-media-text alignwide"><figure class="wp-block-media-text__media"><img src="/josh/media/2019/09/dell5150-1.gif" alt="" class="wp-image-1962"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph -->
<p>Then around 2003 during college I revisited Linux, trying a few on my Dell Inspiron 5150 laptop and eventually buying a boxed copy of SuSE Professional (9.x series) from the Tacoma CompUSA. </p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->

<!-- wp:media-text {"mediaPosition":"right","mediaId":1766,"mediaType":"image","mediaWidth":23} -->
<div class="wp-block-media-text alignwide has-media-on-the-right" style="grid-template-columns:auto 23%"><figure class="wp-block-media-text__media"><img src="/josh/media/2017/01/3899900650.03.LZZZZZZZ-241x300.jpg" alt="" class="wp-image-1766"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph -->
<p>I was amazed at how much easier installation was and how much more  polished everything looked. I seem to remember hating Gnome2 and  preferring KDE3 at the time. We also used Red Hat (also 9, I think) in  class. </p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->

<!-- wp:image {"id":1767,"align":"left","width":131,"height":82} -->
<div class="wp-block-image"><figure class="alignleft is-resized"><img src="/josh/media/2017/01/linksys-carte-pcmcia-wpc54gs-e1484287525757-300x187.jpg" alt="" class="wp-image-1767" width="131" height="82"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>I also remember spending countless hours trying to get a PCMCIA SpeedBooster WiFi card to work in Linux on that laptop. Something about using a wrapper on the Windows drivers, building a module, and recompiling the Kernel. Not sure I ever got that card working in Linux.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Immediately after college I was working in a lab at Intel and some of  the testing I did there required various Enterprise Linux distros on the  SUT and/or clients. </p>
<!-- /wp:paragraph -->

<!-- wp:media-text {"mediaId":1768,"mediaType":"image","mediaWidth":16} -->
<div class="wp-block-media-text alignwide" style="grid-template-columns:16% auto"><figure class="wp-block-media-text__media"><img src="/josh/media/2017/01/nook-s7g-800-e1484287607438-198x300.jpg" alt="" class="wp-image-1768"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph -->
<p>
Then I hadn't been using Linux at all since working on-site at 
Microsoft, but in 2010 I "needed" to root my Nook (the original gimmicky
 eInk + tiny touchscreen LCD one) and the available tools were for Linux
 only. So I did some research and found Linux Mint, got it installed in 
VirtualBox, setup a shared folder, and was able to root the Nook.

</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->

<!-- wp:image {"id":1964,"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="/josh/media/2019/09/1423936087_1208205534_o-e1569165405290-300x225.jpg" alt="" class="wp-image-1964"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In 2011 I built a new PC and maxed it out with 24GB of memory, specifically so I'd be able to run more VMs. Since then I've always had an up-to-date Mint VM, and have tried dozens, if not hundreds, of versions of various distros in VirtualBox. In 2013 I picked up a&nbsp; 17" Sony VAIO E-series (SVE1712BCXB) laptop and immediately replaced the mismatched 4GB + 2GB DIMMs with a matching pair of faster 4GB DIMMs and swapped out the ultra-crappy 500GB HDD for a decent SSD. Within a couple months, I also set it to Legacy Mode and disabled Secure Boot to get Linux Mint to work. No idea if this would still be necessary today. I think once I get a larger SSD (or a new laptop!) I'll look into UEFI&nbsp; / SecureBoot / GPT again. By the end of 2015 I also had Arch installed on my laptop, using Architect Linux.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Adventures in Arch(itect)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In the past I've tried out Arch (and Gentoo) in VirtualBox and deemed them to be an amazing learning experience but too cumbersome for daily use. I stumbled across Architect Linux in 2015 and it basically provides a step-by-step installation for Arch so you can get up and running and start tweaking. You can select as many or few WMs/DEs as you like, but make sure you also install a network manager. After the Architect install, some other things to install:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>yaourt - French for "yogurt", this wrapper will essentially replace pacman, adding colors and AUR to the results</li><li>libs32 - needed for Steam</li><li>infinality font patches - makes for a really smooth experience</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So my current thought with Arch is that (if you use Architect) it's not a pain to get installed, and once it's up tweak to your heart's content. The package management allows you to install updates similar to APT but simpler:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">pacman -Syu</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>or</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">yaourt -Syu</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>instead of</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">apt update &amp;&amp; apt upgrade</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>The next post is about my 2016 with Linux. <span style="border-radius: 2px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font: bold 11px/20px 'Helvetica Neue',Helvetica,sans-serif; color: #ffffff; background: #bd081c no-repeat scroll 3px 50% / 14px 14px; position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer;">Save</span> <span style="border-radius: 2px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font: bold 11px/20px 'Helvetica Neue',Helvetica,sans-serif; color: #ffffff; background: #bd081c  no-repeat scroll 3px 50% / 14px 14px; position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer;">Save</span></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
