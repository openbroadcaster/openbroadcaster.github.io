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

OpenBroadcaster Player is configured to use on-board audio by default (with Pulse audio). To use JACK  instead, open the Dashboard and on the Audio/Visulaization tab, select Jack as the audio output and input modes, naming them openbroadcasterout and openbroadcasterin respectively. Save the change. Connect any external USB2XLR adapter. Reboot. Audio will now be processed using Jack. 

NOTE: There are no input/output controls for Jack audio in the default setup. 
Save the following script (i.e. as '.jack.plumbing' in the /home/obsuser directory), reboot, and the Jack Volume control on the Desktop (to the left of the clock on the Panel) will provide control of the audio. If there is a test signal or other audio source, the Jack Volume controls will display color bars indicating level for the left and right channels (both source and master output).

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

# Starting from scratch

Make sure your environment meets the [prerequisites](#minimumSpec) before installing OpenBroadcaster Player. If you have administrative privileges, simply cut, paste and run the code shown below for the desired Player operating environment. Then, download [Player](https://github.com/openbroadcaster/OBPlayer). For more detailed instructions on setting up Openbroadcaster Player on an Ubuntu platform.

### Minimum Hardware Platform

<a name="minimumSpec"></a>

| Item | Description |
|:--------------|:------------|
| Processor  | ARM Cortex, Intel Celeron or better |
| Memory | 2 GB RAM |
| Storage | Minimum 1GB |
| Display | Minimum 640x480 screen resolution. HDMI for HD content. |
| Audio | Analog Input\Output and\or Digital HDMI, SPDIF. Gstreamer uses JACK or Pulse to send the audio output to an ICE cast streaming server. |
  
*No display actually required unless displaying Video or Images*

OBPlayer should be on a \*nix system (Debian 7 with xfce or xubuntu 14.04 LTS for example).

### Software Dependencies

##### OBPlayer Core

    python python-argparse python-pycurl python-openssl python-apsw python-magic python-dateutil python-requests python-gi python-gi-cairo python-gst-1.0 python-serial gir1.2-gtk-3.0 gir1.2-gdkpixbuf-2.0 gir1.2-pango-1.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0 gstreamer1.0-alsa gstreamer1.0-pulseaudio gstreamer1.0-tools gstreamer1.0-libav gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-vaapi mesa-vdpau-drivers ubuntu-restricted-addons ubuntu-restricted-extras git ntp ssh

##### OBPlayer Everything (Streaming Production Workstation)

    python python-argparse python-pycurl python-openssl python-apsw python-magic python-dateutil python-requests python-gi python-gi-cairo python-serial python-gst-1.0 gir1.2-gtk-3.0 gir1.2-gdkpixbuf-2.0 gir1.2-pango-1.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0 gstreamer1.0-tools gstreamer1.0-alsa gstreamer1.0-pulseaudio gstreamer1.0-libav gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-vaapi mesa-vdpau-drivers ubuntu-restricted-addons ubuntu-restricted-extras cifs-utils ssh ntp git vlc audacity dia inkscape libreoffice vino icecast2 pavucontrol pulseaudio-utils handbrake jack qjackctl xvfb libav-tools curl remmina mediainfo-gui gnome-disk-utility alsa-tools-gui

##### OBPlayer Alerting Espeak

    espeak mbrola mbrola-en1 mbrola-us1 mbrola-us2 mbrola-us3 mbrola-fr1 mbrola-fr4

