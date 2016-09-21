---
layout: default
title: basics
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

## LIVE Assist

Mobile HTML5 Interface of OBPlayer

Accessed at IP and Port

	http://IP_of_the_OBPlayer_at_Studio:23456

### Screen Elements
{:.no_toc}

**Hot Buttons**

Created in Server as PL (consisting of media items to appear as buttons) and dragged to bottom of LA Play List. Each PL added creates a column of buttons in LA interface.

![Hot Buttons](/img/hot_buttons.png){: .screen shot} 

**Station Line In**

Grey system button (Top Right) Line In audio source is local input on the player computer at the studio. It is not a remote connection. In the case of station with a soundcard, the digital satellite feed goes into that input. Works in conjunction with **Line In** scheduling feature feature on the server, where you can schedule line in content such as mixing board or satellite receiver. This is the exact some input that's connected to the line in button on the live assist. 

**Remote RTP Incoming**

Grey system button (Top Right) Remote RTP when clicked allows playing of live streaming media. Use `local_streamer` tool to receive incoming streams from laptop in field. On remote laptop, audio is encoded from source material, either from local media or from captured LIVE material.

![System Buttons](/img/system_buttons.png){: .screen shot} 

### Live Streaming from LA Laptop
{:.no_toc}

1. Install [OBPlayer](https://github.com/openbroadcaster/obplayer) on laptop and make sure dependencies are met

2. Open up Pulse Audio Advanced Mixer

3. Configure IceCast server to accept source from OBPlayer's streaming tab

4. Open Terminal, test and run command to start the Local Streamer application

~~~~
cd /opt/obplayer/tools

/opt/obplayer/tools/local_streamer --IP <IP-of_the_remote_obplayer> -h 
~~~~

Use with -h (Help) to list optional commands

### System Buttons
{:.no_toc}

**Local Streamer** is a RTP sender application. It sends audio packets over UDP from the laptop on which it is run to the player computer. Run the local streamer application and the pavucontrol program on the laptop from which you're sending. Clicking the start button on the local streamer, will add an entry on the Recording tab of the volume control. Select additional USB audio adaptors in `Pulse Audio volume control` **Configuration**.

### Launcher
{:.no_toc}

Right click on desktop to **Create Launcher** (shortcut named LIVE Mic) using this sample info below

![Local Streamer Launcher](/img/local_streamer_launcher.png ){: .screen shot} 

With the proper options set, this will create a floating window with **Start and Stop** buttons to turn on live streaming

## Using Live Streaming

Create and schedule a LA play list on server

Click `Streamer Launcher` button to begin Live streaming source material from your laptop

On the LA interface click **only** the `RTP` button on the live assist.   This will accept the incoming stream from laptop. A triangle > will appear next to the RTP button, count down timer will appear below and the VU meter in the lower *left* corner will show a signal levels present.


## Future

On the LA interface, From top right drop down menu, Select, Microphone, Monitor or currently playing material or Mic and Monitor so that you can talk over the media playing.

Connect\Disconnect buttons turn on\off the live mic\monitor.

You can now begin speaking into mic and set the level. You may also toggle MUTE.

When finished show, click Disconnect on LA and Stop on the floating window 
