---
layout: default
title: live-assist
permalink: /LIVE-Assist
---

## LIVE Assist

Mobile HTML5 Interface of OBPlayer

Accessed at IP and Port

	http://IP_of_the_OBPlayer_at_Studio:23456

### Screen Elements
{:.no_toc}

**Hot Buttons**

![Hot Buttons](/img/hot_buttons.png){: .screen shot} 

Created in Server as PL (consisting of media items to appear as buttons) and dragged to bottom of LA Play List. Each PL added creates a column of buttons in LA interface.

<br/>

**Station Line In**

Grey system button (Top Right) Line In audio source is local input on the player computer at the studio. It is not a remote connection. In the case of station with a soundcard, the digital satellite feed goes into that input. Works in conjunction with **Line In** scheduling feature feature on the server, where you can schedule line in content such as mixing board or satellite receiver. This is the exact some input that's connected to the line in button on the live assist. 

**Remote RTP Incoming**

![System Buttons](/img/system_buttons.png){: .screen shot} 

Grey system button (Top Right) Remote RTP when clicked allows playing of live streaming media. Use `local_streamer` tool to receive incoming streams from laptop in field. On remote laptop, audio is encoded from source material, either from local media or from captured LIVE material.

<br/>

### System Buttons

![LIVE Assist System Buttons.png](/server/img/LA_system_buttons.png ){: .screenshot} 

System buttons allow playing 

- line in of local machine

- accept incoming RTP Stream

- over ride to all stations

<br/>
