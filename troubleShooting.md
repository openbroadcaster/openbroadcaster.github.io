---
layout: default
title: troubleShooting
---

<a name="troubleshooting"></a>

### Troubleshooting Audio

There are three aspects to the audio signal quality that can be addressed:

    Signal attenuation: Signals at +4dBv require ~15 to 20 dB of attenuation to avoid distortion of input signals
    Signal phase : phase of one of the input connectors to avoid muffled sound
    Signal delay: the use of the USB-XLR adaptor creates a delay of ~ 0.5 sec.

These aspects of sound quality may be improved by following the recommendations


If it is necessary to adjust input levels, reconfigure the jack.plumbing setting to include the jack_mixer control.

First, rename the default configuration file:

obsuser@obsource:~$ `sudo mv /etc/jack.plumbing /etc/jack.default`

NOTE: `sudo` requires confirmation of your user password to use administrative privileges.

Then, create a new configuration file in the home directory:

<a name="adapter"></a>

obsuser@obsource:~$ `nano ~/.jack.plumbing`

~~~~
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

### DIY Attenuators

'H' or 'T' pads may also be fabricated to accomplish the same level of attenuation.For an H-Pad: input\_impedance=30k &Omega;, output\_impedance=10k &Omega;. The example below provides approximately -20dB of attenuation using resistors R 1/2= 12k &Omega;; R 2=3.3k &Omega;; R 3/2=3.3k &Omega; (ground wires should also be connected).
 
![ H Pad](/img/hpad.png ){: .hpad}

Out of Phase

Create a phase shifted cable on one side of input.  If the USB XLR Adapter has been modified to swap phase on either of the inputs, confirm that pins 2 and 3 (NOT 1 and 2) have been swapped.

![ XLR Pins](/img/xlr.png ){: .xlr}    ![ XLR Pins](/img/pins.png ){: .pins}

