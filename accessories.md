---
layout: default
title: accessories
---

Setup of external devices

* TOC
{:toc}

<a name="accessories"></a>

## Mechanical RS232 Switching Relay

Switches audio and injects audio alerts

__Prerequisites__

Update alert player.  Com Port(s) are enabled in BIOS (default=on) 

__Install Relay__

![ Ports Diagram Screenshot](img/Ports_Diagram_400px.png ){: .Ports}

Connect DB9 connector (female) to Com Port 1 (ttyS0) on the back (left) of player.

1. Connect XLR `Audio Program Feed` to studio out or source material 

2. `EAS Switched Output` to main output to STL and transmitter. Audio should normally pass through, unaltered.

3. Connect EAS audio output from player into the XLR Female marked `EAS Alert Feed` using Male XLR-USB cable or onboard audio 1/8" mini jack.

Energize Power Supply

__Configure DashBoard__

Changes required for default settings.

1. __Audio Source>__ Uncheck `Enable Audio In Source`

2. __Emergency Alerts>Advanced Settings__ Check `Trigger RS-232 DTR on Alerts`

__Testing__

Inject test alert, mechanical relay will engage when alert plays and resume normal pass through when complete.

## LED Scrolling Sign

__Prerequisites__

Update alert player.  Ensure that com port is enabled in BIOS (default=on)

__Install LED Screen__

1. Connect `DB9 Female to RJ12` connector to Com Port2 (ttyS1) on the back (right) of player.

2. Plug RJ12 cable into adaptor and into LED Sign

3. __Sources Tab>__ Check Enable LED Screen

4. Plug in AC power to sign.  Start up message will scroll.

![ LED Sign Config Screenshot](img/LED_Sign_Config.png ){: .LED}

__To Test__ 

Inject test alert.  CAP test message text will scroll across LED screen.

## Barix Exstreamer

OBPlayer can create an encoded MP3 stream received by a Barix Exstreamer device.  This combination creates a robust STL (Studio Transmitter Link)

From __Streaming Tab__ in dashboard create mount point
 
Enable __Streaming__ Save. Restart.

Mount point will show up in [http://localhost:8000](http://localhost:8000)

![ BARIX IceCast Screenshot](img/BARIX_ICECAST_CONFIG.png ){: .BARIX} 

## CAP Alerts with Barix 
{:.no_toc}

OBPlayer creates an on demand IceCast mount point when an alert is present with a Barix Exstreamer receiver at transmitter to play CAP alerts.  Stations normally will be supplying audio to Exstreamer at transmitter.  Barix will be configured to detect the new mount point stream, cut over and play alert.

__Prerequisites__

In order to make the priority streaming work, so that OBPlayer only outputs the alerts and nothing else, disable the scheduler, fallback player, audio in, and the test signal.

__Configure OBPlayer__

__Streaming Tab__ Create a mount point on local machine’s IceCast server. Exstreamer will switch to the generated alert mount point and switch back when it stops. There is a minor delay in the switching with Barix Exstreamer. Set the lead-in delay to 1 second and the lead-out delay to 5 seconds to catch the whole alert cycle without having too much delay before and after. 

__Barix>Configuration__ Set the first URL as priority for the alert stream.  Second URL is set to the normal stream coming from the studio. 

## IceCast Streaming Server
{:.no_toc}

To allow the stream coming from OBPlayer set incoming password in local IceCast server editing config file.  This will be the same password that was setup in the dashboard.

~~~~
sudo nano /etc/icecast2/icecast.xml
~~~~

Restart the IceCast service to enable saved settings or restart computer 

