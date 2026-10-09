---
layout: post
title: YouTube subscriptions feeds in Inoreader
date: 2017-03-21T12:09:49-07:00
categories:
  - how-to
  - software
permalink: /2017/03/21/youtube-subscriptions-feeds-in-inoreader/
tags:
  - Dropbox
  - Inoreader
  - YouTube
---

Google used to let you subscribe to a single "newsubscriptionvideos" feed that would populate with new videos from the channels to which a specified user was subscribed. Then YouTube API v3 came out and removed the combined feed feature.

Nowadays, each Channel provides its own feed, and while this workaround is not completely automatic, it's better than manually adding removing individual feeds, especially if you have a lot of subscriptions.

I'm using the Inoreader web interface + Dropbox in Windows, but this should be able to be adjusted for most other Reader/Storage/OS combinations.
<ol>
 	<li>Go to YouTube and log in</li>
 	<li>Go to your <strong>Subscriptions</strong> (<a href="https://www.youtube.com/subscription_manager">https://www.youtube.com/subscription_manager</a>)<a href="/josh/media/2017/03/2-subs.png"><img src="/josh/media/2017/03/2-subs.png" width="291" alt=""></a></li>
 	<li>Download new via the link at bottom after <strong>Export to RSS readers</strong> (<a href="https://www.youtube.com/subscription_manager?action_takeout=1">https://www.youtube.com/subscription_manager?action_takeout=1</a>)<a href="/josh/media/2017/03/3-takeout.png"><img src="/josh/media/2017/03/3-takeout.png" width="300" alt=""></a></li>
 	<li>Save to Dropbox, e.g. Dropbox\Public\subscription_manager.xml</li>
 	<li>Right-click the file in the Dropbox folder --&gt; Copy Dropbox link, Dropbox will automatically create and copy a link the file which will be something like https://www.dropbox.com/s/qwerty123456789/subscription_manager.xml?dl=0<a href="/josh/media/2017/03/5-copylink.png"><img src="/josh/media/2017/03/5-copylink.png" width="150" alt=""></a></li>
 	<li>Add it to Inoreader:
<ol>
 	<li>Click the Gear icon in the top right --&gt; Preferences<a href="/josh/media/2017/03/6a-gear-preferences.png"><img src="/josh/media/2017/03/6a-gear-preferences.png" width="150" alt=""></a></li>
 	<li>Down a bit on the left, click OPML subscriptions, then New subscription on the top right<a href="/josh/media/2017/03/6b-opml-new.png"><img src="/josh/media/2017/03/6b-opml-new.png" width="270" alt=""></a></li>
 	<li>Paste the Dropbox link to the file in URL, changing the end to dl=1<a href="/josh/media/2017/03/6c-addnewopml.png"><img src="/josh/media/2017/03/6c-addnewopml.png" width="300" alt=""></a></li>
 	<li>Optionally add a Description -- if you leave it out, Inoreader just shows the URL as the name in OPML subscriptions</li>
 	<li>Specify an Inoreader folder to use for all feeds contained in your XML file, e.g. YouTube</li>
 	<li>You can choose Full Synchronization to not only add new feeds to the specified folder, but also remove feeds no longer present in the XML file</li>
 	<li>And you can optionally show notifications when Inoreader adds or removes feeds via the XML file</li>
</ol>
</li>
 	<li>Inoreader will automatically update every hour with new videos from your YouTube Subscriptions contained in the XML file. You can also click Reload next to the feed in OPML subscriptions to force it to update now.</li>
</ol>
<strong>NOTE:</strong> You'll need to manually download the new XML file and replace your shared one any time you want changes reflected (i.e. you subscribe or unsubscribe from anything). The Dropbox link does not change, and Inoreader will read the new file next time it updates (every hour, and when you click Reload).

Of course, an interesting project would be to have a script run automatically every so often to fetch &amp; replace the XML file, but that exercise is left up to the reader. ;)
