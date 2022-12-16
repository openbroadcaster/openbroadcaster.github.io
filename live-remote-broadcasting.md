---
layout: default
title: LIVE Remote Broadcasting
permalink: /remote-broadcasting
---

# LIVE Remote Broadcasting #
{:.no_toc}

* TOC
{:toc}

## Live Streaming from LIVE Assist Laptop

1. Install [OBPlayer](https://github.com/openbroadcaster/obplayer) on laptop and make sure dependencies are met

2. Open up Pulse Audio Advanced Mixer

3. Configure IceCast server to accept source from OBPlayer's streaming tab

4. Open Terminal, test and run command to start the Local Streamer application

~~~~
cd /opt/obplayer/tools

/opt/obplayer/tools/local_streamer --IP <IP-of_the_remote_obplayer> -h 
~~~~

Use with -h (Help) to list optional commands

## System Buttons
{:.no_toc}

`Local Streamer` is a RTP sender application. It sends audio packets over UDP from the laptop on which it is run to the player computer. Run the local streamer application and the pavucontrol program on the laptop from which you're sending. Clicking the start button on the local streamer, will add an entry on the Recording tab of the volume control. Select additional USB audio adaptors in `Pulse Audio volume control` **Configuration**.

## Launcher
{:.no_toc}

Right click on desktop to **Create Launcher** (shortcut named LIVE Mic) using this sample info below

![Local Streamer Launcher](/img/local_streamer_launcher.png ){: .screen shot} 

With the proper options set, this will create a floating window with **Start and Stop** buttons to turn on live streaming

## Using Live Streaming

Create and schedule a LA play list on server

Click `Streamer Launcher` button to begin Live streaming source material from your laptop

On the LA interface click **only** the `RTP` button on the live assist.   This will accept the incoming stream from laptop. A triangle > will appear next to the RTP button, count down timer will appear below and the VU meter in the lower *left* corner will show a signal levels present.

On the LA interface, From top right drop down menu, Select, Microphone, Monitor or currently playing material or Mic and Monitor so that you can talk over the media playing.

Connect\Disconnect buttons turn on\off the live mic\monitor.

You can now begin speaking into mic and set the level. You may also toggle MUTE.

When finished show, click Disconnect on LA and Stop on the floating window

<a class="top-link hide" href="#top">↑</a>
<a name="top"></a>
