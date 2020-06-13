---
layout: default
title: Getting_Started
permalink: /Getting-Started
---

## Setup Guide
{:.no_toc}

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

#### 3. Change the default system user password
{:.no_toc}

On the initial run of machines with pre-installed versions of OpenBroadcaster, the user must change the factory default password. Once the password has been set, the user account will login automatically. 

Enter the default password **'obsuser'** (twice to re-enter the password), followed by a new password (you will have to re-enter the new password). 

Passwords must be a minimum of 8 characters and contain at least two of the following character types:

   - Lowercase Alphabetical (a, b, c, etc.)
   - Uppercase Alphabetical (A, B, C, etc.)
   - Numerics (0, 1, 2, etc.)
   - Special Characters (@, %, !, etc.)

__If you forget or lose the password, you'll need to re-image the unit and start over. Be sure to record the password in a safe place.__ 

#### 4. Change the default Dashbord password
{:.no_toc}

Change the default **(admin/admin)** user and password from within the Player dashboard. Save and restart for passwords to take a effect.  A RED screen will notifiy default passwords are still being used (security risk). 

<a name="update"></a>

## Software Updates
{:toc}

__REMEMBER TO CHECK FOR [UPDATES](#update) BEFORE INITIAL SETUP, AND PRIOR TO REPORTING ISSUES TO ENSURE THE MOST CURRENT VERSION IS RUNNING.__

Updating the software ensures the most current version of the application is running. To obtain and install updates, click the Update button in the dashboard Admin menu

![Update Player Utilities](/img/updater.png ){: .updater} 

__NOTE: Utilities for displaying current version and updating the Player are on the Admin Tab of the [Dashboard](#dash).__ 

After updating the Player, restart the Player and refresh the browser (Tip: press F5 on the keyboard) to the load changes to the Dashboard layout.

<a name="player"></a>

# OBServer
__Open Box__ is a media management host that provides scheduled media to properly configured remote __Player__ devices. An __Open Box__ installation contains both __Server__ and __Player__ components of the [OpenBroadcaster framework](https://openbroadcaster.com/openbox) as a stand alone applicance.

### Account Settings
Login to the [OpenBroadcaster Server] application as the `admin` user (default password is 'admin'). Menu options are found along the bottom of the page. 

Using the `account` menu to access the `admin` account settings:

1. Change the `admin` user password.
 * The `admin` user has access to all media, playlists and schedules. As new users are added, they are assigned to a group with the appropriate set of permissions. For example, a `guest` user may browse, but not add/edit/delete items in the media library.
1. Set the `admin` user email
 * When a playlog, schedule or media sync hasn't been received  from a remote Player in 60 minutes, an advisory email will be sent to this address from the server indicating there is a problem that needs attention.
1. Set language preferences 
 * User menus, form fields and system messages are displayed in English by default. Available language options are displayed in a dropdown menu. These settings are __not__ system-wide. Each user may choose their own language settings.
1. Change Theme and Font 
 * Background/foreground color and font options are designed to enhance accessibility of the interface using bright/dark contrast settings or using dyslexia friendly fonts. These settings are __not__ system-wide. Each user may choose their own theme and font settings.

### Create Default Playlist
If a Player cannot locate a schedule of media to be played, it will play the Default Playlist (DPL) in a loop to avoid dead air.
Using the `playlist` menu to create a new playlist: 

1. Provide a `Name` and `Description` for the (DPL).
1. From the media sidebar tab, __drag and drop__ selections to the DPL. As items are added to the list of Playlist Items, the `Total Duration` for all items on the Playlist is updated. Add items to the Playlist until the desired duration is achieved. See [Server Documentation](/server/#playlist) for more details on composing Playlists.

### Provision The Player

Using the `admin` menu to access the `player manager` options:

1. `Expand` existing Player Settings for a defined __Player__, or create a `New Player`.
1. Provide a `Name` and `Description` for the __Player__.
1. Enter the password that will be required for the __Player__ to establish a sync connection to the __Server__.
1. Set the media types that will be available for the __Player__. Ensure the __Player__ is configured properly to handle the assigned media types.
1. Set the `Timezone` that will be used for scheduling shows.
1. Drag the __Playlist__ created in the previous step (DPL) from the Playlist sidebar tab to the __Default Playlist__ landing zone (the area highlighted during the drag operation).
1. Save the Player.

### Sync the Player

Use the [Player Dashboard](#dash) to set the device ID and password, and media sync connection details. Note that the intitial `show lock-in time` will require at least 20 minutes of lead time before playout of a scheduled or default playlist, thus ensuring all required media are downloaded before a show begins.

