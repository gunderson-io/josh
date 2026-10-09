---
layout: post
title: "DRAFT: Adventures in Arch(itect)"
date: 2016-01-11T09:52:42
categories:
  - software
original_status: draft
---

In the past I've tried out Arch (and Gentoo) and deemed them to be an amazing learning experience but too cumbersome for daily use.

I stumbled across Architect Linux recently and it basically provides a step-by-step installation for Arch so you can get up and running and start tweaking.

Select as many or few WMs/DEs as you like

After Architect install, some other things to install:

yaourt - French for "yogurt", this wrapper will essentially replace pacman, adding colors and AUR to the results
libs32 - needed for Steam
infinality font patches -  makes for a really smooth experience

So my current thought with Arch is that (if you use Architect) it's not a pain to get installed, and once it's up tweak to your heart's content. The package management allows you to install updates similar to APT but simpler: pacman -Syu (or yaourt Syu) instead of apt update &amp;&amp; apt upgrade
