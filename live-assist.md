---
layout: default
title: LIVE-Assist
permalink: /live-assist
---
# LIVE Assist
{:.no_toc}

* TOC
{:toc}

Mobile HTML5 Interface of OBPlayer

Accessed at IP and Port 23456 (default)

~~~~
	http://IP_of_the_OBPlayer_at_Studio:23456
~~~~

Enable `Live Assist` in Dashboard. Save and restart player to make active.

![Live Assist Dashboard](/img/LA_Dashboard.png){: .screen shot} 

## Screen Elements




## Hot Buttons

Created in Server as Live Assist PL (consisting of media items to appear as buttons) and dragged to bottom of Play List. Each PL added creates a column of buttons in LA interface.

![Hot Buttons](/img/hot_buttons.png){: .screen shot} 

<br/>

**Station Line In**

Grey system button (Top Right) Line In audio source is local input on the player computer at the studio. It is not a remote connection. In the case of station with a soundcard, the digital satellite feed goes into that input. Works in conjunction with **Line In** scheduling feature feature on the server, where you can schedule line in content such as mixing board or satellite receiver. This is the exact some input that's connected to the line in button on the live assist. 

## Remote RTP Incoming

![System Buttons](/img/system_buttons.png){: .screen shot} 

Grey system button (Top Right) Remote RTP when clicked allows playing of live streaming media. Use `local_streamer` tool to receive incoming streams from laptop in field. On remote laptop, audio is encoded from source material, either from local media or from captured LIVE material.

<br/>

## System Buttons

System buttons allow playing 

* line in of local machine

* accept incoming RTP Stream

* over ride to all stations
