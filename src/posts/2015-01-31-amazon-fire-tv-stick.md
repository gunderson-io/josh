---
layout: post
title: Sideload Android apps on your Amazon Fire TV Stick
date: 2015-01-31T18:34:48-08:00
categories:
  - how-to
  - software
permalink: /2015/01/31/amazon-fire-tv-stick/
tags:
  - Amazon
  - Android
  - Fire TV Stick
  - Firefox
  - Twilight
---

I picked up an Amazon Fire TV Stick during the 2-day Prime preorder discount and received it after everyone else bought theirs at Best Buy for the same price.

Overall, it's a pretty slick device, with a few shortcomings, but it ended up not being super useful at home since I already have a PS3 connected to our one TV that can stream Prime video, Netflix, etc. I figured it'd be awesome when traveling though, provided we actually had decent (or <em>any</em> WiFi) where we end up. However, there is no built-in way to log into e.g. hotel Wi-Fi, but you can sideload <a title="Firefox on Google Play" href="https://play.google.com/store/apps/details?id=org.mozilla.firefox" target="_blank">Firefox</a> via adb, which I assume you can use that to log in since it's a working browser, but I haven't been to a hotel since I installed Firefox on mine.

I also wanted to see if I could get <a title="Twilight app on Google Play" href="https://play.google.com/store/apps/details?id=com.urbandroid.lux" target="_blank">Twilight</a> installed to lessen the blue light in the evenings. It installed and will work, but you can't adjust the sliders manually, nor set a location automatically or manually. However, you can force the filter on or off, so it can still be useful.

<h2>Procedure</h2>

The install procedure is the same for either app.

<h3>On the Fire TV Stick</h3>

<ol>
    <li>Go to Settings -&gt; System -&gt; Developer Options</li>
    <li>Turn on ADB debugging and Apps from Unknown Sources</li>
    <li>Then under Settings -&gt; System -&gt; About -&gt; Network</li>
    <li>Make note of the IP address, e.g. 192.168.1.123</li>
</ol>

<h3>On a computer on the same network as your Fire TV Stick</h3>

<ol>
    <li>Download the .APKs you want.
<ul>
    <li>Firefox - I just grabbed the latest mobile build from Mozilla's FTP site at the time, which was <a title="Firefox 34 .APK on Mozilla's FTP site" href="ftp://ftp.mozilla.org/pub/mobile/releases/34.0/android/en-US/fennec-34.0.en-US.android-arm.apk">Firefox 34</a></li>
    <li>Twilight - I just searched for 'twilight apk' and ended up grabbing it <a title="random site I found searching for twilight apk" href="https://apksteed.com/application/twilight-3-0-apk">here</a>.</li>
</ul>
</li>
    <li>Install <a href="https://developer.android.com/sdk">adb</a>
<ul>
    <li>(I already had this installed, maybe I'll fill in steps later)</li>
</ul>
</li>
    <li>Open a command window</li>
    <li>CD to the folder where you dropped the .APKs</li>
    <li>Connect to the IP address from above; e.g.
<ul>
    <li>
<pre>adb connect 192.168.1.123</pre>
</li>
</ul>
</li>
    <li>Install the .APKs on the FireStick; e.g.
<ul>
    <li>
<pre>adb install firefox.apk</pre>
</li>
</ul>
</li>
</ol>

<h2>Post-install</h2>

(back on the FireStick)

<ol>
    <li>Go to Settings -&gt; Applications -&gt; Manage All Installed Applications</li>
    <li>Scroll down to your newly installed app, press Ok, Launch application</li>
</ol>

<h2>Some notes on the two apps</h2>

<h3>Firefox</h3>

It's pretty tedious to use the browser with the included remote, but should suffice for e.g. entering login information on a hotel WiFi access form.

<h3>Twilight</h3>

Not being able to adjust the bars, and since it won't get a location automatically, and you can't set one manually, you basically end up with 2 settings:

At the top, select ether

<ul>
    <li>Default, and use <em>Force filter</em> at the bottom to toggle it on &amp; off, or</li>
    <li>Bed Reading, which is much dimmer and automatically checks <em>Force filter</em> when selected.</li>
</ul>

Kind of a pain, but may lead to getting to sleep earlier, which may lead to you finally getting that raise you've been working on for the past 9 years...

<h2>Other thoughts</h2>

I don't see a quicker way to open the apps besides Settings -&gt; Applications -&gt; Manage All Installed Applications -&gt; app -&gt; Launch application, and for Twilight you have to do that and toggle it on &amp; off via its <em>Force filter</em> setting. So, not great, but it works. Basically.
