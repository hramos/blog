--- 
name: accessing-buzz-timeline-information
layout: post
title: Accessing Buzz Timeline Information
time: 2010-02-23 14:55:00 -04:00
comments: true
categories: code
---
Quick update regarding the use of [Google Buzz](http://buzz.google.com) data that may interest developers. As of today:

You can access a user’s timeline as an [Atom](http://tools.ietf.org/html/rfc4287) feed using the following URL

> http://buzz.googleapis.com/feeds/{user}/public/posted

This is just one user’s updates, NOT what the user sees in Buzz. You will get a stream of updates, or Buzzes, authored by {user}.

If one were to develop a Buzz client, one would actually need the whole of the timeline seen by the user inside the Buzz tab in Gmail. At the moment there is no one central place where a developer can fetch the Buzz timeline for all the people you follow. However, you may use Contacts access and then iterate through each contact’s public atom feed, and integrate that into your client. 

This, however, is not as useful because you don’t have access to Groups and so on. It is a good temporary solution, but Google should have the API soon. Probably faster than you can code a good, stable scraping solution.  

This is why you won’t see native Buzz clients soon. Whomever does that will have a hell of a problem maintaining their custom scraping code. Some people have started their own [firehose scraping projects](http://allurbuzz.appspot.com/) already.  

Google shall soon (weeks, months) release a proper API with oAuth. That’s when the barrage of iPhone + iPad apps will arrive.

On the other hand, there are ways to publish data to your own timeline. To do so requires the setup of a service feed that must be linked by the user in their Google profile. Using [PubSubHubbub](http://code.google.com/p/pubsubhubbub/) the Buzz will appear almost immediately. This is not the equivalent, though, of authoring new Buzzes from a simple mobile client, as the user still needs to associate their profile with the service - a kind of temporary solution while Google finishes their oAuth implementation.