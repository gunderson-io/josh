---
layout: post
title: "A clean-up that turned into digital archaeology (and an overhaul)"
date: 2026-10-09T12:00:00-07:00
categories:
  - about
tags:
  - site
  - eleventy
  - jekyll
  - WordPress
---

This blog is a pile of old websites that I finally put in one place. It started as a small job: fix the post headers on a sloppy WordPress-to-Jekyll conversion I'd left sitting on GitHub Pages. The headers were full of WordPress leftovers, the titles had HTML junk in them, and there were a couple of hundred stray thumbnails and links that only worked on some servers. Then I started pulling on threads, and it turned into three projects in a trench coat.

## The clean-up

- **Headers and titles.** I stripped the WordPress cruft from every post, fixed the titles, and put the tags back (an early pass threw them away, and they came back from the original files).
- **Images.** Everything moved into one `media/` folder, the hundreds of unused resized copies went away, and one photo link that only broke on case-sensitive servers (`.JPG` against `.jpg`) got fixed.
- **Tidying.** Posts that were only "upgraded WordPress" went away, and date-only titles got real ones. A handful of lines that had aged badly got edited. The rest stays as it was, as a snapshot of the time. Pull-quotes from an old theme came back as real pull-quotes.

## The dig

Then came the digital archaeology. We went through old backup discs, forgotten folders and the odd corner of the internet, and kept finding more of me: the whole 2002 journal, the 2003 to 2005 journal, the photo pages (now [galleries](/josh/2003/07/26/summit/)), the CD reviews that used to live in the side columns, and my DeviantArt journals. "I added photos" notes moved into the galleries they were about.

Doing our own research, this is roughly where each piece came from, oldest first.

### 1999: a movie I may never have seen

Warner Bros. ran a promotion for *Deep Blue Sea* that offered free web hosting on ACMEcity, a Geocities-style host, to anyone who wanted to "build your own Deep Blue Sea home page." I don't think I've ever actually seen the movie. I just liked making websites, and a free host was a free host. I was going by **lacer8** around then. Whatever I built there disappeared when ACMEcity shut down in 2001, and I haven't found a copy anywhere.

### 2002: Web1000

The oldest thing I still have is the journal from a free host called Web1000. It starts with [a preview of what the site would look like](/josh/2002/02/02/a-preview-of-the-site/), and goes on through the first semester of college, a [redesign](/josh/2002/06/14/redesign/), [a forum](/josh/2002/06/21/new-forum-new-logo/) and a [digital camera](/josh/2002/09/15/new-digital-camera/) that started the photo pages. In January 2003 [Web1000 took the site down](/josh/2003/01/28/january-28-2003/) for most of a week because of a comment they'd added to every page, and that was one reason to move.

### December 2003: My Own Domain

[I got my own domain](/josh/2003/12/06/december-6-2003/) and, two days later, [the forum came up](/josh/2003/12/08/december-8-2003/). The site was hand-built in Dreamweaver, with a journal in the middle and CD, movie and game reviews down the side columns. By then I'd settled on **joshg253** as my name online, and the journal ran until the end of 2005. I also kept a journal on DeviantArt (here's [the first entry](/josh/2005/03/23/first-entry/)).

### 2006 to 2018: New Domain and WordPress

In 2006 started using the Kverke moniker and moved to blogging software: first Windows Live Spaces, then WordPress, with a forum and a photo site on subdomains. A few of these blogs were merged into one, called GunderBlog, which kept going until 2018. You can read it all in the [archive](/josh/archive/).

Some of the research was detective work: figuring out which wallpaper I'd meant on a night in 2003 from file timestamps and an old sidebar, or dating a review by the first time it showed up. Some of it I never found, like that first 1999 site. Old links to things that no longer exist stayed dead on purpose.

## The overhaul: v2

I moved the site from Jekyll to [Eleventy](https://www.11ty.dev/), mostly so I could preview it on my own machine and have it make the thumbnails and galleries itself. That gave me [tag](/josh/tags/) and [category](/josh/categories/) pages, an [Atom feed](/josh/feed.xml), a paginated home page, and a lightbox for photos. A GitHub Action builds and publishes the site every time I push.

Then I rebuilt the look, from the [Hacker theme](https://github.com/pages-themes/hacker) (public domain), and kept going:

- an ASCII logo that scales to your screen
- shell prompts on every page (click the name to change it from `visitor`; the part after the `@` is your operating system)
- an `ls -l`-style archive you can filter by typing
- scanlines, a blinking cursor, titles that type themselves out, a glitch when you hover, and a boot screen when you refresh
- Matrix rain
- keyboard shortcuts: press `?` to see them

All of it is optional. The buttons in the footer, or the `m`, `c` and `f` keys, switch the Matrix rain, scanlines and effects off, and the site remembers your choice.

## How it got made

Claude and I did most of this in one long conversation. I described what I wanted and kept saying things like "make it more l337", and Claude wrote the scripts, the templates and the CSS, and tested the pages in a real browser. I made the calls about what stays and what goes. It's a good way to finally finish a project like this.

## Now

Everything is here, on a static site generated from plain text files. Some things you can't read anymore, because those hosts are gone: the ACMEcity site and the WordPress.com blogs. That's the web for you.
