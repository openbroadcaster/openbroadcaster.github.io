---
layout: default
title: advanced
---
Advanced Operations


* TOC
{:toc}


### CAP Alerts with Barix Exstreamer
OBPlayer will create an on demand ICEcast mount point when an alert cycle starts coming from studio with a Barix exstreamer receiver at transmitter. Exstreamer will switch to the generated alert mount point and switch back when it stops. There is a minor delay in the switching with Barix exstreamer. Set the first URL to the alert stream, and the second URL to the normal stream. In OBPlayer, set the lead-in delay to 1 second and the lead-out delay to 5 seconds. Catches the whole alert cycle without having too much delay before and after.  There is a setting on the audio/visual tab to disable the test signal. In order to make the priority streaming work, so that OBPlayer only outputs the alerts and nothing else, disable the scheduler, fallback player, audio in, and the test signal

### Reimaging the Player

To restore the original factory configuration, obtain the disk image for your Player from openbroadcaster.pro.

1. Use UNETBOOTIN or similar utility to create a bootable USB drive (min. 4Gb) from the disk image. 
1. Insert the USB drive into the OBPlayer, and  power up the unit. The imaging process will start auotmatically.
1. When the process has completed, remove the USB drive and reboot.



