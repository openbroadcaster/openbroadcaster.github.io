---
layout: default
title: gettingStarted
---

## Quick Start Guide

__NB: REMEMBER TO CHECK FOR [UPDATES](#update) BEFORE INITIAL SETUP, AND PRIOR TO REPORTING ISSUES TO ENSURE THE MOST CURRENT VERSION IS RUNNING.__

{:.no_toc}

* TOC
{:toc}

## BEFORE YOU BEGIN
{:toc}

#### 1. Connect the components
{:.no_toc}

* Setup the computer with a mouse, keyboard and monitor (HDMI or DSUB).
* Connect power, preferably to a battery UPS to maintain up time during power failure (unit draws only 20W). 
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


<a name="setup"></a>

# Setup
{:toc}
 
_(Initial setup and testing)_

<a name="update"></a>

### Update the Player
Updating the Alert Player ensures the most current version of the application is running. Utilities for updating the Player are now located on the Admin Tab of the [Dashboard](#dash). 

![Update Player Utilities](/img/updater.png ){: .updater}

If the Admin Tab of your Dashboard does not have Update Player utilities (i.e. Check & Update), click the Green/White check Update icon ![OBPlayer Launcher](/img/launcher.png ){: .launcher} located on the bottom right of the Desktop Panel. 

After updating the Player, restart the Player and refresh the browser (Tip: press F5 on the keyboard) to the load changes to the Dashboard layout.

<a name="dash"></a>

### Dashboard Configuration
The OpenBroadcaster Player is configured using a secure web browser interface, available at [http://localhost:23233](http://localhost:23233). A user/password is required to access the __Dashboard__ (the default is admin/admin). Configuration settings are grouped together on the tabbed pages of the __Dashboard__. 

The __Status__ tab displays the current state of the Player.

![ Dashboard Screenshot](/img/dashboard.png ){: .screenshot}

For initial setup, disconnect any USB audio device __before__ powering up the unit, and use the green speaker/headphone jack to monitor audio output. The *Enable Audio In* setting is disabled in the default configuration. If *Enable Source In*  or *Enable LED Sign*  are set on the A/V tab, disable them. 

Open the Dashboard and configure __Emergency Alerts__ with a __Location Geocode__. Adjust __Primary and Secondary Languages__ if necessary. Generate a __Test Alert__. Try different text-to-speech (__TTS__) voices. Click the __Save__  button if changes are made to any Tab. The Dashboard must be restarted to load the new settings.

To monitor real alerts, use a high level geocode for your province (Atlantic Canada=1; Quebec=2; Ontario=3; Prairies=4; British Columbia=5; Northern Canada=6). Enable the 'Play Moderately Severe Alerts' setting to recieve and play additional warning messages. 

Be sure to reset the Location Geocode for a specific alerting locale before proceeding to [Operation](#operation). 

#### Set Alerting Locale
{:toc}

![ Emergency Alert Tab ](/img/alert_tab.png ){: .screenshot}

1. Ensure Emergency Alerts are enabled on the [Emergency Alerts](#alerts) Tab.
1. Enter the [SGC code(s)](#sgc) for your alerting locale. 
1. The default setting will convert the headline and first sentence of a broadcst intrusive Alert message to audio using TTS(text-to-speech). To have the entire message converted, disable the *Truncate Long Alert Messages* setting . Use the *Play Moderately Severe Alerts* setting to enable non-broadcast intrusive alert messages, if desired.
1. The default setting will continue to broadcast Alert messages at the *Alert Repeat Interval* until the Alert's expiry time is reached. To limit the number of repeats of an Alert message, change this setting.

#### Test Audio Output
{:toc}
Audio output will be directed through the onboard sound card to the stereo 1/8" mini output. To confirm your audio setup is working correctly:

1. On the [Audio Visualization](#audio) Tab, enable Test Signal.
1. Save changes. Restart the Player (using the Restart button on the __Dashboard__).
1. The Test Signal (440 Hz tone) should be audible via the green line out connection.
1. Once audio output has been confirmed, disable the Test Signal. Save Change and Restart.
 
<a name="alsa"></a>

__ALSAmixer__ is the default tool for adjustment of output levels for all installed sound cards. To launch the ALSA mixer control, type 'alsamixer' at a command line, or click the icon on the Panel on lower right of the Player Desktop (hover over icons to the far left of clock). A Control Console displays hardware details for each sound card, with mix controls for the channels associated with that card.

![ ALSA Mixer Screenshot](/img/alsamixer.png ){: .alsamix}

Using the ALSA Mixer controls:

 * F6 - select the desired sound card from the available sound cards
 * Left-right cursor keys - select the desired control
 * up-down cursor keys - adjust the level
 * 'm' - toggle mute for the selected control
 * 'esc' - close the control window. 


####  Generate Test Alert
{:toc}

To confirm that Alert messages are working correctly, select one of the four sample messages (each one tests a valid CAP message format):

1. Simple Test. Generates an internal CAP-CP formated message and plays using TTS
1. Embedded Audio Test. Generates an internal CAP-CP message and plays a supplied MP3 file instead of TTS.
1. External Audio Test. Generates an internal CAP-CP alert message, fetches and plays a test MP3 file from Pelmorex.
1. Embedded Audio and Image Test. Generates an internal CAP-CP test the displays a JPG image and plays audio recording. Requires 'Moderately Severe Alerts' to be enabled.

_NOTE English and French are presently the only supported language for on board testing with Audio and Visual alerting_ 

Click `Inject` to add the message to the Active Alerts queue;  a 20 second countdown begins. If another incoming message is received, the countdown timer is rest at 20 seconds. Once the countdown reaches 0 secs, queued messages will play through the active audio output.

<a name="operation"></a>

#  Operation

_(Operation)_

Be sure to __Save__ any changes on each Tab before restarting. If audio modes are changed, a reboot will be required.

Shaded code blocks are commands in the Terminal Emulator: 

To change directories:

~~~~
cd *directory_name* '; 
~~~~
    
the tilde '~' denotes the users home directory, '#' denotes a comment or disabled command i.e.

~~~~
cd ~ # equivlaent to cd /home/obsuser; 
~~~~
   
 Where  `sudo` is indicated for root privileges, you will be prompted for your user password;

In `nano`, use CTRL-X to exit the editor; click 'Y' when prompted to save changes, and enter to save the file.


<a name="status"></a>

### __Status and Summary Tabs__

The __Status__ Tab displays information for the current state of the Player. If audio signal is present, a  signal level indicator will respond to output from both audio channels. All system operations are displayed on the Log displayed on the __Status__ Tab. Messages in green text denote normal system operations. Messages displayed in red text denote playout of active alerts. Systems error messages (e.g. network failure, broken audio links) are also diplayed in red. More detailed logging may be displayed by viewing the Debug log. The Debug log displays all CAP alert messages received by the Alert Player, before local filters have been applied.

The __Summary__ Tab displays all current configuration settings. The current settings may be exported from the __Admin__ Tab.

### __Admin Tab__

The __Admin__ Tab is visible to the Admin user only. Advance Settings control visibility of Tabs for Read Only user access.

The data.db contains a copy of media scheduled for the period identified by the sync buffer (default 24 hours). The backup database may be purged using this setting, and the Player will refresh the database according to the current sync settings. Useful when changing backend services.

Current configuration settings may be saved and used to restore the configuration if necessary. To create a backup of the configuration export the settings. To restore a configuration, import the settings file. Configuration settings are output in plain text form, including password, so this file should be kept in a secure location.

*Reset to Defaults* will restore the default configuration. Current configuration parameters will be overwritten, but may be restored from the backup settings file.

*Update Player* allows the user to confirm the installed Player version, check for updates to the Player software, and if desired, retrieve and install the updates. Changes will not take effect until the Player is restarted.

![ Admin Tab Screenshot](/img/admin_tab.png ){: .screenshot}

<a name="sync"></a>

### __Sync/Media Tab__
The __Sync/Media__ Tab is not enabled in the default configuration. Device ID, password and Sync URL settings are used for installations that link the Player to a OpenBroadcaster Duo media management server. The *Sync URL* should be in the format `http://server_ip_address/remote.php` or `https://server_ip_address/remote.php`. These settings are ignored if Sync/Media settings are disabled.

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

 Alerting Districts are defined by a [Standard Geographical Classification](https://en.wikipedia.org/wiki/Standard_Geographical_Classification_code_%28Canada%29). Use the map below to find SGC codes in your area. The SGC may be as broad as a province, or a specific as a hamlet. If more than one region is part of the broadcast area, enter the SGC codes as a comma separated list (no spaces). For example, the town of Carcross Yukon is "6001048"; the village of Tagish(Yukon) is “6001036”. To include alerts affecting both districts, "6001036,6001048' would be entered into the textbox.  Alerts will be filtered to include only those that match, contain, or are contained by the set Alerting District. 

The status log will indicate status of connection to the NAAD server(s). Viewing the debug log will show messages being received, but only those matching the SGC filters will actually be played.

Pan/zoom the map below to find SGC codes for your area of interest.

<div id="map" name="map">
</div>

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

__Auto Detect__ mode will enable the on-board sound card and the ALSA audio processor.  The *Enable Audio In Source* allows the Player to pass audio from an external source through the audio output, while allowing interruption of the source to inject Alert Messages as necessary. 

<a name="modes"></a>

#### Audio modes
{:.no_toc}

<a name="jack"></a>

##### __JACK Audio Kit__ 
{:.no_toc}

JACK is pre-configured as the default for  audio output and input modes, using port names *openbroadcasterout* and *openbroadcasterin*  respectively. These port names are used by __jack-plumbing__ to maintain the connection state.  To use the Player to pass thru audio from a Line In source, please refer to the [USB-XLR Adapter](#adapter) section.

When reconfiguring for a JACK setup, ensure that [PulseAudio](#pulse) is disabled, by editing the pulse configuration file at ~/.pulse/client.conf 

obsuser@obsource:~$ `nano ~/.pulse/client.conf `

~~~~
#hashtag denotes a comment.
#to disable PulseAudio:
    autospawn = no
    daemon-binary = /usr/bin/true
~~~~
 
<a name="pulse"></a>

##### __PulseAudio__ 
{:.no_toc}

The PulseAudio configuration file `~/.pulse/client.conf` must be edited to enable use of PulseAudio.

obsuser@obsource:~$ `nano ~/.pulse/client.conf `

~~~~
#to enable PulseAudio:
    autospawn = yes
    daemon-binary = /usr/bin/pulseaudio
~~~~
If using the [USB XLR Adapter](#adapter), ensure it is connected to the Player. Then, on the configuration tab of the PulseAudio Volume Control, select the PCM2902 Audio Codec input/output modes; disable the built-in audio; adjust input/output levels and signal latency as required.
 PulseAudio Volume controls for PulseAudio are found under Multimedia on the system menu.

![ Pulse Volume Control Screenshot](/img/pauv.png ){: .pauv}

<a name="adapter"></a>

# USB XLR adapter
__NB: Line level input signal (+4dBu) will require attenuation by -15db to -20dB.__ 

![ USB XLR Adapter](/img/usb-xlr.jpeg ){: .usb-xlr}
 ![ XLR Pad](/img/pad.jpeg ){: .xlrpad} 

The __USB XLR Adapter__ uses the Texas Instrument PCM2902 chipset, detailed specifications for which may be found [here](http://www.ti.com/lit/ds/symlink/pcm2902.pdf). 

600 ohm in-line XLR attenuators (-20dB) are recommended for installation in +4dBu radio broadcast chain. 

When the [USB to XLR cable](https://openbroadcaster.pro/hardware/xlr-cable-openbroadcaster-player) is connected, both input and output may be routed through balanced XLR connectors.  When using the inputs on the adapter for audio bypass, source programming is muted during playback of alert messages. After the message completes, source programming resumes. 

To use the XLR cable:

1. Connect the USB end to any one of the USB ports on the Player unit. The adapter must be connected __before__ power up for the system to auto-configure the adapter. 
1. Connect the output(male) XLR connectors to the inputs of your sound board or transmitter. Connect the input(female) XLR connectors to the output of your audio source. Use in-line attenuators (-20dB) if connecting to +4dBu line level audio sources. The attenuated signal should pass thru without the need for input level controls. [Alsamixer](#alsa) may be used to control output, if required. __If revisions were made to the Jack configuration to include jack-mixer controls, the original configuration should be restored in .jack.plumbing .  The ~/.jack.plumbing file should define the following connections:__

   obsuser@obsource:~$ `nano ~/.jack.plumbing`

   ~~~~
   #connect Audio Inputs to OpenBroadcaster Inputs
   (connect "system:capture_1" "openbroadcasterin:in_audiosrc_1")
   (connect "system:capture_2" "openbroadcasterin:in_audiosrc_2")
   
   #Connect Openbroadcaster Outputs to Audio Outputs
   (connect "openbroadcasterout:out_audiosink_1" "system:playback_1")
   (connect "openbroadcasterout:out_audiosink_2" "system:playback_2")
   ~~~~

1. Open the Dashboard __Audio Visualization__ Tab. Confirm output and input audio modes are set to use JACK audio, with port names openbroadcasterout and openbroadcasterin respectively. For audio bypass, enable the *Audio In Source* setting, and disable the *Test Signal*.  __If the audio mode settings need to changed, be sure to reboot after saving your changes.__
1. Restart the Player from the Dashboard. Audio should now be routed through the XLR cable.

If no audio output is heard, refer to [Troubleshooting](./troubleShooting.html).


# Headless Operation
{:toc}

For headless operation (i.e. no keyboard/video/mouse), open a Terminal window and edit the grub configuration as follows:

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
The computer should now boot successfully without a monitor attached.  Use http://player\_ip\_address:23233 to access the Dashboard over the local network. To control audio output, SSH to the computer (ssh obsuser@player\_ip\_address) and run [alsamixer](#alsa) at the command line. Follow instructions for Basic Setup.


