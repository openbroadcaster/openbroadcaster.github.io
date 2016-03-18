---
layout: default
title: gettingStarted
---

# Setting up OpenBroadcaster Player

### Change the default password

On the initial run of machines with pre-installed versions of OpenBroadcaster, the user must change the factory default password. Enter the default password (twice), followed by a new password (twice) to open the Desktop. 

Passwords must be a minimum of 8 characters and contain at least two of the following character types:

- Lowercase Alphabetical (a, b, c, etc.)
- Uppercase Alphabetical (A, B, C, etc.)
- Numerics (0, 1, 2, etc.)
- Special Characters (@, %, !, etc.)

Make sure to record the password in a safe place. If you forget or lose the password, you'll need to re-image the computer, and start from this point again.

### Using Jack Audio Kit

OpenBroadcaster Player is configured to use on-board audio by default (with Pulse audio). To use JACK  instead, open the Dashboard and on the Audio/Visualization tab, select Jack as the audio output and input modes, naming them openbroadcasterout and openbroadcasterin respectively. Save the change. Connect any external USB2XLR adapter. Reboot. Audio will now be processed using Jack. 

NOTE: There are no input/output controls for Jack audio in the default setup. To override the default connections, save the following script to your home directory (i.e. as '.jack.plumbing' in the /home/obsuser directory). Reboot. The Jack Volume control on the Desktop (to the left of the clock on the Panel) will provide control of the audio. If there is a test signal or other audio source, the Jack Volume controls will display color bars indicating level for the left and right channels (both source and master output).

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


