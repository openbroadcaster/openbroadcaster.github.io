---
layout: default
title: basics
---

Initial Setup

* TOC
{:toc}

<a name="basics"></a>

### Provisioning Server

Upload and add sample media. 

__New Play List__ will create a Play List. Call it DPL (Default Play List). Drag media items from sidebar to the new Play List. Save.  

Create a new player from __Admin>Player Manager__. Enter in everything but leave IP blank. Save. Take note of the newly created Player ID.
 
Drag DPL into the newly created player. Save. It will use this in a loop in the event that nothing is scheduled (for initial testing).  When the remote player connects, you will see the times for media and schedules.

Once testing is complete with DPL, schedule PlayLists and Media.

![Server Setup](/img/provisioning_player.png ){: .screenshot}

### Provisioning Player

Go into player dashboard, __Sync Tab__.

Enter in the device ID and the password you set for this player in New Player.

For the sync URL,  [http://IP_OF_YOUR_SERVER/remote.php]

Use Remote mode for testing. Save.
 
Restart Player app. Dashboard will take you back to Status page. Observe Green connection messages, Magenta connecting to NAAD Alerts feed and when playing an alert, Gold for warnings and Orange while downloading media and a now playing message of current media item. 

You will be able to hear audio coming out of Pulse Audio (used as default)

![Startup Messages](/img/startup_messages.png ){: .screenshot}


