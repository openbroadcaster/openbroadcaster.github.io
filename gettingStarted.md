---
layout: default
title: gettingStarted
---

## Quick Start Guide
{:.no_toc}

__NB: REMEMBER TO CHECK FOR [UPDATES](#update) BEFORE INITIAL SETUP, AND PRIOR TO REPORTING ISSUES TO ENSURE THE MOST CURRENT VERSION IS RUNNING.__


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

<a name="update"></a>

## Software Updates
{:toc}

Updating the software ensures the most current version of the application is running. To obtain and install updates, click the Green/White check Update icon ![Update Launcher](/img/launcher.png ){: .launcher} located on the bottom right of the Desktop Panel. The update script will run (a terminal window may open temporarily), and an email message outlining any updates will be sent to the mailbox. To view the update message, open Thunderbird Mail.

![Update Player Utilities](/img/updater.png ){: .updater} 

__NOTE: Utilities for updating the Player will now be found on the Admin Tab of the [Dashboard](#dash).__ 

After updating the Player, restart the Player and refresh the browser (Tip: press F5 on the keyboard) to the load changes to the Dashboard layout.

<a name="player"></a>

# Alert Player
{:toc}
 
_(Initial setup and testing)_


<a name="dash"></a>

### Configure the Dashboard 
The OpenBroadcaster Player is configured using a secure web browser interface, available at [http://localhost:23233](http://localhost:23233). A user/password is required to access the __Dashboard__ (the default is admin/admin). Configuration settings are grouped together on the tabbed pages of the __Dashboard__. 

The __Status__ tab displays the current state of the Player.

![ Dashboard Screenshot](/img/dashboard.png ){: .screenshot}

For initial setup, disconnect any USB audio device __before__ powering up the unit, and use the green speaker/headphone jack to monitor audio output. The *Enable Audio In* setting is disabled in the default configuration. If *Enable Source In*  or *Enable LED Sign*  are set on the A/V tab, disable them. 

Open the Dashboard and configure __Emergency Alerts__ with a __Location Geocode__. Adjust __Primary and Secondary Languages__ if necessary. Generate a __Test Alert__. Try different text-to-speech (__TTS__) voices. Click the __Save__  button if changes are made to any Tab. The Dashboard must be restarted to load the new settings.

To monitor real alerts, use a high level geocode for your province (Atlantic Canada=1; Quebec=2; Ontario=3; Prairies=4; British Columbia=5; Northern Canada=6). Enable the 'Play Moderately Severe Alerts' setting to recieve and play additional warning messages. 

Be sure to reset the Location Geocode for a specific alerting locale before proceeding to [Operation](#operation). 

### Set Alerting Locale
{:toc}

![ Emergency Alert Tab ](/img/alert_tab.png ){: .screenshot}

1. Ensure Emergency Alerts are enabled on the [Emergency Alerts](#alerts) Tab.
1. Enter the [SGC code(s)](#sgc) for your alerting locale. 
1. NAAD messages from Pelmorex may be issued as a digital audio file and/or with an included graphic image. These will automatically be recieved and broadcast with our systems.  In the event the attached alert is missing or corrupted, relayed from Environment Canada or issued using a text source, your system will play the audio using built in TTS(text-to-speech) and display a full screen red slide with Description text and accompanying audio alerts.  Default setting will truncate the headline to the first sentence of a broadcast intrusive Alert message.  To play the entire CAP alert, including the entire lengthy description, disable the *Truncate Long Alert Messages* setting . Use the *Play Moderately Severe Alerts* setting to enable optional, non-broadcast intrusive alert messages, if desired.
1. The default setting will continue to broadcast Alert messages at the *Alert Repeat Interval* until the Alert's expiry time is reached. Broadcast Intrusive alert messages are required to play at least once. To limit the number of repeats of an Alert message, change this setting.



###  Generate A Test Alert
{:toc}

To confirm that Alert messages are working correctly, select one of the four sample messages (each one tests a valid CAP message format):

1. Simple Test. Generates an internal CAP-CP formated message and plays using TTS
1. Embedded Audio Test. Generates an internal CAP-CP message and plays a supplied MP3 file instead of TTS.
1. External Audio Test. Generates an internal CAP-CP alert message, fetches and plays a test MP3 file from Pelmorex.
1. Embedded Audio and Image Test. Generates an internal CAP-CP test the displays a JPG image and plays audio recording. Requires 'Moderately Severe Alerts' to be enabled.

_NOTE English and French are presently the only supported language for on board testing with Audio and Visual alerting_ 

Click `Inject` to add the message to the Active Alerts queue;  a 20 second countdown begins. If another incoming message is received, the countdown timer is rest at 20 seconds. Once the countdown reaches 0 secs, queued messages will play through the active audio output.


<a name="adapter"></a>

# USB XLR adapter
{:toc}

__NB: Line level input signal (+4dBu) will require attenuation by -15db to -20dB.__ 

![ USB XLR Adapter](/img/usb-xlr.jpeg ){: .usb-xlr}


The __USB XLR Adapter__ uses the Texas Instrument PCM2902 chipset, detailed specifications for which may be found [here](http://www.ti.com/lit/ds/symlink/pcm2902.pdf). 

600 ohm in-line XLR attenuators (-20dB) are recommended for installation in +4dBu radio broadcast chain. 

When the [USB to XLR cable](https://openbroadcaster.pro/hardware/xlr-cable-openbroadcaster-player) is connected, both input and output may be routed through balanced XLR connectors.  When using the inputs on the adapter for audio bypass, source programming is muted during playback of alert messages. After the message completes, source programming resumes. 

To use the XLR cable with the Alert Player:

### Connect the cables
{:toc}

  1. Connect the __USB__ end to any one of the USB ports on the Player unit. The adapter MUST be connected before_power up for the system to auto-configure the adapter. 
  1. Connect the __male XLR__ output connectors to the inputs of your sound board, transmitter or switching relay.
  1. Connect the __female XLR__ input connectors to the output of your audio source. Use in-line attenuators (-20dB) on the inputs if connecting to +4dBu line level audio sources.
 
### Configure Audio
{:toc}

   * On the __Audio Visualization__ Tab, set audio output and input mode to JACK , using port names *openbroadcasterout* and *openbroadcasterin* respectively. Enable the __Audio In Source__ setting, if using a line-in source. Disable the *Test Signal*.  __If the audio mode settings are changed, reboot.__
   * If using the GPIO switching Relay, connect a serial cable from the Player to the Switching Relay. On the Emergency Alerts tab, under Advanced Settings, enable the RS-232 DTR Alert signal. The RS-232 Device Filename should be set to the serial port (/dev/ttyS0 for Port 1, /dev/ttyS1 for Port 2).

### Restart the Player
{:toc}

If no audio output is heard, refer to [Troubleshooting](./troubleShooting.html).

When using USB sound cards, there are three aspects of the audio signal quality that must be addressed. To achieve the best possible sound quality, each of these limitations must be addressed in the configuration:

* [Signal Attenuation]()

* [Signal Phase]()

* [Signal Delay]()

<a name="attenuation"></a>

### Signal Attenuation
{:.no_toc}


The USB-XLR adapter is designed for input at -10dBv (0.316V, or 316 mV). Transmitter feed signals are typically +4Bu (1.228V).
The difference, in dB, between +4 dBu and -10 dBv is -11.78 dB, or about -12 dB. Therefore, between 10dB and 20 dB of attenuation is recommended to avoid distortion of +4dBv input signals. 

In-line attenuators are available at [openbroadcaster.pro]() .
 
![ XLR Pad](/img/pad.jpeg ){: .xlrpad} 

Instructions for DIY "H" or "T" pads may be found on the [workbench](#workbench).

<a name="phase"></a>

### Signal Phase
{:.no_toc}

The INPUTS on the USB-XLR adapter are wired are out of phase, causing a muffled or variable output signal. To fix, you will need to swap wires to pins 2 and 3 (i.e the red and white wires) in ONLY ONE of the female XLRs. This will require solder and a soldering iron.

![ XLR Pins](/img/xlr.png ){: .xlr}    ![ XLR Pins](/img/pins.png ){: .pins}

<a name="delay"></a>

### Signal Delay
{:.no_toc}
The USB-XLR adaptor introduces a signal delay of ~ 0.5 sec. To overcome delay, it is necessary to use a switching relay that interrupts the source signal to inject an Alert Message. 

![ Relay Box](/img/relay_box.jpg ){: .usb-xlr} A switching relay is not dependant on the Alert Player for functioning, and in the event of power failure would continue to pass thru the source signal (however, relays require power to be able to switch to the Alert feed). Configuration of the Alert Player to issue GPIO DTR signals to the relay are covered in [Getting Started](gettingStarted.html#gpio). 

Pre-built Switching relays are available at [openbroadcaster.pro](https://openbroadcaster.pro/rs232-gpio-mechanical-relay).


