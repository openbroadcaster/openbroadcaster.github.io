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
* Plug in headphones or speakers to green audio output.
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

<a name="basic"></a>

#  OpenBroadcaster Alert Player (Basic Setup)
{:toc}
 
_(Basic setup: Output Only)_

<a name="dash"></a>

The OpenBroadcaster Player is configured using a secure web browser __Dashboard__ interface, available at [http://localhost:23233](http://localhost:23233). The default user/password is admin/admin. The admin and read-only user password settings may be set on the __HTTP(s)__ Tab. Be sure to __Save__ any changes on each Tab before restarting.

Open the __Dashboard__ to set the alerting locale, test audio output and generate a test Alert. Once you have confirmed proper functioning of the Alert Player, proceed to the [Advanced Setup](#advanced).

![ Dashboard Screenshot](/img/dashboard.png ){: .screenshot}

### Set Alerting Locale
{:toc}

1. Ensure Emergency Alerts are enabled on the [Emergency Alerts](#alerts) Tab.
1. Enter the [SGC code(s)](#sgc) for your alerting locale. 
1. The default setting will convert the headline and first sentence of a broadcst intrusive Alert message to audio using TTS(text-to-speech). To have the entire message converted, disable the *Truncate Long Alert Messages* setting on the __Emergency Alerts__ Tab. Use the *Play Moderately Severe Alerts* setting to enable non-broadcast intrusive alert messages, if desired.
1. The default setting will continue to broadcast Alert messages at the *Alert Repeat Interval* until the Alert's expiry time is reached. To limit the number of repeats of an Alert message, change this setting.

### Test Audio Output
{:toc}
Audio output will be directed through the onboard sound card to the stereo 1/8" mini output, unless the [USB XLR Adapter](#adapter) is connected. To confirm your audio setup is working correctly:

1. On the [Audio Visualization](#audio) Tab, enable Test Signal.
1. The *Enable Source In* and *Enable LED Sign* settings should be disabled. 
1. Save changes. Restart the Player (using the Restart button on the __Dashboard__).
1. The Test Signal (440 Hz tone) should be audible via the green line out connection.
1. Once audio output has been confirmed, disable the Test Signal. Save Change and Restart.
 
###  Generate Test Alert
{:toc}

To confirm that Alert messages are working correctly, select one of the four sample messages (each one tests a valid CAP message format):

1. Simple Test. Generates an internal CAP-CP formated message and plays using TTS
1. Embedded Audio Test. Generates an internal CAP-CP message and plays a supplied MP3 file instead of TTS.
1. External Audio Test. Generates an internal CAP-CP alert message, fetches and plays a test MP3 file from Pelmorex.
1. Embedded Audio and Image Test. Generates an internal CAP-CP test the displays a JPG image and plays audio recording. Requires 'Moderately Severe Alerts' to be enabled.

_NOTE English and French are presently the only supported language for on board testing with Audio and Visual alerting_ 

`Inject` the alert. A Test Alert message will be added to the Active Alert message queue, and a 20 sec. countdown begins to broadcast. Any other incoming message will reset the countdown timer. Once the countdown reaches 0 secs, queued messages will play through the active audio output.

<a name="advanced"></a>

#  OpenBroadcaster Alert Player (Advanced Setup)

Tabs on the Dashboard  provide access to the configuration settings. Be sure to __Save__ any changes on each Tab before restarting. Some configuration changes require a reboot (e.g. when changing audio modes that make use of external adapters).

<a name="status"></a>

### __Status and Summary Tabs__

The __Status__ Tab displays information for the current state of the Player. If audio signal is present, a  signal level indicator will respond to output from both audio channels. All system operations are displayed on the Log displayed on the __Status__ Tab. Messages in green text denote normal system operations. Messages displayed in red text denote playout of active alerts. Systems error messages (e.g. network failure, broken audio links) are also diplayed in red. More detailed logging may be displayed by viewing the Debug log. The Debug log displays all CAP alert messages received by the Alert Player, before local filters have been applied.

The __Summary__ Tab displays all current configuration settings. The current settings may be exported from the __Admin__ Tab.

### __Admin Tab__

The __Admin__ Tab is visible to the Admin user only. This Tab controls visibility of Tabs for Read Only user access.

Device ID, password and Sync URL settings are used for installations that link the Player to a OpenBroadcaster Duo media management server. The *Sync URL* should be in the format `http://server_ip_address/remote.php` or `https://server_ip_address/remote.php`. These settings are ignored if Sync/Media settings are disabled.

Configuration settings may be exported for backup or diagnostics. A saved settings file may also be imported to restore a previous configuration. 

<a name="sync"></a>

### __Sync/Media Tab__
The __Sync/Media__ Tab is not enabled in the default configuration. Media sync requires a valid Device ID, password and sync URL for an [OpenBroadcaster Server](/server) instance on the __Admin__ Tab. 

<a name="stream"></a>

### __Streaming Tab__
The __Streaming__ Tab is not enabled in the default configuration. Settings correspond to local Icecast configuration, and should only be changed if the network and Icecast are configured accordingly.

<a name="map"></a>

### __Location Map Tab__
The __Location Map__ Tab is not enabled in the default configuration. The Location Map may be used to establish geopgraphic coordinates for an installation. Coordinates are reported back to an Openbroadcster Duo server, if Sync is enabled.

<a name="alerts"></a>

### __Emergency Alerts Tab__
The *Enable Emergency Alerts* setting enables the Player to receive and broadcast Alert Messages. Please refer to the National Public Alerting System [Common Look and Feel Guidleines](https://alerts.pelmorex.com/download/public/NPAS%20CLF%20Guidance%201.0%20-%20April%2024,%202013.pdf) for more detail on specifications and recommended practices relating to public alerts.

<a name="sgc"></a>

#### Location Geocode
{:.no_toc}

 Alerting Districts are defined by a [Standard Geographical Classification](http://www.statcan.gc.ca/eng/subjects/standard/sgc/2011/index). A web search for 'SGC code my_place_name' should reveal the codes for the desired district. The SGC may be as broad as a province, or a specific as a hamlet. If more than one region is part of the broadcast area, enter the SGC codes as a comma separated list. For example, all of Yukon Territory may be identified by SGC "60", while the village of Tagish(Yukon) is identified by SGC “6001036”.  Alerts will be filtered to include only those that match, contain, or are contained by the set Alerting District. 

The status log will indicate status of connection to the NAAD server(s). Viewing the debug log will show messages being received, but only those matching the SGC filters will actually be played.

#### Language Options
{:.no_toc}
Text-To-Speech (TTS) conversion uses the eSpeak engine and a selection of mbrola voice synthesizers. Choose from available language and voice for both primary and secondary voices.

#### Message Options
{:.no_toc}
Alert Messages will continue to play at the Alert Repeat Interval until the Expiry time for each message has passed, unless a specific repeat value is set. Playback of messages can be adjusted to include only the introductory sentences, by using the setting to truncate long alert messages. Only those messages with a Broadcast Immediate flag will be played, unless the *Play Moderately Severe Alerts* setting is enabled.

<a name="gpio"></a>

#### GPIO Settings
{:.no_toc}
Expand the Advanced Settings to modify. A GPIO Trigger may be used to issue a DTR serial signal upon commencement of CAP-CP Alerts. When enabled and a matching CAP-CP message is broadcast, an alert cycle starts, the serial port will be opened and the DTR control signal (positive pin voltage) will be transmitted. After the alert cycle has completed, the DTR signal will drop (negative pin voltage). Lead-in Delay timings may be adjusted to prevent 'clipping' of messages. URL's of the NAAD servers should not be changed.

<a name="audio"></a>

### __Audio/Visualization Tab__

The 'Enable Audio In Source' allows the Player to pass audio from an external source through the audio output, while allowing interruption of the source to inject Alert Messages as necessary. The *Enable Audio In* setting is disabled in the default configuration. To use the Player to pass audio from a Line In source, please refer to the [USB-XLR Adapter](#adapter) section.

<a name="modes"></a>

#### Changing audio modes
{:.no_toc}

 __Auto Detect__ mode will enable the on-board sound card and the ALSA mixer.

<a name="alsa"></a>

##### __ALSA Mixer__
{:.no_toc}

__ALSAmixer__ is the default tool for adjustment of output levels for all installed sound cards. To launch the ALSA mixer control, type 'alsamixer' at a command line, or click the icon on the Panel on lower right of the Player Desktop (hover over icons to the far left of clock). A Control Console displays hardware details for each sound card, with mix controls for the channels associated with that card.

![ ALSA Mixer Screenshot](/img/alsamixer.png ){: .alsamix}

    # Using the ALSA Mixer controls
    F6 - select the desired sound card from the available sound cards
    Left-right cursor keys - select the desired control
    up-down cursor keys - adjust the level
    'm' - toggle mute for the selected control
    'esc' - close the control window. 

<a name="jack"></a>

##### __Jack Audio Connection Kit__
{:.no_toc}

The default configuration uses [Jack Audio](#jack) modes, with Jack port names specified as *openbroadcasterout* and *openbroadcasterin* for the output and input ports respectively. These port names are used by __jack.plumbing__ to maintain the connection state.

To restore Jack Audio, select 'JACK' as both audio output and input modes on the __Audio/Visualization__ Tab, naming them openbroadcasterout and openbroadcasterin respectively. Enable line in if required. Ensure that [PulseAudio](#pulse) is disabled on startup, by editing the pulse configuration file at ~/.pulse/client.conf 

(__ed. Note:__ When using the Terminal Emulator, the tilde '~' denotes the users home directory, i.e. /home/obsuser; To change directories: 'cd *directory_name* '; 'nano' is the name of a simple text editing program, use CTRL-X to exit the editor; You are prompted to save changes. ):
 
obsuser@obsource:~$ `nano ~/.pulse/client.conf `

~~~~
#hashtag denotes a comment.
#to disable PulseAudio:
    autospawn = no
    daemon-binary = /usr/bin/true
~~~~

If using the [USB XLR Adapter](#adapter), ensure it is connected to the Player. Reboot.

<a name="pulse"></a>

##### __PulseAudio__ 
{:.no_toc}

The PulseAudio configuration file `~/.pulse/client.conf` must be edited to enable use of PulseAudio Volume controls (see Desktop Multimedia menu). If using the [USB XLR Adapter](#adapter), ensure it is connected to the Player. Then, on the configuration tab of the PulseAudio Volume Control, select the PCM2902 Audio Codec input/output modes; disable the built-in audio; adjust input/output levels and signal latency as required.

![ Pulse Volume Control Screenshot](/img/pauv.png ){: .pauv}

obsuser@obsource:~$ `nano ~/.pulse/client.conf `

~~~~
#to enable PulseAudio:
    autospawn = yes
    daemon-binary = /usr/bin/pulseaudio
~~~~

<a name="adapter"></a>

# USB XLR adapter
__NB: Line level input signal (+4dBu) may require attenuation by -15db to -20dB.__ 

![ USB XLR Adapter](/img/usb-xlr.jpeg ){: .usb-xlr}

The __USB XLR Adapter__ uses the Texas Instrument PCM2902 chipset, detailed specifications for which may be found [here](http://www.ti.com/lit/ds/symlink/pcm2902.pdf). When the [USB to XLR cable](https://openbroadcaster.pro/hardware/xlr-cable-openbroadcaster-player) is connected, both input and output may be routed through balanced XLR connectors.  When using the inputs on the adapter for audio bypass, source programming is muted during playback of alert messages. After the message completes, source programming resumes. 

To use the XLR cable:

1. Connect the USB end to any one of the USB ports on the Player unit.
1. Connect the output(male) XLR connectors to the inputs of your sound board or transmitter.
1. Connect the input(female) XLR connectors to the output of your audio source. Use in-line attenuation when connecting to +4dBu line level audio sources.
1. Power up the computer. If Jack audio mode is selected AND the adapter connected, the system will reconfigure to use the adapter.
1. Open the Dashboard __Audio Visualization__ Tab. Confirm output and input audio modes are set to use JACK audio, with port names openbroadcasterout and openbroadcasterin respectively.
1. For audio bypass, enable the *Audio In Source* setting, and disable the *Test Signal*. 
1.  __If the audio mode settings need to changed, be sure to reboot after saving your changes.__
1. Restart the Player from the Dashboard. Audio will now be routed through the XLR cable.

To calculate resistors for an H-Pad for attenuation of balanced audio in, input\_impedance=30k &Omega;, output\_impedance=10k &Omega;. The example below provides approximately -20dB of attenuation using resistors R 1/2= 12k &Omega;; R 2=3.3k &Omega;; R 3/2=3.3k &Omega; (ground wires should also be connected).
 
![ H Pad](/img/hpad.png ){: .hpad}

If the USB XLR Adapter has been modified to swap phase on either of the inputs, confirm that pins 2 and 3 (NOT 1 and 2) have been swapped.

![ XLR Pins](/img/xlr.png ){: .xlr}    ![ XLR Pins](/img/pins.png ){: .pins}

### Input Level Control

If it is necessary to adjust input levels, reconfigure the jack.plumbing setting to include the jack_mixer control.

![ JackMixer Screenshot](/img/jack.png ){: .jack}

First, rename the default configuration file:

obsuser@obsource:~$ `sudo mv /etc/jack.plumbing /etc/jack.default`

NOTE: `sudo` requires confirmation of your user password to use administrative privileges.

Then, create a new configuration file in the home directory:

<a name="adapter"></a>

obsuser@obsource:~$ `nano ~/.jack.plumbing`

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
NB: When using jack mixer, the jack_mixer control must be opened manually from the Panel Icon to activate the control. Once the control is closed, it no longer has any effect on the audio signal. The control must be visible and indicating signal bars if signal is to be audible. The mixer control must be reopened after a reboot.

# Headless Operation
{:toc}

To enable headless operation (i.e. no video output):
The hash symbol(#) is used to denote a comment or disable a command. Removing the hashtag enables a command. 

NOTE: `sudo` requires confirmation of your user password. 

obsuser@obsource:~$ `sudo nano /etc/default/grub`

~~~~
#Disable the next line for Headless operation
#GRUB_CMDLINE_LINUX_DEFAULT="quiet splash" 

#Enable next line for Headless operation
GRUB_CMDLINE_LINUX_DEFAULT="quiet text" 

#Enable next line for Headless operation
GRUB_TERMINAL=console 
~~~~

__IMPORTANT__ After changing grub config, you MUST run `sudo update-grub` to apply the changes.
The computer should now boot successfully without a monitor attached. To control output, SSH to the computer (ssh obsuser@ip_address) and run [alsamixer](#alsa) at the command line.

