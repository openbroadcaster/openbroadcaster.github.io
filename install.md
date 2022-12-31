---
layout: default
title: Install
permalink: /install
---

## Installation
{:.no_toc}

* TOC
{:toc}

## BEFORE YOU BEGIN
{:.no_toc}

This guide will assist in the initial setup of both OBPlayer and OBServer backend application infrastructure. Once these applications are setup and running, proceed to the [Quick Start](https://support.openbroadcaster.com/quick-start/) for provisioning instructions.

### Minimum System Requirements
{:toc}

#### OBServer

Item 	  |    Description
------------ | -------------
Processor | 1GHz 64 bit CPU. ARM, Intel or Pi 
Memory | 4GB of RAM
Storage | 128GB 
Display |	No display is required for the web server
Framework |	PHP, MySQL, Nginx and Gstreamer 

Recommended. Should be a \*nix system. Debian 10 or Ubuntu 20.04 LTS. Runs as a process on CLI in a VM. The exact requirements will depend on the specific way OBServer is used, and the load from users. 

#### OBPlayer

Item 	  |    Description
------------ | -------------
Processor |	1GHz 64 bit CPU. ARM, Intel or Pi 
Memory |	4GB RAM
Storage |	128GB 
Display |	None required unless displaying Video or Images
Audio |	Analog Input\Output, USB Interfaces or Digital HDMI\DisplayPort
Video |	Minimum 640x480 screen resolution
Framework |	Python and Gstreamer 

Recommended. Should be a \*nix system. Debian 10 or Ubuntu 20.04 LTS. Runs as a process on CLI in a VM. Desktop is optional. 

[Compatible Hardware](https://support.openbroadcaster.com/accessories#supported-hardware) 

[ALSA Supported Soundcards](https://www.alsa-project.org/main/index.php/Matrix:Main)

### 1. Install OBServer
{:toc}

<a name="observer-install"></a>

    OpenBroadcaster - OBServer Installation Instructions

    These instructions are an alternative to using ob.installer.sh

    Note: When using special characters in the password, they need to use single quotes instead of double quotes when they echo the string 

    1. See dependencies.txt for server dependencies.  Mostly PHP/MySQL related, but a few things to support transcoding and media identification. 
   
    2. Copy server files to a web environment (web document root).

    3. Import db/dbclean.sql to a database.

    4. Copy config.sample.php to config.php, Edit as necessary.

    5. Ensure media storage directories are writable by the web server.

    6. In the web document root, create 'assets' and 'assets/uploads' directories. These directories should be writable by the web server.
   
    7. The database import includes one user. The username is admin. The password must be updated:

    /var/www/observer/tools/cli/ob passwd <username> 
   
    8. Check for available updates to verify your installation and apply any required updates.

    /var/www/observer/tools/cli/ob updates run

    OpenBroadcaster CLI Tool. Run ob <command>.

    Commands:
    check                 check installation for errors                             
    cron run              run scheduled tasks                                       
    updates list          list available updates                                    
    updates run           run available updates                                     
    passwd <username>     change password for user
   
    For advanced instructions see https://support.openbroadcaster.com/install

_Source:_ [Install.txt](https://github.com/openbroadcaster/observer/blob/main/install.txt)

#### Dependencies
{:toc}

~~~~
apache2 apg festival imagemagick libav-tools libavcodec-extra libavfilter-extra mysql-server php7.0 php7.0-mysql php7.0-mbstring php7.0-xml php7.0-gd php7.0-curl php7.0-imagick vorbis-tools
~~~~

__**__ If libav-tools package is not available, install ffmpeg package instead, and symlink the following:

~~~~
ln -s /usr/bin/ffmpeg /usr/local/bin/avconv
ln -s /usr/bin/ffprobe /usr/local/bin/avprobe
~~~~

#### Web Updates
{:toc}

#### Command Line Check
{:toc}

![CLI Utilities](/img/ob_cli_check.png){: .cli install check} 

Command Line Tool shows no errors

CHECK FOR [UPDATES](#update) Prior to reporting issues to ensure the most current version is running


#### Advanced Configuration
{:toc}

[Toubleshooting Guide](https://support.openbroadcaster.com/troubleshooting#post-installation-observer-troubleshooting)

__Web Server__

Assuming your DNS is configured, you should be able adjust ob.apache.conf to your system and copy it to the appropriate spot for your machine, restart apache, and browse to //Your_IP/ to access your server. Login in with username admin and the password you set for the Admin user. 

__Setup and Configure Email__

Setup outgoing mail service using __exim4__ :

1. Open a `Terminal Emulation` console
2. Run the command `sudo apt-get update; sudo apt-get install exim4
3. Run the command `sudo dpkg-reconfigure exim4-config
4. Choose 'Smarthost with no local mail', accept the defaults up to smarthost, enter a valid mail server (you'll need a mail account there) as the outgoing smarthost, then accept the defaults to the end. The Mail Transfer Agent will restart.
5. Edit the exim4 password file `sudo nano /etc/exim4/passwd.client` and enter a valid outgoing email account, using the format "target.mail.server.example:login:password"

__Sample Notification Email__ 

From: noreply@openbroadcaster.com Subject: OpenBroadcaster OBPlayer Warning This is a warning that Player "CALLSIGN XXX.X FM" has not connected for "schedule" in the last hour. Please take steps to ensure this device is functioning properly. 

__Email notifications of problems__


Email Notification Alerts

When a playlog, schedule or media sync hasn’t been received from a remote Player in 60 minutes, an advisory email will be sent to the Admin user address from the server indicating there is a problem that needs attention.  There is no interface for configuring it (as long as the cron is being run). You have to add some rows to the 'notices' table (phpMyAdmin would make this pretty straightforward). Add rows as follows:

ID: (this is automatic, leave blank) event: device_last_connect_schedule_warning, device_last_connect_playlog_warning, or device_last_connect_emergency_warning.

These are three different event types - the system will look for a failure to connect in the last hour based on these three different requests (schedule, playlog, or emergency data). So you will probably want one row for each.

device_id: the ID of the device you want email notifications for email: the email address where the notifications should be sent to toggled: set to 0; this is what prevents multiple warnings from going out. As soon as there is a failure, this gets set to '1' and an email is sent out. as soon as the system looks to be backup and running, this gets set back to '0' automatically.

The idea here is that there is one email going out per failure.
EXAMPLE

    INSERT INTO notices (event, device_id, email, toggled) VALUES ('device_last_connect_schedule_warning', 1, 'admin1@dom.com', 0);
    INSERT INTO notices (event, device_id, email, toggled) VALUES ('device_last_connect_playlog_warning', 1, 'admin1@dom.com', 0);
    INSERT INTO notices (event, device_id, email, toggled) VALUES ('device_last_connect_emergency_warning', 1, 'admin1@dom.com', 0);
    INSERT INTO notices (event, device_id, email, toggled) VALUES ('device_last_connect_emergency_warning', 1, 'admin2@dom.com', 0);

### 2. Install OBPlayer
{:toc}

<a name="obplayer-install"></a>

    OBPlayer Installation Instructions

    1. See [dependencies.txt](https://github.com/openbroadcaster/obplayer/blob/main/dependencies.txt) for player dependencies (Debian 10/Ubuntu 20.04 & above)

    2. Run "bash obplayer_check" or "bash obplayer_loop -d" or "bash obplayer_check -h" for help

    3. Config files settings.db generated on first run in ~/.openbroadcaster

    4. Http admin panel http://<IP_of_Player_Device>:23233 default user = admin default password = admin

    5. Configure tabbed menus

    6. Restart the player

    __NOTE:__ _User required to change login passwords on first login using the defaults._

    Connect RJ45 to a network with a router handing out DHCP IP addresses.

_Source:_ [install.txt](https://github.com/openbroadcaster/obplayer/blob/main/install.txt)

#### Dependencies
{:toc}

~~~~
ntp python3 python3-pycurl python3-openssl python3-apsw python3-magic python3-dateutil python3-requests python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-gdkpixbuf-2.0 gir1.2-pango-1.0 python3-gst-1.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0 gir1.2-gst-rtsp-server-1.0 gstreamer1.0-tools gstreamer1.0-libav gstreamer1.0-alsa gstreamer1.0-pulseaudio gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly ffmpeg
~~~~

__Ubuntu__

~~~~
ubuntu-restricted-addons ubuntu-restricted-extras 
~~~~

__Extras__ _(not installed with Apt)_

Needed for SSL dashboard

~~~~
pip3 install passlib[bcrypt] 
~~~~

Needed in case it wasn't installed with Apt

~~~~
pip3 install apsw
~~~~

__Recommended for CATV Video Playout__

~~~~
gstreamer1.0-vaapi mesa-vdpau-drivers
~~~~

__CAP Alerting onboard TTS__

~~~~
espeak mbrola mbrola-en1 mbrola-us1 mbrola-us2 mbrola-us3 mbrola-fr1 mbrola-fr4
~~~~

__POLLY AWS Voices in the alerts module__

~~~~
pip3 install boto3 
~~~~

__RS-232 trigger option in the alerts module__

~~~~
python3-serial
~~~~

__Sharing multiple OBPlayers with a local media library__

~~~~
cifs-utils
~~~~

__Command Line tool for PulseAudio__

~~~
pip3 install pulsectl         
~~~~

__Off-air audio log and SDR FM Receiver USB Dongle__

~~~~
pip3 install pyrtlsdr         
~~~~

__Include if using the news feed override__

~~~~
pip3 install inotify
~~~~ 

__Note:__ pip3 pkg not included in apt-get; must be installed using pip3

#### Web Updates
{:toc}

__NOTE__ _Utilities for displaying current version and updating the Player are on the Admin Page of the [Dashboard](#dash)._

Updating the software ensures the most current version of the application is running. To obtain and install updates, click the Update button in the dashboard Admin menu. After updating the Player, restart the Player to the load changes to the Dashboard.

![Update Dashboard Utilities](/img/obplayer-updates.png){: .obplayer updates} 

Player is up to date

#### Advanced Configuration
{:toc}

[Toubleshooting Guide](https://support.openbroadcaster.com/troubleshooting)

__Example Installation__

Open Terminal and from your home directory run:

~~~~
mkdir /usr/share/obplayer
~~~~

Then go to this directory

~~~~
cd /usr/share/obplayer
~~~~

In the empty target/installation directory run

~~~~
sudo git clone https://github.com/openbroadcaster/obplayer.git ./
~~~~

_Defaults to Main Branch_

__Change Branch during install__

~~~~
sudo git clone -b develop https://github.com/openbroadcaster/obplayer.git ./
~~~~

_Example using -b (develop branch)_

__2FA (2 Factor Authentication)__

You'll need to have a key setup on target machine and run

~~~~
git clone git@github.com:openbroadcaster/obplayer.git 
~~~~~

or

~~~~
git clone -b develop git@github.com:openbroadcaster/obplayer.git
~~~~

OBPlayer is now setup with latest code ready to use

## Running OBPlayer for first time

From the install directory ie. /usr/share/obplayer run:

~~~~
bash obplayer_check
~~~~

or

~~~~
bash obplayer_loop -d
~~~~

_using -d (debug) displays useful start up info_ 

__TechTip__ Resetting Lost or Admin passwords cannot be retrieved easily. Config files containing user and machine settings are located in the hidden ~/.openbroadcaster folder within the users home directory.  To reset admin or lost passwords may be recovered by editing the sqlite DB file `settings.db` or simply deleting it and restarting obplayer. On restart obplayer will recreate this DB with default values and prompts for new passwords.
{: .alert .alert-info}
