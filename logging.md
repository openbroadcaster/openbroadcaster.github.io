---
layout: default
title: Logging
permalink: /Logging
---
Advanced Operations

* TOC
{:toc}

### Recording FM Transmission
{:toc}

Most radio stations have a requirement from regulators to maintain off air recordings.  An easy way to accomplish this is the use the audio playlog feature of Player

Alert Player users are able to record and capture off-air audio logs that can be used for CRTC logging purposes or reused as a podcast. An example would be to use the onboard "line-in" of sound card, plug a FM tuner monitoring you stations signal. Pulse must be the audio mode for your system. 

1) Enable Audio Logging from the sources tab. 

![ Audio Logging](img/audio_logging.png ){: .audio_logging} 

2) Select Input source to record.

![ Input source](img/input_source.png ){: .input_source} 

3) Tell Gstreamer what Source to record from. Go to command line of local box and type `pulsemixer` Select the Input source, press enter to select as default.

![ Pulse Mixer Monitor](img/pulse_mixer.png ){: .pulse_mixer}

Audio logs will be automatically created in one hour segments. To access these audio files, click the `Downloads` button on the Status tab from the player's dashboard.

### Monitoring FM Transmission
{:toc}

An inexpensive FM signal monitoring solution can be acheived using SDR (software defined radio) and a DVB-T USB Tuner based on the Realtek RTL2832U chip. Some [clever reverse-engineering](http://rtlsdr.org/#history_and_discovery_of_rtlsdr) exposed the capability of these dongles as FM receivers. 

The example below uses a software defined radio (SDR) receiver and a [NooElec NESDR Nano RTL2832U receiver](https://openbroadcaster.com/broadcast-hardware).

When enabled in the OBPlayer dashboard, FM reception may be streamed over TCP to allow remote monitoring of the broadcast signal. An embedded FM Monitoring mountpoint displays in dashboard.

You should now be able to use SDR to remotely monitor the stream over the network

Insert USB Dongle and attach an external FM antennae

Enable FM Monitoring and restart OBPlayer dashboard.

You will now be able to select and tune to a frequency with drop down menu.

Enable recording and one hour off air logs will be available in Downloads
