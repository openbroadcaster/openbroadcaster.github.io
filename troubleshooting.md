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

1. Disconnect USB adapter. Reboot.
1. Connect headphones or studio monitor to 1/8" audio output.
1. On the [Audio Visualization](#audio) Tab, disable Audio In Source. Enable Test Signal.
1. Save changes & restart the Player (using the Restart button on the __Dashboard__).
1. The Test Signal (440 Hz tone) should be audible.

To test an external __USB__ sound card:

1. Connect the USB adapter. Reboot.
1. Connect the XLR outputs to sound board, amp or studio monitors.
1. On the [Audio Visualization](#audio) Tab, disable Audio In Source. Enable Test Signal.
1. Save changes & restart the Player (using the Restart button on the __Dashboard__).
1. The Test Signal (440 Hz tone) should be audible. 

If <span style="color: darkred">no audio output</span> is produced, check the Status page for errors in the log:

1. There are no errors.
- Check to see if __PCM__ output has been muted. Use the [Alsa Mixer](/Player#alsa).
- If jack.plumbing has been configured to use jack-mixer, the [Jack Mixer](#mixer) control must be open. 
1. There are `gstreamer` errors indicating problems with audio mode settings. 
-  Be sure mode is properly configured.
- If using Jack, check that the file `~/.jack.plumbing` ( or `/etc/jack.plumbing`) contains the correct connection definitions.
- If using Pulse, check the file `~/.pulse/client.conf` is set to enable Pulse to autospawn.

Disable the test signal once audio setup is working. Enable __Audio In Source__, if necessary.

<br /><a name="mixer"></a>

### Adjusting Audio Level 
{:toc}

#### Jack Audio
{:.no_toc}

There are no input level controls "out-of-the-box" with Jack audio, so if further control over the input level is desired, the configuration must be updated to include jack-mixer. Using jack-mixer programs requires a modified __jack.plumbing__ configuration with connections defined between the openbroadcaster ports, the jack-mixer control and system output. 

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

## Workbench

<a name="workbench"></a>


### DIY Attenuation

'H' or 'T' pads may also be fabricated to accomplish the same level of attenuation.For a balanced signal, use an H-Pad: input\_impedance=30k &Omega;, output\_impedance=10k &Omega;. The example below provides approximately -20dB of attenuation using resistors R 1/2= 12k &Omega;; R 2=3.3k &Omega;; R 3/2=3.3k &Omega; (ground wires should also be connected).
 
![ H Pad](/img/hpad.png ){: .hpad}



