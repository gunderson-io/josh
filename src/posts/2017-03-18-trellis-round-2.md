---
layout: post
title: Trellis, round 2
date: 2017-03-18T01:27:59-07:00
categories:
  - software
permalink: /2017/03/18/trellis-round-2/
---

Decided to try again, but with a Debian/Ubuntu-based system.

Found a VM of an essentially clean install of Mint 18 Xfce on my main PC, decided to go with that.

Made sure it was updated and created a Snapshot.

Installed the prereqs via apt. Ended up with versions:
Ansible 2.1.1.0 (req &gt;= 2.2)
Virtualbox 5.0.32 (req &gt;= 4.3.10)
Vagrant 1.8.1 (req &gt;= 1.8.5)

So as you can see, we're off to a great start with only one of the dependencies being fulfilled with proper versions via the default repositories.

Trying to install later versions and the Vagrant plugins ended up with permission errors while installing, so tried sudo-ing the install commands, which yielded different (and red!) errors.

My wine glass is empty and this Ukrainian Dark Ambient Black Metal album is about over, so to bed I head.
