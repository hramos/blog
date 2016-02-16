--- 
name: quick-tip-security-policy-error-during
layout: post.html
title: "QUICK TIP: Security Policy Error During Deployment"
time: 2009-09-30 19:23:00 -04:00
comments: true
---
Today I ran into a problem when I tried to deploy my code to my iPhone. I saw the following cryptic message:

> Error launching remote program: security policy error.  
> The program being debugged is not being run.

The problem usually shows up for jailbroken devices, but mine is not jailbroken. I solved this problem by deleting all of my expired provisioning profiles. Seems like 3.0 has a problem using the correct profile, and if any expired profile is present it won’t allow for deployment.

Now I am having problems deploying to my 3.0.1 iPhone after downgrading from 3.1b5\. I had used the symlink Xcode trick, but now it doesn’t work, even after removing the symlink. Any one in my same position?
