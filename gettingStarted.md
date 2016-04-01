---
layout: default
title: gettingStarted
---

# Setting up OpenBroadcaster Alert Player
{:.no_toc}
__IMPORTANT NOTE: AUDIO IN is DISABLED in the default settings. To pass audio through the unit using the USB /XLR adapter, please enable the Audio In mode on the Audio Visualization Tab of the Dashboard.__

## Quick Start
{:.no_toc}

### Connect the components
{:.no_toc}

1. Setup the OBPlayer alerting box with a mouse, keyboard and monitor (HDMI or DSUB).
1. Plug in headphones or speakers to green audio output to monitor output.
1. Alternativelty, connect USB2XLR adapter to computer, and connect XLR inputs to source and outputs to transmitter.
1. Plug in RJ45 to a network with a router handing out DHCP IP addresses.
1. The above noted components must be attached before powering up the computer.
1. Boot.  Change the default password ('obsuser').

### Set locale and adjust audio levels
{:.no_toc}

1. Open Dashboard from desktop icon. Be sure to save changes on each tab before restarting.
1. On the `Audio Visualization` tab, enable Audio In if passing audio through from an external source. Save changes.
1. On the `Emergency Alerts` tab, set up SGC codes for your alerting locale. Save changes.
1. Restart the Player (using the Restart button on the Dashboard). If signal is present, the output should be audible.
1. Adjust output levels using alsamixer.
__NOTE: If source signals are "hot", some form of input signal attentuation may be required.__
 

## Detailed Setup Instructions
{:.no_toc}

* TOC
{:toc}


### Change the default user password
On the initial run of machines with pre-installed versions of OpenBroadcaster, the user must change the factory default password. Enter the default password (twice), followed by a new password (twice) to open the Desktop. 

Passwords must be a minimum of 8 characters and contain at least two of the following character types:

- Lowercase Alphabetical (a, b, c, etc.)
- Uppercase Alphabetical (A, B, C, etc.)
- Numerics (0, 1, 2, etc.)
- Special Characters (@, %, !, etc.)

Make sure to record the password in a safe place. If you forget or lose the password, you'll need to re-image the computer, and start from this point again.

### Configuring the Dashboard
The __OpenBroadcaster Player__ is configured through a secure web browser interface, available at [localhost:23233](http://localhost:23233). The default user/password is admin/admin. The admin and read-only user password settings may be changed on the HTTP(s) dashboard tab. Other tabs on the web page identify the available options. Make changes as required, save and restart the Player from the web interface to apply the new settings. Some configuration changes require a reboot (e.g. when changing audio modes to make use of external adapters). Options for media sync require an authorized connection to an __OpenBroadcaster Server__ instance. 

### Setting SGC Codes(for CAP Alerting)
The __OpenBroadcaster Player__ is only partially configured for emergency alerting at the factory, and further set-up is necessary prior to operation. The Player Emergency Alerting `Location Geocode` options must be set to filter emergency alert messages for to the district for which broadcast alerts are desired. Districts are defined by a [Standard Geographical Classification](https://en.wikipedia.org/wiki/Standard_Geographical_Classification). Set the [SGC Codes](http://www.statcan.gc.ca) for the desired district, which may be as broad as a province, or a specific as a hamlet. If more than one region is part of the broadcast area, enter the SGC codes as a comma separated list. For example, all of Yukon Territory may be identified by SGC "60", while the village of Tagish(Yukon) is identified by SGC “6001036”.  Alerts will be filtered to include only those issued for districts identified by the desired codes. Save any changes (make sure you enable emergency alerts!) and restart the Player. The status log will indicate status of connection to the NAAD server(s). Viewing the debug log will show messages being received, but only those matching the SGC filters will actually be played.

### Emergency Alert Message Options
When Plays per Alert is not limited, Alert Messages will continue to play at the Alert Repeat Interval until the Expiry time for each message has passed. Alert messages are only required to be played if the Broadcast Immediate flag is set for that message, or the alert is otherwise identified as a 'severe' warning. Moderately severe alert warnings may also be included for broadcast by setting this option on the Dashboard. Playback of messages can be adjusted to include only the introductory sentences, by using the setting to truncate long alert messages. 

### RS232 GPIO Trigger
A GPIO Trigger consists of a RS-232 DTR upon commencement of CAP-CP Alerts. When enabled and a matching CAP-CP message is broadcast, an alert cycle starts, the serial port will be opened and the DTR control signal (positive pin voltage) will be transmitted. After the alert cycle has completed, the DTR signal will drop (negative pin voltage). 

### Testing the Alert Message
NB: The Test Alert will play through the active output! From the Emergency Alerts tab of the Dashboard, select one of the four sample messages (each one tests a valid CAP message format):

1. Simple Test. Generates an internal CAP-CP formated message and plays using TTS
1. Embedded Audio Test. Generates an internal CAP-CP message and plays a supplied MP3 file instead of TTS.
1. External Audio Test. Generates an internal CAP-CP alert message, fetches and plays a test MP3 file from Pelmorex.
1. Embedded Audio and Image Test. Generates an internal CAP-CP test the displays a JPG image and plays audio recording. Requires 'Moderately Severe Alerts' to be enabled.

_NOTE English and French are presently the only supported language for on board testing with Audio and Visual alerting_ 

`Inject` the alert. A Test Alert message will be added to the Active Alert message queue, and a 20 sec. countdown begins to broadcast. Any other incoming message will reset the countdown timer. Once the countdwon reaches 0 secs, queued messages will play through the active audio output.

## Audio Settings
__OpenBroadcaster Alerting Player__ comes setup for using Jack Audio, with or without a USB to XLR adapter. In the default configuration, the Alert Player can function out-of-the-box as either a headless unit or with a graphic user interface (GUI desktop).  On the GUI, users have access to Pulse or Jack volume controls. In headless mode, only the ALSA mixer is available for volume control. If the Test Signal is enabled, it will override the audio-in from the Audio/Visualization dashboard. Generating test alert messages is recommended to confirm output levels.

### Setting audio modes
From the Audio/Visualization tab on the Dashboard, select the desired audio mode. To pass thru audio input from an external source, use the 'Enable Audio In Source' setting. When changing audio modes, a reboot is recommended. 

### alsamixer
The ALSA mixer provides a tool that runs in a terminal window, for adjustment of input and output levels. To launch the ALSA mixer control, type 'alsamixer' at a command line (using ssh to login, for example), or click the icon on the Panel on lower right of the Player Desktop (hover over icons to the far left of clock). In the Mixer console, press F6 to select the desired sound card from the available sound cards (PCH for on-board audio, 1/8" audio out; CODEC for USB Audio,  USB2XLR audio out; HDMI for HDMI audio out). Use the left-right cursor keys to select the desired control, and up-down cursor keys to adjust the level. Press 'm' to toggle mute for the selected control. Press 'esc' to close the control window. The ALSA mixer is the only audio control available in headless mode.

### Jack Audio Kit
JACK is set-up as the default sound processor. To restore `Jack`, disable PulseAudio (see next section). Then, open the Dashboard and on the Audio/Visualization tab, select `Jack` as the audio output and input modes, naming them openbroadcasterout and openbroadcasterin respectively. Save the change. If using the USB2XLR adapter, ensure it is connected to the Player. Reboot. Use alsamixer to adjust levels as required.

### PulseAudio
To use PulseAudio, select Pulse as the Audio Mode settings on the Player Dashboard. Edit the PulseAudio configuration file `~/.pulse/client.conf` to enable use of PulseAudio Volume controls (see Multimedia menu). If using the USB2XLR adapter, ensure it is connected to the Player. Then, on the configuration tab of the PulseAudio Volume Control, enable the PCM2902 Audio Codec and disable the built-in audio. Adjust levels as required.

obsuser:~$ `nano ~/.pulse/client.conf `

~~~~
#to disable PulseAudio:
    autospawn = no
    daemon-binary = /usr/bin/true
~~~~

~~~~
#to enable PulseAudio:
    autospawn = yes
    daemon-binary = /usr/bin/pulseaudio
~~~~

### jack_plumbing (jack mixer)

As noted above, the alsamixer provides no control over the input from the USB2XLR adapter. If a `.jack.plumbing` script is located in the home directory (i.e. ~/), a mixer can be incorprated into the Jack setup to provide control over the audio input. If input signals are too hot though, 

__NB__ When using jack mixer, the jack volume control must be opened manually from the Panel Icon to initiate the control. If the control is closed, it will no longer have any effect on the audio signal.

obsuser:~$ `nano ~/.jack.plumbing`

~~~~
#connect Audio Inputs to OpenBroadcaster Inputs
(connect "system:capture_1" "openbroadcasterin:in_audiosrc_1")
(connect "system:capture_2" "openbroadcasterin:in_audiosrc_2")

#Connect Openbroadcaster Outputs to Audio Outputs
(connect "openbroadcasterout:out_audiosink_1" "jack_mixer:OB_In L")
(connect "openbroadcasterout:out_audiosink_2" "jack_mixer:OB_In R")
(disconnect "openbroadcasterout:out_audiosink_1" "system:playback_1")
(disconnect "openbroadcasterout:out_audiosink_2" "system:playback_2")
(connect "jack_mixer:MAIN L" "system:playback_1")
(connect "jack_mixer:MAIN R" "system:playback_2")
~~~~


## Startup Script

The Alert Player(OBPlayer) application is configured to start automatically at boot time. The Session and Startup Settings Menu lists applications that run at startup.  The item `OBPlayer` in the Application Autostart menu is used to control the startup script.  

After the Alert Player boots up the Dashboard will be available using a web browser at http://localhost:23233. Provide or confirm user/password to gain access the Dashboard (the default is admin/admin).

## Headless Operation

To enable headless operation, edit the grub configuration, update the bootloader and reboot.
NOTE: The hash symbol(#) is used to denote a comment or disable a command. Removing the hashtag enables a command.

obsuser:~$ `sudo nano /etc/default/grub`

~~~~
#Disable the next line for Headless operation
#GRUB_CMDLINE_LINUX_DEFAULT="quiet splash" #Enable to use GUI Desktop

#Enable next line for Headless operation
GRUB_CMDLINE_LINUX_DEFAULT="quiet text" #Disable to use GUI Desktop

#Enable next line for Headless operation
GRUB_TERMINAL=console #Disable to use GUI Desktop
~~~~

__!IMPORTANT!__ After changing grub config, you MUST run `sudo update-grub` to apply the changes.
__!IMPORTANT!__ Delete or rename the file .jack.plumbing if used. Otherwise, the audio output will falter.  
