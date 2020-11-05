---
layout: default
title: Logging
permalink: /logging
---
Logging and Monitoring
* TOC
{:toc}

# Server Play Logs

Basic text log reports in CSV format for players are generated with server [Player Monitoring](http://support.openbroadcaster.com/server/#logging-and-monitoring) on demand.  More detailed information using the [Reports](http://support.openbroadcaster.com/reports/) module. 

# Player Audio Logging

![ Audio Logging](img/audio-logging.png ){: .audio_logging} 

Enable `Audio Logging` from the `Sources` page. 

Audio logs will be automatically created in one hour segments. To access these audio files, click the `Downloads` button on the Status page from the player's dashboard or access from `./openbroadcaster/Audio-Logs`

<br/>

# Silence Detection Recording

![ Audio Input Recording](img/audio-input-recording.png ){: .input_source} 

Automatic Audio Input Recording on `Line In` adjusting the sensitivity of present signals from source

<br/>

# Recording FM Transmission

Most radio stations have a requirement from regulators to maintain off air recordings.  An easy way to accomplish this is the use the Audio Logging feature of Player

Users are able to record and capture off-air audio logs that can be used for CRTC logging purposes or reused as a podcast, several ways

__Pulse must be the audio mode for your system.__

# Onboard Recording with Line in as source

![ Input source](img/input_source.png ){: .input_source} 

Use the onboard "line-in" of sound card, plug an analog FM tuner, monitor your stations signal. 

Select Input source to record (ie USB XLR device)

One hour off air recordings are available in `Dashboard>Downloads` or `./openbroadcaster/linein-logs`

<br/>

# Recording Over the Air FM Transmission with SDR

An inexpensive FM signal monitoring solution can be acheived using SDR (software defined radio) and a DVB-T USB Tuner based on the Realtek RTL2832U chip. Some [clever reverse-engineering](http://rtlsdr.org/#history_and_discovery_of_rtlsdr) exposed the capability of these dongles as FM receivers. 

The example below uses a  [NooElec NESDR Nano RTL2832U receiver](https://openbroadcaster.com/broadcast-hardware) USB Stick software defined radio (SDR) receiver.

- Insert USB Dongle and attach an external FM antennae

- Enable `SDR Recording` and restart OBPlayer dashboard.

- Select and tune to a frequency with drop down menu.

- SDR source is remotely recording and streamed over the network. 

One hour off air recordings are available in `Dashboard>Downloads` or `./openbroadcaster/off-air-recordings`

# Monitoring Over the Air FM Transmission with SDR

When SDR radio is enabled, a local mount point is created in HTML5 pop-up dashboard media player and local icecast server.

<br/>

## Pulse Mixer

![ Pulse Mixer Monitor](img/pulse_mixer.png ){: .pulse_mixer}

__Pro Tip__ Gstreamer Source to record. Go to command line of local box and type `pulsemixer` Select the Input source, press enter to select as default.

