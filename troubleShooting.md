---
layout: default
title: troubleShooting
---

<a name="troubleshooting"></a>

## Troubleshooting Audio
{:.no_toc}

When using USB sound cards, there are three aspects of the audio signal quality that must be addressed:

* TOC
{:toc}

To achieve the best possible sound quality, each of these limitations must be addressed in the configuration.

### Signal Attenuation
{:toc}

The USB-XLR adapter is designed for input at -10dBv (0.316V, or 316 mV). Transmitter feed signals are typically +4Bu (1.228V).
The difference, in dB, between +4 dBu and -10 dBv is -11.78 dB, or about -12 dB. Therefore, between 10dB and 20 dB of attenuation is recommended to avoid distortion of +4dBv input signals. 

In-line attenuators are available at [openbroadcaster.pro]() .
 
![ XLR Pad](/img/pad.jpeg ){: .xlrpad} 

Instructions for DIY "H" or "T" pads may be found on the [workbench](#workbench).

### Signal phase 
{:toc}

The INPUTS on the USB-XLR adapter are wired are out of phase, causing a muffled or variable output signal. To fix, you will need to swap wires to pins 2 and 3 (i.e the red and white wires) in ONLY ONE of the female XLRs. This will require solder and a soldering iron.

![ XLR Pins](/img/xlr.png ){: .xlr}    ![ XLR Pins](/img/pins.png ){: .pins}

### Signal delay
{:toc}

The USB-XLR adaptor introduces a signal delay of ~ 0.5 sec. To overcome delay, it is necessary to use a switching relay that interrupts the source signal to inject an Alert Message. A switching relay is not dependant on the Alert Player for functioning, and in the event of power failure would continue to pass thru the source signal (however, relays require power to be able to switch to the Alert feed). Configurtion of the Alert Player to issue GPIO DTR signals to the relay are covered in [Getting Started](gettingStarted.html#gpio). Pre-built Switching relays are available at [openbroadcaster.pro](https://openbroadcaster.pro/rs232-gpio-mechanical-relay)

<a name="mixer"></a>

### Jack Mixer

There are no input level controls "out-of-the-box" with Jack audio, so if further control over the input level is desired, the configuration must be updated to include jack-mixer. The jack-mixer programs uses a sub process called __jack plumbing__ to keep input and output channels alive while signals are reconnecting. The default jack.plumbing configuration needs to be modified to include the jack-mixer control.

~~~~
obsuser@obsource:~$ `sudo mv /etc/jack.plumbing /etc/jack.default`
~~~~

Then, create a new configuration file in the home directory:

~~~~
obsuser@obsource:~$ `nano ~/.jack.plumbing`
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


![ JackMixer Screenshot](/img/jack.png ){: .jack}

NB: When using jack mixer, the jack_mixer control must be opened manually from the Panel Icon to activate the control. Once the control is closed, it no longer has any effect on the audio signal. The control must be visible and indicating signal bars if signal is to be audible. The mixer control must be reopened after a reboot.

## Workbench
{:.no_toc}

<a name="workbench"></a>

### DIY Attenuators

'H' or 'T' pads may also be fabricated to accomplish the same level of attenuation.For a balanced signal, use an H-Pad: input\_impedance=30k &Omega;, output\_impedance=10k &Omega;. The example below provides approximately -20dB of attenuation using resistors R 1/2= 12k &Omega;; R 2=3.3k &Omega;; R 3/2=3.3k &Omega; (ground wires should also be connected).
 
![ H Pad](/img/hpad.png ){: .hpad}



