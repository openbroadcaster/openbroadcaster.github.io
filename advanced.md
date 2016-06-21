---
layout: default
title: advanced
---
Advanced Operations


* TOC
{:toc}

### Audio Configurations

There are several ways to inject audio alerts into the broadcast chain. CAP-CP alerts may be issued
from the standalone alert player and put into the audio broadcast chain each with their own merits.
When an alert is received, audio is sent out for your systems to receive in several ways. Generally
there is no audio present unless a message is being issued; either a valid Pelmorex CAP message,
Pelmorex test message or when a internal test alert is issued

On Board Audio Out

• Onboard analog stereo 1/8” mini output using Realtek ALC888S codec.  Audio present only when a valid CAP message is being broadcast.

• GPIO trigger reverses DTR voltage on pin 4 using RS232 DB9 when CAP message is played.

• Silence Detection using external third party hardware used to sense audio coming out of the Alert Player and mechanically switch a relay on your board.

• Windows playout machine may use free Silence Detection software from [Pira CZ Silence Detector](http://pira.cz/show.asp?art=silence)  to switch broadcast audio source when CAP message is played.

### CAP Alerts with Barix Exstreamer
OBPlayer will create an on demand ICEcast mount point when an alert cycle starts coming from studio with a Barix exstreamer receiver at transmitter. Configure the streaming tab to create a mount point on local machine's icecast server. Exstreamer will switch to the generated alert mount point and switch back when it stops. There is a minor delay in the switching with Barix exstreamer. Set the first URL to the alert stream, and the second URL to the normal stream. In OBPlayer, set the lead-in delay to 1 second and the lead-out delay to 5 seconds. Catches the whole alert cycle without having too much delay before and after.  There is a setting on the audio/visual tab to disable the test signal. In order to make the priority streaming work, so that OBPlayer only outputs the alerts and nothing else, disable the scheduler, fallback player, audio in, and the test signal

### Reimaging the Player

To restore the original factory configuration, obtain the disk image for your Player from openbroadcaster.pro.

1. Use [UNETBOOTIN] (https://unetbootin.github.io/) or similar utility to create a bootable USB drive (min. 4Gb) from the disk image. 
1. Insert the USB drive into the OBPlayer, and  power up the unit. The imaging process will start auotmatically.
1. When the process has completed, remove the USB drive and reboot.



