--- 
name: developers-love-ipad
layout: post
title: Developers LOVE the iPad
time: 2010-01-28 17:16:00 -04:00
comments: true
categories: code
---
![](ipadlove.png)

With all the disappointment brewing around the iPad announcement, I had to offset it with some praise in my headline, so please excuse me.

Much has been talked about why the iPad has failed to meet expectations. How much of this was artificially inflated by hype, and how much the iPad did fail to deliver, that’s a subject best left to the tech pundits. With that said, allow me to make a case for why the iPad is great news for iPhone developers.

**A big iPod Touch?**

I’ll tackle the biggest complaint I’ve seen: “It’s just a big iPod Touch!” At a first glance, this seems like an understandable assertion. Users don’t necessarily care about the internals, rightfully so, and as such a superficial analysis of what has been presented can be summarized as an iPod Touch in a 9.7” screen.  What you don’t notice, however, is that the underlying iPhone OS has been _neatly_ packaged as the perfect OS for a multitouch tablet.

Think about it for a minute – what would happen if Apple had chosen to go with Mac OS X on the iPad? OS X is _not_ designed as a touch oriented interface. Yes, it supports multitouch gestures through the use of the surfaces on the MacBooks and Magic Mouse, but you are not working _over_ the graphical interface. Doing so would bring up all the issues around this – the interface is obscured by the input device (a user’s fingers in this case), and in doing so, the accuracy is decreased (which is why Touch interfaces go for big interface elements that are easy to interact with).

That’s not to say that I would LOVE to be able to run my OS X apps on the iPad. I don’t want a desktop with a menubar and window management, but having the ability to launch OS X apps in a fullscreen frame would be really useful. Existing iPhone apps not converted for the iPad can be used in this fashion, but this is not as big as a problem as iPad applications are based on an expanded iPhone OS. However running the whole kernel and drivers of a full OS X install is not something that can be seamlessly integrated into the iPhone OS  – I bet engineers would rather prefer to run OS X fully as any other tablet does with Windows and Linux and <insert your favorite OS>.

So you want a touch oriented OS, and with that you will want a good library of touch oriented apps. With the App Store already clocking in at over 140,000 native apps, it is a no brainer that the iPad just _had_ to be able to run iPhone apps. This is why the iPad is running an improved iPhone OS and not OS X.

**Enough about the OS – where is the multitasking!?**

Ahh, multitasking. This subject is not so much about the iPad but about mobile devices in general. Multitasking on a mobile device is tricky – resources are scarce, and when combined with a phone, no application should ever keep the device from being able to make a call or receive one. You don’t want your phone to be crashing while trying to make an emergency call. I think this is the best way to argue against multitasking in the iPhone – as a new platform, and as much as people don’t like Apple’s babysitting, developers just couldn’t be given full access to multitask. The App Store would be full of such apps, and everybody’s iPhone (and by everybody, I mean casual users who know nothing about memory management and resource allocation) would be grinding to a halt as applications fight over which one gets to use the most CPU cycles. Truth is, most developers are not used to multithreading and making good use of a scheduler or thread pool.

By doing this, Apple has helped to foster a healthy application environment in the App Store.  Have you played around with a jailbroken iPhone with background applications enabled? Sure, done the right way, it is stable enough, but you’ll see many users talking about how the apps crash or don’t work correctly. And then they blame Apple for being unable to implement multitasking properly on the iPhone. News flash – Apple does multitasking quite well with the iPod app, it’s the specific app developers who are not making good use of multitasking. And why should they? It’s not officially supported by the SDK at this moment, so don’t blame them either.

_*Side note – you may think the iPod app is just playing background music, but iPhone developers who’ve worked with multimedia on the iPhone will appreciate the iPhone OS’s handling of audio profiles while running multiple apps._

This is not to say that Apple could have provided a good way to hook into multitasking properly on the SDK. In fact, I think this is the direction they are heading. Maybe it will be available in iPhone OS 4.0, maybe not. But I think we should have this conversation again when iPhone OS 4.0 is unveiled, as it seems like iPhone OS 3.2 SDK is just a preliminary release of OS 4.0 and a way of demoing the iPad without giving all the iPhone OS 4.0 secrets away.

So what about multitasking in the current iPhone OS 3.x environment? It works _quite well._ Apple encourages developers to be mindful of state in their applications. When the user hits that Home button, the application is sent a notification. The developer is encouraged to handle that notification and save the current state, so that it may be restored the next time the application is launched. _The best use of this functionality is beautifully demonstrated by Tweetie 2._ It doesn’t matter on which screen you are, if you quit Tweetie 2, you can be sure that you will get back to the screen the next time you launch it. Save for a few edge cases, anyway.

This is how Safari works, too. You don’t lose the website you were browsing when you hit the Home button, do you? The fact that only one application is visible at a time seems to throw most people off. Remember, iPhone OS 3.0 introduced Push Notifications. Used properly, you do not need any Twitter application to run in the background – better yet, a server is taking care of the load! Your iPhone is free to dedicate most of its resources to the application that you, as the user, have told it to be the focus of your attention.

Back to the iPad. The new iPhone OS 3.2 introduces popup notifications, which aside from being a good use of screen real estate (they convey detailed information, but easily dismiss by tapping anywhere else), I think popup notifications open the door to managed push notifications. A big gripe about push notifications is that many of them will arrive at once and it usually is a pain to go through all of them without losing some information. Popup notifications may actually be used to handle multiple simultaneous push notifications, but we may have to wait until further iPhone OS 3.2 SDK betas or 4.0 SDK are released.

**More inches is usually a good thing**

I just mentioned screen real estate. This is very, very important for iPhone developers turned into iPad developers. No longer are applications restricted to a small window of 320 pixels by 480 pixels. Now you have a big screen where lots of detailed data can be conveyed to the user. All the drill down table based views of the iPhone can now be replaced by split column views with popup notifications. I am really looking forward to how iPhone application designers will express their newfound freedom and creativity in this expanded screen.

One last thing about multitasking: a good example used in favor of multitasking is being able to listen to Pandora while working on other apps. I agree – I would love to use streaming services more, while using other applications, instead of just relying on streaming music applications just running full screen. Ah, but remember, Apple acquired Lala late last year. I am hoping that whatever Apple decides to do with Lala and its streaming music service, that it will be integrated into the iPod application, therefore allowing for streaming music while using other applications even without proper multitasking.

To finish off, another big gripe about the iPad has been the lack of Flash support. I think this issue is best left for a post of its own, as it is not specific to the iPad. I’d rather write about how Flash and HTML5 are being used and how it impacts all mobile devices, be them iPhone, Android or WebOS based, even when these mobile devices may support Flash eventually. I’ll write about this issue soon, I hope.

There’s a lot left to say about the iPad. Why not go at it in the comments?
