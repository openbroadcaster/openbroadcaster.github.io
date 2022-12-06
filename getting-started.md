---
layout: default
title: Getting Started
permalink: /getting-started
---

## Getting-Started
{:.no_toc}

* TOC
{:toc}

## BEFORE YOU BEGIN
{:toc}

This guide will assist in the initial setup of both OBPlayer and OBServer backend application infrastructure. Once these applications are setup and running, proceed to the [Quick Start](https://support.openbroadcaster.com/quick-start/) for provisioning instructions.

### Minimum System Requirements
{:toc}

#### OBServer

Item 	  |    Description
------------ | -------------
Processor | 1GHz 64 bit CPU. ARM or Intel 
Memory | 4GB of RAM
Storage | 128GB (Recommended)
Display |	No display is required for the server
Framework |	PHP, MySQL and Gstreamer 

Should be a /*nix system. Debian 10 or Ubuntu 20.04 LTS. Runs as a process on CLI in a VM. The exact requirements will depend on the specific way OBServer is used, and the load from users. 

#### OBPlayer

Item 	  |    Description
------------ | -------------
Processor |	1GHz 64 bit CPU. ARM or Intel 
Memory |	4GB RAM
Storage |	128GB (Recommended)
Display |	None required unless displaying Video or Images
Audio |	Analog Input\Output, USB Interfaces or Digital HDMI\DisplayPort
Video |	Minimum 640x480 screen resolution
Framework |	Python and Gstreamer 

Should be a /*nix system. Debian 10 or Ubuntu 20.04 LTS. Runs as a process on CLI in a VM. Desktop is optional. 

[Compatible Hardware](https://support.openbroadcaster.com/accessories#supported-hardware) 

[ALSA Supported Soundcards](https://www.alsa-project.org/main/index.php/Matrix:Main)

### 1. Install OBServer
{:toc}

<a name="observer-install"></a>

OBServer Installation Instructions

These instructions are an alternative to using [ob.installer.sh](https://github.com/openbroadcaster/observer/blob/main/ob.installer.sh)

*** After install, set `OB_UPDATES_USER` and `OB_UPDATES_PW` in __config.php__ and then run https://YOUR_IP/updates ***

_Administrator login is no longer supported for OB updates since July 2020._

__Note:__ When using special characters in the password, they need to use single quotes instead of double quotes when they echo the string

1. See [dependencies.txt](https://github.com/openbroadcaster/observer/blob/main/dependencies.txt)
 for server dependencies.  Mostly PHP/MySQL related, but a few things to support transcoding and media identification. 

2. Copy server files to a web environment (web document root).

3. Import db/dbclean.sql to a database.

4. Copy config.sample.php to config.php, and edit as necessary.

5. Ensure media storage directories are writable by the web server.

6. In the web document root, create 'assets' and 'assets/uploads' directories.  
   These directories should be writable by the web server.

7. The database import includes one user.  The username is admin.  The password
   must be updated:

   php tools/password_change.php admin newpassword

8. Log into OpenBroadcaster as admin, and access http://ob_install_url/updates/ to
   verify your installation and run any required updates.

_Source_[Install.txt](https://github.com/openbroadcaster/observer/blob/main/install.txt)

#### Dependencies
{:toc}

~~~~
apache2 apg festival imagemagick libav-tools libavcodec-extra libavfilter-extra mysql-server php7.0 php7.0-mysql php7.0-mbstring php7.0-xml php7.0-gd php7.0-curl php7.0-imagick vorbis-tools
~~~~

** If libav-tools package is not available, install ffmpeg package instead, and symlink the following:

~~~~
ln -s /usr/bin/ffmpeg /usr/local/bin/avconv
ln -s /usr/bin/ffprobe /usr/local/bin/avprobe
~~~~

#### Web Updates
{:toc}

![Web Utilities](/img/observer-install-check.png){: .web install check} 

Shows updated system and configuration. Apply updates if available.

#### Command Line Check
{:toc}

![CLI Utilities](/img/ob_cli_check.png){: .cli install check} 

Command Line Tool shows no errors

CHECK FOR [UPDATES](#update) Prior to reporting issues to ensure the most current version is running


#### Advanced Configuration
{:toc}

[Toubleshooting Guide](https://support.openbroadcaster.com/troubleshooting)

### 2. Install OBPlayer
{:toc}

<a name="obplayer-install"></a>

 OBPlayer Installation Instructions

1. See [dependencies.txt](https://github.com/openbroadcaster/obplayer/blob/main/dependencies.txt)
 for player dependencies (Debian 10/Ubuntu 20.04 & above)

2. Run bash "obplayer_check" or bash "obplayer_loop -f". "bash obplayer_check -h" for help

3. Http admin panel http://<IP_of_Player_Device>:23233 default user = admin default password = admin

NOTE: User required to change login passwords on first login with the defaults.

4. Configure tabbed menus

5. Restart the player

 Connect RJ45 to a network with a router handing out DHCP IP addresses.

_Source_ [install.txt](https://github.com/openbroadcaster/obplayer/blob/main/install.txt)

#### Dependencies
{:toc}

~~~~
ntp python3 python3-pycurl python3-openssl python3-apsw python3-magic python3-dateutil python3-requests python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-gdkpixbuf-2.0 gir1.2-pango-1.0 python3-gst-1.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0 gir1.2-gst-rtsp-server-1.0 gstreamer1.0-tools gstreamer1.0-libav gstreamer1.0-alsa gstreamer1.0-pulseaudio gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly ffmpeg
~~~~

Ubuntu

~~~~
ubuntu-restricted-addons ubuntu-restricted-extras 
~~~~

Extras

~~~~
pip3 install passlib[bcrypt] 
~~~~
Needed for SSL dashboard

~~~~
pip3 install apsw
~~~~
Needed in case it wasn't installed with Apt

Recommended for CATV Video Playout

~~~~
gstreamer1.0-vaapi mesa-vdpau-drivers
~~~~

CAP Alerting

Include if using alerts module:

~~~~
espeak mbrola mbrola-en1 mbrola-us1 mbrola-us2 mbrola-us3 mbrola-fr1 mbrola-fr4
~~~~

Include if using POLLY AWS Voices in the alerts module:

~~~~
pip3 install boto3 
~~~~

Include if using RS-232 trigger option in the alerts module:

~~~~
python3-serial
~~~~

Include if sharing multiple OpenBroadcaster players with a local media library:

~~~~
cifs-utils
~~~~

Command Line tool for PulseAudio:

~~~
pip3 install pulsectl         
~~~~

Off-air audio log and SDR FM Receiver USB Dongle:

~~~~
pip3 install pyrtlsdr         
~~~~

Include if using the news feed override:

~~~~
pip3 install inotify
~~~~ 

__Note:__ _pip3 pkg not included in apt-get; must be installed using pip3_

#### Web Updates
{:toc}

__NOTE__ _Utilities for displaying current version and updating the Player are on the Admin Page of the [Dashboard](#dash)._

Updating the software ensures the most current version of the application is running. To obtain and install updates, click the Update button in the dashboard Admin menu. After updating the Player, restart the Player to the load changes to the Dashboard.

![Update Dashboard Utilities](/img/obplayer-updates.png){: .obplayer updates} 

Player is up to date

#### Advanced Configuration
{:toc}

[Toubleshooting Guide](https://support.openbroadcaster.com/troubleshooting)

__TechTip__ Resetting Lost or Admin passwords cannot be retrieved easily. User must change the default password for the Player dashboard. Config files containing user and machine settings are located in the hidden ~/.openbroadcaster folder within the users home directory.  To reset admin or lost passwords may be recovered by editing the sqlite DB file `settings.db` or simply deleting it and restarting obplayer. On restart obplayer will recreate this DB with default values and prompts for new passwords.
{: .alert .alert-info}
