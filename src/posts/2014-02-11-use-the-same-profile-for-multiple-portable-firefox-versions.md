---
layout: post
title: Use the same profile for multiple Portable Firefox versions
date: 2014-02-11T01:37:05-08:00
categories:
  - how-to
  - software
permalink: /2014/02/11/use-the-same-profile-for-multiple-portable-firefox-versions/
---

A few weeks ago, the latest version of Firefox was released and it [yet again] killed one of the extensions I rely on. So I uninstalled that one and went to the latest ESR (v24) on my main PC and all was well. I did, however, have to tell some kids to pull their pants up and stay off my lawn.

I use PortableApps extensively at work -- I have to flatten my workstations more often than I'd like to admit due mostly to the pre-release updates forced on my domain systems.

It also nice to have easy access to the latest version from each of the release channels (ESR, release, Beta, Aurora, Nightly, and Nightly x64), especially for web designers or to help chase down bugs.

These all end up using their own profiles (which can also be useful) but I wanted them all to use the same profile.

So I did some searching, and it looks like The Internet only wants to do basically the opposite of what I do: they want to be able to have multiple profiles for one version of FirefoxPortable (and one guy wanted he and his wife to use the same profile!?)

Here's what I did:
* Installed each of the PortableApps versions on my USB flash drive using the "Get more apps..." functionality of PortableApps launcher -- you could also go to PortableApps.com and download the installers and do it that way.
* Made sure all FF are closed, even locally installed
* Launch FirefoxPortable -- or any Portable one
* Installed extensions, pinned a few tabs, configured some settings, etc.
* Made sure all FF are closed, even locally installed
* Moved the three folders () in P:PortableAppsFirefoxPortableData to the parent folder; i.e. P:PortableAppsFirefoxPortable
* Edited a FirefoxPortable.ini file to reflect the locations of the folders you want to use

[FirefoxPortable]
ProfileDirectory=profile
SettingsDirectory=settings
PluginsDirectory=plugins

So now my directory looks like this (channel, current versions):
P:PortableApps
FirefoxPortable -- release, v27
FirefoxPortableAurora -- alpha, v29
FirefoxPortableESR -- ESR, v24
FirefoxPortableNightly -- nightly, v30
FirefoxPortableNightly64 -- nightly 64-bit, v30
FirefoxPortableTest -- beta, v28

Next is to try similar with Chrome Portable, although I think I can just use the Sync feature on there.
