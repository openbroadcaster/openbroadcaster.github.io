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

1. Use [UNETBOOTIN](https://unetbootin.github.io/) or similar utility to create a bootable USB drive (min. 4Gb) from the disk image. 
1. Insert the USB drive into the OBPlayer, and  power up the unit. The imaging process will start auotmatically. A progress bar will display. Be patient at 88% for a few minutes, it really is copying data. Observe activity on USB boot device.

1. When the process has completed, remove the USB drive and reboot.

<a name="rtl-sdr"></a>

### Monitoring FM Transmission

An inexpensive FM signal monitoring solution can be acheived using SDR (software defined radio) and a DVB-T USB Tuner based on the Realtek RTL2832U chip. Some [clever reverse-engineering](http://rtlsdr.org/#history_and_discovery_of_rtlsdr) exposed the capability of these dongles as FM receivers. 

The example below uses a software defined radio (SDR) receiver and a [NooElec NESDR Nano RTL2832U receiver](https://openbroadcaster.pro/catalog/hardware).

In order to use the USB DVB-T dongle, you first need to install the rtl-sdr software:

~~~~
sudo apt-get install rtl-sdr
~~~~

The dvb\_usb\_rtl28xxu driver (for enabling TV reception), distributed with newer version of linux, gets loaded by default. Therefore, the driver must be unloaded for SDR to work, each time the dongle is inserted.

~~~~
sudo rmmod dvb_usb_283xxu
~~~~ 

To prevent the default dvb_usb driver from being loaded on reboot, it can be blacklisted. Create the file (use sudo) in /etc/modprobe.d/blacklist-rtl.conf, add the following line :

~~~~
blacklist dvb_usb_rtl28xxu
~~~~

Now you can check if your USB device can be detected. Insert the USB dongle, and use the rtl command line utilities:

~~~~
rtl_test -t
~~~~

The FM reception may be streamed over TCP to allow remote monitoring of the broadcast signal, using the [rtl_tcp utility](http://sdr.osmocom.org/trac/wiki/rtl-sdr#Usage), where host_ip is the IP address of the host:

~~~~
rtl_tcp -a host_ip 
~~~~

For example _rtl\_tcp -a 10.0.0.106_

You should now be able to use SDR to remotely monitor the stream over the network, using gqrx for example.

~~~~
sudo apt-get install gqrx-sdr
~~~~

Launch the program with the command:

~~~~
gqrx
~~~~

The first window to appear is for configuring the input source and audio output. Set the Device option to 'Other' and type 'rtl_tcp=host_ip:1234' into the Device String (host_ip is the IP address used in the previous step).

Activate gqrx by clicking on the grey start/stop button just below the File menu. Noise should be heard from your speaker or head-phones, if not, check your audio volume control.

To tune the received frequency move the mouse pointer on any of the frequency digits and use the mouse wheel to change it. Alternatively you can move the pointer and click on the upper or lower part of any digit or use the Up/Down key to change it.
