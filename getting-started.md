---
layout: default
title: Getting-Started
permalink: /Getting-Started
---

## Getting-Started
{:.no_toc}

* TOC
{:toc}

## BEFORE YOU BEGIN
{:toc}

Applies to supported hardware appliances 4X - 5X series; Media Player, Alert Player and OpenBox.

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

On the initial run of machines with pre-installed versions of OpenBroadcaster, the user is forced to change the factory default password. Once the password has been set, the user account will login automatically. 

Enter the default password **'obsuser'** (twice to re-enter the password), followed by a new password (you will have to re-enter the new password). 

Passwords must be a minimum of 8 characters and contain at least two of the following character types:

   - Lowercase Alphabetical (a, b, c, etc.)
   - Uppercase Alphabetical (A, B, C, etc.)
   - Numerics (0, 1, 2, etc.)
   - Special Characters (@, %, !, etc.)

__If you forget or lose the password, you'll need to reimage the unit and start over. Be sure to record the password in a safe place.__ 

#### 4. Change the default Dashbord password
{:.no_toc}

Change the default **(admin/admin)** user and password for the Player dashboard. Save and restart for passwords to take a effect.  A RED screen will notifiy default passwords are still being used (security risk). 

<a name="update"></a>

## Software Updates
{:toc}

__REMEMBER TO CHECK FOR [UPDATES](#update) BEFORE INITIAL SETUP, AND PRIOR TO REPORTING ISSUES TO ENSURE THE MOST CURRENT VERSION IS RUNNING.__

Updating the software ensures the most current version of the application is running. To obtain and install updates, click the Update button in the dashboard Admin menu

![Update Player Utilities](/img/updater.png ){: .updater} 

__NOTE: Utilities for displaying current version and updating the Player are on the Admin Tab of the [Dashboard](#dash).__ 

After updating the Player, restart the Player to the load changes to the Dashboard layout.

<a name="player"></a>

# OBServer

__Open Box__ installation contains both __OBServer__ and __OBPlayer__ components of the [OpenBroadcaster framework](https://openbroadcaster.com/openbox) as a stand alone applicance.

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



