---
layout: default
title: gettingStarted
---

## Quick Start Guide
{:.no_toc}

* TOC
{:toc}

## BEFORE YOU BEGIN
{:toc}

#### 1. Connect the components
{:.no_toc}

* Setup the computer with a mouse, keyboard and monitor (HDMI or DSUB) and power.
* Plug in headphones or speakers to green audio output .
* Connect RJ45 to a network with a router handing out DHCP IP addresses.

#### 2. Boot the computer.
{:.no_toc}

#### 3. Change the default user password
{:.no_toc}

On the initial run of machines with pre-installed versions of OpenBroadcaster, the user must change the factory default password. Once the password has been set, the user account will login automatically. 

Enter the default password 'obsuser' (you will have to re-enter the password), followed by a new password (you will have to re-enter the new password). 

Passwords must be a minimum of 8 characters and contain at least two of the following character types:

   - Lowercase Alphabetical (a, b, c, etc.)
   - Uppercase Alphabetical (A, B, C, etc.)
   - Numerics (0, 1, 2, etc.)
   - Special Characters (@, %, !, etc.)



__If you forget or lose the password, you'll need to re-image the unit and start over. Be sure to record the password in a safe place.__ 


#  OpenBroadcaster Alert Player (Basic Setup)
{:toc}
 
_(Basic setup: Output Only)_

The __OpenBroadcaster Player__ is configured using a secure web browser Dashboard interface, available at [http://localhost:23233](http://localhost:23233). The default user/password is admin/admin. The admin and read-only user password settings may be changed on the HTTP(s) Dashboard tab.

Open the [Dashboard](#dash), set the Alerting locale, test audio output.

### Set Alerting Locale
{:toc}

1. Open [Dashboard](#dash) from desktop icon.
1. Ensure Emergency Alerts are enabled on the __Emergency Alerts__ tab.
1. Enter [SGC code(s)](/player.html#alerts) for your alerting locale as a comma separated. 
1. Save changes. Restart the Player (using the Restart button on the Dashboard). 
 
###  Test audio output
{:toc}
1. On the __Emergency Alerts__ tab, select one of the test alerts.
1. Click *Inject Alert* to place the Test Alert in a 20 sec countdown queue.
1. Monitor the log output and output metering on the __Status__ tab.
1. Audio output levels can be controlled using [alsamixer](#alsa).

__IMPORTANT NOTE: AUDIO IN is DISABLED in the Basic settings.__


### Headless Operation
{:toc}

To enable headless operation (i.e. no video output):
The hash symbol(#) is used to denote a comment or disable a command. Removing the hashtag enables a command. 

NOTE: `sudo` requires confirmation of your user password. 

obsuser:~$ `sudo nano /etc/default/grub`

~~~~
#Disable the next line for Headless operation
#GRUB_CMDLINE_LINUX_DEFAULT="quiet splash" 

#Enable next line for Headless operation
GRUB_CMDLINE_LINUX_DEFAULT="quiet text" 

#Enable next line for Headless operation
GRUB_TERMINAL=console 
~~~~

__!IMPORTANT!__ After changing grub config, you MUST run `sudo update-grub` to apply the changes.
The computer should now boot successfully without a monitor attached. To control output, SSH to the computer (ssh obsuser@ip_address) and run [alsamixer](#alsa) at the command line.

#  OpenBroadcaster Alert Player (Advanced Setup)

Tabs on the web page group the available options. If changes are made on any Tab, save them before moving to another Tab or Restarting the Player. Some configuration changes require a reboot (e.g. when changing audio modes that make use of external adapters).

### __Admin Tab__
The __Admin__ Tab is visible to the Admin user only. 

This Tab controls visibility of Tabs for Read Only user access.

The local scheduling and media database may be deleted to allow the Player to re-sync with an [Openbroadcaster Server](/server). Configuration settings may be exported for backup or diagnostics. A saved settings file may be imported to restore a previous configuration. 
<a name="sync"></a>

### __Sync/Media Tab__
Media sync requires a valid Device ID, password and sync URL for an [OpenBroadcaster Server](/server) instance on the __Admin__ Tab. The *Sync URL* should be in the format `http://server_ip_address/remote.php` or `https://server_ip_address/remote.php`.

<a name="alerts"></a>

### __Emergency Alerts Tab__
*Enable Emergency Alerts* to receive and broadcast Alert Messages.

#### Location Geocode
{:.no_toc}
 Alerting Districts are defined by a [Standard Geographical Classification](http://www.statcan.gc.ca/eng/subjects/standard/sgc/2011/index). A web search for 'SGC code my_place_name' should reveal the codes for the desired district. The SGC may be as broad as a province, or a specific as a hamlet. If more than one region is part of the broadcast area, enter the SGC codes as a comma separated list. For example, all of Yukon Territory may be identified by SGC "60", while the village of Tagish(Yukon) is identified by SGC “6001036”.  Alerts will be filtered to include only those match, contain, or are contained by the set Alerting District. 

The status log will indicate status of connection to the NAAD server(s). Viewing the debug log will show messages being received, but only those matching the SGC filters will actually be played.

#### Language Options
{:.no_toc}
Text-To-Speech (TTS) conversion uses the eSpeak engine and a selection of mbrola voice synthesizers. Choose from available language and voice for both primary and secondary voices.

#### Message Options
{:.no_toc}
Alert Messages will continue to play at the Alert Repeat Interval until the Expiry time for each message has passed, unless a specific repeat value is set. Playback of messages can be adjusted to include only the introductory sentences, by using the setting to truncate long alert messages. Only those messages with a Broadcast Immediate flag will be played, unless the *Play Moderately Severe Alerts* setting is enabled.

<a name="gpio"></a>

#### Advanced Settings
{:.no_toc}
A GPIO Trigger may be used to issue a DTR serial signal upon commencement of CAP-CP Alerts. When enabled and a matching CAP-CP message is broadcast, an alert cycle starts, the serial port will be opened and the DTR control signal (positive pin voltage) will be transmitted. After the alert cycle has completed, the DTR signal will drop (negative pin voltage). Lead-in Delay timings may be adjusted to prevent 'clipping' of messages. 

### Testing the Alert Message
{:.no_toc}
To test Emergency Alerting output, select one of the four sample messages (each one tests a valid CAP message format):

1. Simple Test. Generates an internal CAP-CP formated message and plays using TTS
1. Embedded Audio Test. Generates an internal CAP-CP message and plays a supplied MP3 file instead of TTS.
1. External Audio Test. Generates an internal CAP-CP alert message, fetches and plays a test MP3 file from Pelmorex.
1. Embedded Audio and Image Test. Generates an internal CAP-CP test the displays a JPG image and plays audio recording. Requires 'Moderately Severe Alerts' to be enabled.

_NOTE English and French are presently the only supported language for on board testing with Audio and Visual alerting_ 

`Inject` the alert. A Test Alert message will be added to the Active Alert message queue, and a 20 sec. countdown begins to broadcast. Any other incoming message will reset the countdown timer. Once the countdwon reaches 0 secs, queued messages will play through the active audio output.


<a name="audio"></a>

### __Audio/Visualization Tab__

The Alerting Player comes setup for using Jack Audio, with or without a USB to XLR adapter. In the default configuration, the Alert Player can function out-of-the-box as either a headless unit or with a graphic user interface (GUI desktop). Generating a test signal and testing alert messages is recommended to confirm output levels.


<a name="modes"></a>

#### Setting audio modes
{:.no_toc}
From the Audio/Visualization tab on the Dashboard, select the desired audio mode. 

The 'Enable Audio In Source' allows the Player to pass audio from an external source, while allowing interruption of the source to inject Alert Messages as necessary. Note that  __USB2XLR__ adapters are designed to handle input of __-10dBV__. When passing source signals of __+4dBu__ through the adapter,  ~15 db of attentuation should be applied to input signal upstream of the XLR adapter.

<a name="alsa"></a>

__ALSAmixer__ is the default tool for adjustment of input and output levels. To launch the ALSA mixer control, type 'alsamixer' at a command line (using ssh to login, for example), or click the icon on the Panel on lower right of the Player Desktop (hover over icons to the far left of clock). __ALSAmixer__ may also be used in a text console.

    # ALSA Mixer controls
    F6 - select the desired sound card from the available sound cards
    Left-right cursor keys - select the desired control
    up-down cursor keys - adjust the level
    'm' - toggle mute for the selected control
    'esc' - close the control window. 


The following sections describe additional configuration steps for Jack Audio or PulseAudio modes. 


<a name="jack"></a>

##### __Jack Audio Connection Kit__
{:.no_toc}
The default sound processor, with [Alsamixer](#alsa) as the default output control. To control input level with Jack, it is necessary to include a jack_mixer in the jack.plumbing configuration.

First, rename the default configuration file:

<<<<<<< HEAD
`obsuser:~$ sudo mv /etc/jack.plumbing /etc/jack.default`
=======
obsuser:~$ `sudo mv /etc/jack.plumbing /etc/jack.plumbing.def` # Note: You will be prompted to confirm your user password
>>>>>>> 1ad2db1ec56c40a6c9b97ecb5515cce47bfe6fab

Then, create a new configuration file in the home directory:

`obsuser:~$ nano ~/.jack.plumbing`

~~~~
#connect Audio Inputs to OpenBroadcaster Inputs
(connect "system:capture_1" "openbroadcasterin:in_audiosrc_1")
(connect "system:capture_2" "openbroadcasterin:in_audiosrc_2")

#Connect Openbroadcaster Outputs to Audio Outputs
(connect "openbroadcasterout:out_audiosink_1" "jack_mixer:OB_In L")
(connect "openbroadcasterout:out_audiosink_2" "jack_mixer:OB_In R")
(disconnect "openbroadcasterout:out_audiosink_1" "system:playback_1")
(disconnect "openbroadcasterout:out_audiosink_2" "system:playback_2")
(connect "jack_mixer:OB_In Out L" "system:playback_1")
(connect "jack_mixer:OB_In Out R" "system:playback_2")
~~~~

__NB:__ *When using jack mixer, the jack_mixer control must be opened manually from the Panel Icon to activate the control. Once the control is closed, it no longer has any effect on the audio signal. The control must be visible and indicating signal bars if signal is to be audible.*

To restore `Jack`, disable [PulseAudio](#pulse):
 
`obsuser:~$ nano ~/.pulse/client.conf `

~~~~
#to disable PulseAudio:
    autospawn = no
    daemon-binary = /usr/bin/true
~~~~

Then, open the Dashboard and on the Audio/Visualization tab, select `Jack` as the audio output and input modes, naming them openbroadcasterout and openbroadcasterin respectively. Save the change. If using the USB2XLR adapter, ensure it is connected to the Player. Reboot. Use alsamixer to adjust levels as required.


<a name="pulse"></a>

##### __PulseAudio__ 
{:.no_toc}
requires editing of the PulseAudio configuration file `~/.pulse/client.conf` to enable use of PulseAudio Volume controls (see Multimedia menu). If using the USB2XLR adapter, ensure it is connected to the Player. Then, on the configuration tab of the PulseAudio Volume Control, enable the PCM2902 Audio Codec Analog input/digital output mode and disable the built-in audio. Adjut input/output levels and signal latency as required.

__NB: Reduce input by -10db, and Adjust the Latency (Advanced) to +60ms. Set output gain to 0db. Set playback gain to 0db.__

`obsuser:~$ nano ~/.pulse/client.conf `

~~~~
#to enable PulseAudio:
    autospawn = yes
    daemon-binary = /usr/bin/pulseaudio
~~~~



