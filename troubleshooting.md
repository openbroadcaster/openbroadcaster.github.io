---
layout: default
title: Troubleshooting
permalink: /Troubleshooting
---

* TOC
{:toc}

<a name="troubleshooting"></a>

## Post Installation Server Troubleshooting ##

After install, log in as user with Admin privileges and Run updates.

~~~~
    http://Your_Server_IP/updates 
~~~~

Fix for OB Sites in config by adding a FQDN (Fully Qualified Domain Name) 

~~~~
    nano /etc/hosts 
~~~~

"This file format is not supported" and "Cannot upload media"

~~~~
    ln -s /usr/bin/ffmpeg /usr/local/bin/avconv

    ln -s /usr/bin/ffprobe /usr/local/bin/avprobe
~~~~

## Player Start Up

### Networking

On headless machines the Player is accessed from a web dasboard accecible from another machine on the same network from an IP address that is issued with DHCP.  To determine the local IP of Player from terminal issue "ip addr show"  Your IP will appear like 192.168.1.100.  127.0.0.1 is a local loop back IP. You might also get into your router and look at the DHCP Client list and see the players IP that way.  Recomended that Players be setup with a static IP address as DHCP can often change.

From a web browser type 

~~~~
http://ip-of-server:23233
~~~~

a login window will prompt for user and password. If there is a timeout and/or network unreachable message try these steps to resolve.

__Networking Tests__

From __Terminal__ Ping "localhost" replies indicate internal networking working

From __Terminal__ Ping "IP-of_Router/Gateway" replies indicate networking working to router.

From __Terminal__ Ping "IP-of-Other-Device-on-Network" replies indicate Player and router are able to communicate to other Devices.

From __Terminal__ Ping "google.com" replies indicate network is able to communicate through router to the real world internet.

### Checking Player is running

If you are unable to access the player dashboard, do not have local access or running in a virtual service, you'll want to verify the Player appears as a process.

From __Terminal__ 

~~~~
ps -ef | grep python
~~~~

Lists all Python process including the obplayer.  If this is not showing then obplayer is not running.

![ PS FAX Python Screenshot](/img/ps-fax-python.png ){: .psfax-python}

To check all running processes, including obplayer and Icecast 

~~~~
ps fax
~~~~ 

In this example both obplayer and Icecast are highlighted

![ PS FAX Screenshot](/img/ps-fax.png ){: .psfax}

### Sync

Ensure the player device is able to access the internet Terminal "ping google.com" and can reach the management server as specified in sync settings under the Sync tab. The format can be "localhost/remote.php", "127.0.0.1/remote.php" or http(s)://IP-of-Server/remote.php" Do not forget to include the trailing /remote.php.

Check the sync url exisits by pasting into browser and you should see the 

![ Sync Connect Screenshot](/img/sync-connect.png ){: .sync-connect}

Confirm/Re-enter passwords and Device to match player in Player Manager in Server 

Restart DB and Reset from Admin Tab.  Forces a reset of media sync.

## __Backend Troubleshooting__

Files containing user and machine settings are located in the .openbroadcaster folder within the users home directory. The __Admin Tab__ provides utilities for backup and restoration of user settings.

The __data.db__ contains a copy of media scheduled for the period identified by the sync buffer (default 24 hours). `Delete data.db and Restart` to purge the Player and force a refresh of the database, schedules and media according to the current sync settings. Useful when changing backend services.

__settings.db__ contain the player settings in an sqlite db.  

### Resetting Lost or Admin Password

To reset admin or lost passwords may be recovered by editing the sqlite DB file  __settings.db__  or simply deleting it and restarting obplayer.  On restart obplayer will recreate this DB with default values.

### Command Line Interface

Open local `Terminal` or ssh into target machine. Cd to dir where player files are /usr/share/obplayer

__Do not run as root or Sudo__

Script bash "obplayer_check" starts the player and checks for existing instances and not start if already running

Script bash "obplayer_loop" runs in an infinite loop to restart in case it unexpectedly terminates (crashes) or is shutdown via the web dashboard

Add these switches for extra functionality

obplayer -d prints log messages to stdout console

obplayer -f or obplayer--fullscreen on startup. obplayer_loop -f also works.

obplayer -H starts headless, no desktop GUI (audio only)

obplayer -m starts screen minimized

obplayer -r restarts fresh, clearing out Playlist\Schedule\Media cache and priority broadcast databases

obplayer  -c CONFIGDIR, --configdir Specifies an alternate data directory (default: ['~/.openbroadcaster'])

obplayer -- disable-updater   Disables the OS updater

obplayer -- disable-http  Disables the http admin dashboard

## Audio

### Test Signal 

Use the __test signal__ to confirm your audio setup is working correctly.

To test the __on-board__ sound card:

1. Disconnect any USB adapter.
1. Connect headphones or studio monitor to 1/8" audio output.
1. On the [Outputs](#Outputs) Tab, Select __Audio Mode__ PULSE. Enable Test Signal.
1. On the [Sources](#Sources) Tab disable Audio In Source
1. Save changes & reboot the Player 
1. The Test Signal (440 Hz tone) should be audible.

To test an external __USB__ sound card:

1. Connect any USB adapter.
1. Connect the XLR outputs to sound board, amp or studio monitors.
1. On the [Outputs](#Outputs) Tab, Select __Audio Mode__ PULSE. Enable Test Signal.
1. On the [Sources](#Sources) Tab disable Audio In Source
1. Save changes & reboot the Player 
1. The Test Signal (440 Hz tone) should be audible. 

If <span style="color: darkred">no audio output</span> is produced, check the Status page for errors in the log and observe VU meter for activity:

1. Be sure mode is properly configured.
1. There are `gstreamer` errors indicating problems with audio mode settings. 
1. Adjust slider control or adjust from CLI `pulsemixer`
1. No PulseAudio Sources Present in dashboard press F5 to refresh browser.

Disable the test signal once audio setup is working. Enable __Audio In Source__, if necessary.

<br /><a name="mixer"></a>

## __Advanced Topics__
{:.toc}

### __Audio Settings__
{:.toc}

<a name="pulse"></a>

Pulse](#pulse) is the default tool for adjustment of output levels for all installed sound cards in Ver 5.X Series players. [Pulse](#pulse) and [JACK](#jack) are both supported audio modes, either will produce sound quality suitable for broadcast.

Setting __Audio Mode__ to Pulse and restarting will bring up a slider control to set levels for both input and output in dashboard to control signal levels 

### Adjusting Audio Levels 

{:toc}

### Pulse Audio
{:.no_toc}

Pulse is the default and recommended audio to use with OBPlayer. When audio mode settings are changed, __Reboot.__ Once rebooted, audio slider controls will be present in the dashboard under PULSE to set input and output levels. 

* On the __Outputs__ Tab, set audio output mode to PULSE. Disable the *Test Signal*   From __Sources__Tab enable the __Audio In Source__ setting audio mode to PULSE.

* If using the GPIO switching Relay, connect a serial cable from the Player to the Switching Relay. On the Emergency Alerts tab, under Advanced Settings, enable the RS-232 DTR Alert signal. The RS-232 Device Filename should be set to the serial port (/dev/ttyS0 for Port 1, /dev/ttyS1 for Port 2).

![ Input Source](img/input_source.png ){: .Input}

#### Jack Audio
{:.no_toc}

There are no input level GUI controls "out-of-the-box" with Jack audio, so if further control over the input level is desired, the configuration must be updated to include jack-mixer. Using jack-mixer programs requires a modified __jack.plumbing__ configuration with connections defined between the openbroadcaster ports, the jack-mixer control and system output. 

- If using Jack, check that the file `~/.jack.plumbing` ( or `/etc/jack.plumbing`) contains the correct connection definitions.
- If using Pulse, check the file `~/.pulse/client.conf` is set to enable Pulse to autospawn.
Create a new configuration file called .jack.plumbing in the home directory (make sure it has the preceeding dot). This will override the system defaults.

~~~~
obsuser@obsource:~$ `nano ~/.jack.plumbing`
#connect Audio Inputs to OpenBroadcaster Inputs
(connect "system:capture_1" "openbroadcasterin:in_audiosrc_1")
(connect "system:capture_2" "openbroadcasterin:in_audiosrc_2")

#Connect Openbroadcaster Outputs to Audio Outputs
(disconnect "openbroadcasterout:out_audiosink_1" "system:playback_1")
(disconnect "openbroadcasterout:out_audiosink_2" "system:playback_2")
(connect "openbroadcasterout:out_audiosink_1" "jack_mixer:OB_In L")
(connect "openbroadcasterout:out_audiosink_2" "jack_mixer:OB_In R")
(connect "jack_mixer:OB_In Out L" "system:playback_1")
(connect "jack_mixer:OB_In Out R" "system:playback_2")
~~~~

![ JackMixer Screenshot](/img/jack.png ){: .jack}

If Jack is already running, it will load the new configuration. Open the jack-mixer this will open a mixer control, with an input channel on the left and Main output channel is on the right. The sliding control for the input channel can be used to set the level for the line-in (input) signal. 

If Jack is not running ensure it is configured in the Dashboard, and reboot the Player, and open the jack-mixer control from desktop.

__NB:__ When using jack mixer, the jack-mixer control must be opened manually from the Panel Icon to activate the control. Once the control is closed, the output will stop playing. The control must be visible and indicating signal bars for output signal to be audible. The mixer control must be reopened after a reboot, or no sound will be produced. 

<br/>
To open the jack mixer control in headless mode), use the command:

 `jack_mixer -c ~/.openbroadcaster/init_mix_vol --no-lash`.

 __To restore the original configuration of jack.plumbing, without the jack-mixer control, edit ~/.jack.plumbing file to define the following connections:__

~~~~
   #obsuser@obsource:~$ nano ~/.jack.plumbing

   #connect Audio Inputs to OpenBroadcaster Inputs
   (connect "system:capture_1" "openbroadcasterin:in_audiosrc_1")
   (connect "system:capture_2" "openbroadcasterin:in_audiosrc_2")
   
   #Connect Openbroadcaster Outputs to Audio Outputs
   (connect "openbroadcasterout:out_audiosink_1" "system:playback_1")
   (connect "openbroadcasterout:out_audiosink_2" "system:playback_2")

~~~~

## Video

Select video system in drop down menu in >Video>Sources.  Restart service.   When the new video system is enabled, it will automatically detect the video capabilities of the onboard detected video processing.

## Reimaging the Player/Server

To restore the original factory configuration, obtain the disk image for your Player/Server from your [OpenBroadcaster Downloads] (https://openbroadcaster.com/user-downloads) user account.

1. Use [Etcher](https://www.balena.io/etcher/) or similar utility to create a bootable USB drive (min. 4Gb) from the disk image.

1. Insert the USB drive into the OBPlayer, and  power up the unit. The imaging process will start auotmatically. A progress bar will display. Be patient at 88% for a few minutes, it really is copying data. Observe activity on USB boot device.

1. When the process has completed, remove the USB drive and reboot.
