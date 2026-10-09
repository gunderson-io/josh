---
layout: post
title: convert FLAC to MP3 using LameXP
date: 2014-04-05T01:39:13-07:00
categories:
  - how-to
  - software
permalink: /2014/04/05/convert-flac-to-mp3-using-lamexp/
---

I have EAC set up to rip Perfect FLAC rips, and then to transcode to MP3 I use an open-source program called LameXP.

# Setup

Grab the latest LameXP: https://lamexp.sourceforge.net/

Extract the ZIP to a folder, or run the installer

Agree to

Check for updates or Postpone

click Don't Show Again at the Nero AAC

## Disable sounds

Tools -&gt; Configuration -&gt; Disable Sound Effects

You're welcome. :)

## Output Directory tab

check "Save output files to the same location where the input file is located"

## Meta Data tab

double-click Position, change to Unspecified (copy from source file)

double-click Comment, clear the field, OK

Note: you will have to clear the Comment field every time you open the program, unless you want the Comment field in your MP3s to say "Encoded with LameXP". I prefer them to use whatever was in the FLAC.

## Compression tab

MP3, VBR, Maximum quality

Gives you "V0" MP3s

## Advanced Options tab

LAME Algorithm Quality all the way to the right (Better quality)

Multi-Threading

The default/recommended setting is "Choose the number of threads based on the number of processors", but the behavior is a little funky:

My laptop has a i5-3210M, with 4 logical processors. LameXP chooses 4 Instances. Makes sense.

My main PC has an i7-970, with 12 logical processors. LameXP chooses 7. WTF?
