---
layout: default
title: Basics
permalink: /Basics
---

Initial Setup

* TOC
{:toc}

<a name="basics"></a>

## Provisioning Server

Upload and add sample media. 

__New Play List__ will create a Play List. Call it DPL (Default Play List). Drag media items from sidebar to the new Play List. Save.

Create a new player from __Admin>Player Manager__. Enter in everything but leave IP blank. Save. Take note of the newly created Player ID.
 
Drag DPL into the newly created player. Save. It will use this in a loop in the event that nothing is scheduled (for initial testing).  When the remote player connects, you will see the times for media and schedules.

Once testing is complete with DPL, schedule PlayLists and Media.

![Server Setup](/img/provisioning_player.png ){: .screen shot}

## Provisioning Player

Go into player dashboard, __Sync Tab__.

Enter in the device ID and the password you set for this player in New Player.

For the sync URL field

~~~~
http://IP_OF_YOUR_SERVER/remote.php
~~~~

Use Remote mode for testing. Save.
 
Restart Player app. Dashboard will take you back to Status page.

- Blue sync Message
- Gold for warnings
- Green connection messages
- Magenta connecting to NAAD Alerts feed and when playing an alert
- Orange while downloading media 

Finally observe **now playing** message of current media item. 

You will be able to hear audio coming out of Pulse Audio (used as default)

![Start up Messages](/img/startup_messages.png ){: .screen shot}

## Drupal Radio Modules

There are 3 [modules available](https://github.com/openbroadcaster/DrupalRadio) for Drupal 7 CMS.


**API Bridge** - Takes info from the backend of an OBServer and presents this for display on a front end Drupal site.  Includes information that can be placed in a block; What's playing, What played the last 24 hours and What has recently been uploaded.

![API Module](/img/OB_API_Module.png ){: .screen shot} 


**Media Player** - Provides a HTML5 embedded streaming player that plays the stream of your station without needing any additional plugins.  It displays current Name of show, Artist and song title.

![Streaming Module](/img/OB_Streaming_Module.png ){: .screen shot} 


**Schedule** - Automatically updates the OBServer schedule information, links to DJ profile and associates show graphic.

![Installed Modules](/img/OB_Modules_Installed.png ){: .screen shot}

**Media** (under development) - Provides a download link for Podcast assembler media items.
