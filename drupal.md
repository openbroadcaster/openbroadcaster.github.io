---
layout: default
title: Drupal
permalink: /Drupal
---

Drupal Modules

* TOC
{:toc}

<a name="Drupal"></a>

## Drupal Radio Modules

There are 3 [modules available](https://github.com/openbroadcaster/DrupalRadio) and a custom radio Theme template for Drupal 7.X CMS.

**API Bridge** - Takes info from the backend of an OBServer and presents this for display on a front end Drupal site.  

Includes information that can be placed in a block; `Now playing`, `What played the last 24 hours` and `What has recently been uploaded.`

![API Module](/img/OB_API_Module.png ){: .screen shot} 

**Media Player** - Provides a HTML5 embedded streaming player that plays the stream of your station without needing any additional plugins.  It displays current Name of show, Artist, Song title and Station Logo.

![Streaming Module](/img/OB_Streaming_Module.png ){: .screen shot} 

**Schedule** - Automatically updates the OBServer schedule and show information, dynamically displays to DJ profile and associates show graphics, start and stop times automatically on Front Page of Drupal site.

`Content>Add New Content>Program` Program name __MUST BE IDENTICAL__ to the Show\PL name on media server. When both are identical, they become associated so that when an adjustment is done on scheduler the metadata will sync with the program and and graphic will automatically be updated.

__User Group Permissions__

Host - Add, Update and Delete Program Content.

Content Manager - Add users and assign them to groups. Modify and Delete Programs

![Installed Modules](/img/OB_Modules_Installed.png ){: .screen shot}


