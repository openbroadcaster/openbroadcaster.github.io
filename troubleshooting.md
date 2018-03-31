---
layout: default
title: Troubleshooting
permalink: /Troubleshooting
---

* TOC
{:toc}

<a name="troubleshooting"></a>

## Troubleshooting Audio

### Test Signal 

Use the __test signal__ to confirm your audio setup is working correctly.

To test the __on-board__ sound card:

1. Disconnect USB adapter.
1. Connect headphones or studio monitor to 1/8" audio output.
1. On the [Outputs](#Outputs) Tab, Select __Audio Mode__ PULSE. Enable Test Signal.
1. On the [Sources](#Sources) Tab disable Audio In Source
1. Save changes & reboot the Player 
1. The Test Signal (440 Hz tone) should be audible.

To test an external __USB__ sound card:

1. Connect the USB adapter.
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

### Adjusting Audio Levels 

{:toc}

### Pulse Audio
{:.no_toc}

Pulse is the default and recommended audio to use with OBPlayer. __When audio mode settings are changed, reboot.__ Once rebooted, audio slider controls will be present in the dashboard under PULSE to set input and output levels. 

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

If Jack is already running, it will load the new configuration. Open the jack-mixer control from the Panel (bottom right of Desktop, icon to left of VLC). This will open a mixer control, with an input channel on the left and Main output channel is on the right. The sliding control for the input channel can be used to set the level for the line-in (input) signal. The control on the right has no effect on the output. 

If Jack is not running ensure it is configured in the Dashboard, and reboot the Player, and open the jack-mixer control.

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

