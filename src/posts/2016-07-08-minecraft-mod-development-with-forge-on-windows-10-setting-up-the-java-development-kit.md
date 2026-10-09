---
layout: post
title: "Minecraft mod development with Forge on Windows 10: Setting up the Java Development Kit"
date: 2016-07-08T13:37:04-07:00
categories:
  - how-to
  - video games
permalink: /2016/07/08/minecraft-mod-development-with-forge-on-windows-10-setting-up-the-java-development-kit/
tags:
  - dev
  - Java
  - Minecraft
  - Windows 10
---

&nbsp;

I've been studying Java again lately and decided to look into doing a Minecraft mod as more practice.

I'm currently running Windows 10 x64 RTM + latest updates (v1511 build 10586.420).

I started following the <a href="https://mcforge.readthedocs.io/en/latest/gettingstarted/">Getting Started guide in the Forge Documentation</a> and once I got to Step 4 had some issues, so this first post is what I had to do to get the <code>gradlew setupDecompWorkspace</code> step working:
<h3>Install the latest JDK</h3>
I installed the latest JDK (JDK 8 update 91) via <a href="https://ninite.com/">Ninite</a>, and uninstalled any older versions.
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">Sidenote:</h3>
</div>
<div class="panel-body">Ninite allows you select one or more application and download a tiny installer for the selected software, which when run always installs the latest version(s) with no annoying dialogs, etc. Highly recommended for anything they support.</div>
</div>
<h3>Set the JAVA_HOME variable</h3>
Hit Start, start typing 'environment' or 'variables'. It should show you "Edit the system environment variables" after 3 letters or so, click on that.

Then click on "Environment Variables..." button on the bottom right of the dialog that comes up.

Look for a Variable named JAVA_HOME in the top and bottom panes. If one exists, make sure the path points to your JDK install directory (not including /bin at the end). E.g. today mine looks like:

<code>C:\Program Files\Java\jdk1.8.0_91</code>

If you don't see one, create a new one in either the top or bottom pane and make sure the value points to your JDK directory, same as above.
<h3>Continue with the Forge Documentation</h3>
Then I continued to follow the official guide <a href="https://mcforge.readthedocs.io/en/latest/gettingstarted/">here</a>.

&nbsp;
