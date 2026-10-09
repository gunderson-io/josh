---
layout: post
title: "Minecraft mod development with Forge on Windows 10: Setting up NetBeans"
date: 2016-12-06T21:55:09-08:00
categories:
  - how-to
  - video games
permalink: /2016/12/06/minecraft-mod-development-with-forge-on-windows-10-setting-up-netbeans/
tags:
  - dev
  - Java
  - Minecraft
  - Windows 10
---

&nbsp;

Back when I was in University I preferred NetBeans for Java development. I recently took University of Finland's free Java MOOCs and that also happens to be the IDE their code-checking tools use. So I'm used to NetBeans' quirks and prefer to continue to use it.

The official <a href="https://mcforge.readthedocs.io/en/latest/gettingstarted/">Forge Documentation</a> doesn't have setup info for Netbeans (just Eclipse and IntelliJ IDEA) but <a href="https://www.minecraftforge.net/wiki/NetBeans">their Wiki</a> does have a section about importing an Eclipse project.

Sidenote:

As stated above, I recently did the UoF Java MOOCs and I still have their modified Netbeans v8.0.2 installed (Netbeans with TMC 0.8.18).

<h3>First experiment:</h3>

The next step in the official docs says for Eclipse just run <code>gradlew eclipse</code> so I tried <code>gradlew netbeans</code> . . . no go.

<h3>Second experiment:</h3>

(Thanks to this awesome post: https://epik.org.uk/effortless-minecraft-forge-with-netbeans/)

Open Netbeans, Tools -&gt; Plugins. Available Plugins tab, search for 'gradle". I see two: Gradle JavaEE Support (last updated 12/26/14) and Gradle Support (last updated 1/9/16).

I chose the latter since it's been updated in the last 6 months (just barely). It also wanted to install "Groovy and Grails".

After restarting Netbeans, like magic my mod folder could now be opened as a Project.

I right-clicked on the Project and selected Tasks -&gt; run -&gt; runClient and Minecraft started but doesn't show anything about my completely empty Mod yet. So I did the same with example from Forge and it worked.

Make that a little less tedious: https://blogs.oracle.com/geertjan/entry/seamless_minecraft_forge_in_netbeans

And also a good link to continue.

&nbsp;
