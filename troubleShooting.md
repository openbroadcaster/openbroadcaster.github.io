---
layout: default
title: troubleShooting
---

<a name="troubleshooting"></a>

## Troubleshooting Audio
{:.no_toc}

<br /><a name="mixer"></a>

### Jack Mixer
{:.no_toc}

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

 __To restore the original configuration of jack.plumbing, without the jack-moxer control, edit ~/.jack.plumbing file to define the following connections:__

   obsuser@obsource:~$ `nano ~/.jack.plumbing`

   ~~~~
   #connect Audio Inputs to OpenBroadcaster Inputs
   (connect "system:capture_1" "openbroadcasterin:in_audiosrc_1")
   (connect "system:capture_2" "openbroadcasterin:in_audiosrc_2")
   
   #Connect Openbroadcaster Outputs to Audio Outputs
   (connect "openbroadcasterout:out_audiosink_1" "system:playback_1")
   (connect "openbroadcasterout:out_audiosink_2" "system:playback_2")
   ~~~~


## Workbench
{:.no_toc}

<a name="workbench"></a>

### DIY Attenuators
{:.no_toc}

'H' or 'T' pads may also be fabricated to accomplish the same level of attenuation.For a balanced signal, use an H-Pad: input\_impedance=30k &Omega;, output\_impedance=10k &Omega;. The example below provides approximately -20dB of attenuation using resistors R 1/2= 12k &Omega;; R 2=3.3k &Omega;; R 3/2=3.3k &Omega; (ground wires should also be connected).
 
![ H Pad](/img/hpad.png ){: .hpad}



