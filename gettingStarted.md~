---
layout: default
title: gettingStarted
---

# Setting up OpenBroadcaster Player
{:.no_toc}

* TOC
{:toc}


### Getting Started

Setup the OBPlayer alerting box with a mouse, keyboard and monitor (HDMI or DSUB) Plugin
headphones or speakers to green audio output or hook up (optional XLR adaptor) to monitors. Plug
in RJ45 to a network with a router handing out DHCP IP addresses.

### Change the default password

On the initial run of machines with pre-installed versions of OpenBroadcaster, the user must change the factory default password. Enter the default password (twice), followed by a new password (twice) to open the Desktop. 

Passwords must be a minimum of 8 characters and contain at least two of the following character types:

- Lowercase Alphabetical (a, b, c, etc.)
- Uppercase Alphabetical (A, B, C, etc.)
- Numerics (0, 1, 2, etc.)
- Special Characters (@, %, !, etc.)

Make sure to record the password in a safe place. If you forget or lose the password, you'll need to re-image the computer, and start from this point again.

### Configuring the OpenBroadcaster

The __OpenBroadcaster Player__ is configured through a simple web browser interface, available at [localhost:23233](http://localhost:23233). The tabs on the web page identify the available options. Make changes as required, save and restart the Player from the web interface to apply the new settings. Configuration options will require a reboot when setting up for Jack using external USB2XLR style adapters. Options for media sync will require an authorized connection to an __OpenBroadcaster Server__ instance. 

### Setting SGC Codes(for CAP Alerting)
The __Alert Player__ is only partially configured at the factory, and further set-up is necessary prior to operation. The __Alert Player__ must be set to filter emergency alert messages for to the district for which broadcast alerts are desired. Districts are defined by a [Standard Geographical Classification](https://en.wikipedia.org/wiki/Standard_Geographical_Classification). Set the [SGC Codes](http://www.statcan.gc.ca) for the desired district, which may be as broad as a province, or a specific as a hamlet. If more than one region is part of the broadcast area, enter the SGC codes as a comma separated list. For example, Tagish(Yukon) is identified by SGC “6001036”.  Alerts will be filtered to include only those issued for Districts identified by the desired codes. Save any changes (make sure you enable emergency alerts!) and restart the Player. The status log will indicate status of connection to the NAAD server(s). Viewing the debug log will show messages being received, but only those matching the SGC filters will actually be played.

### Broadcast Intrusive messaging
Alert messages are only played if the Broadcast Immediate flag is set for that message, or the alert is otherwise identified as a 'severe' warning. Moderately severe alert warnings may also be included for broadcast by setting this option on the Dashboard. Playback of messages can be adjusted to include only the introductory sentences, by using the setting to truncate long alert messages.

### Using Jack Audio Kit

OpenBroadcaster Player is configured to use on-board audio by default (with Pulse audio). Other modes are supported, however only Pulse and Jack audio are pre-installed. To use JACK  instead of the default Pulse setup, open the Dashboard and on the Audio/Visualization tab, select Jack as the audio output and input modes, naming them openbroadcasterout and openbroadcasterin respectively. Save the change. Connect any external USB2XLR adapter. Reboot. Audio will now be processed using Jack. 

NOTE: There are no input/output controls for Jack audio in the default setup. To override the default connections, save the following script `.jack.plumbing` to your home directory (i.e. /home/obsuser). Reboot. The Jack Volume control on the Desktop (to the left of the clock on the Panel) will now provide control over the audio levels. If there is a test signal or other audio source, the Jack Volume control will display color bars indicating level for the left and right channels (both source and master output).

~~~~
~/.jack.plumbing

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



