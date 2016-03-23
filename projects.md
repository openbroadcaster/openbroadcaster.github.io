---
layout: default
title: projects
---

<h2>Our Projects</h2>
<p>The OpenBroadcaster open source platform is released under the __Affero GPLv3__ license. Access to source code repositories at Github is provided below.</p>

<div class="row">
    {% for project in site.data.projects %}
    <div class="col-sm-12 col-lg-6">
        <div class="thumbnail">
            <h4>{{ project.name }}</h4>
            <p class="brief">{{ project.brief }}</p>
            <a href="{{ project.github }}" class="btn btn-default col-xs-12" role="button"><i class="fa fa-github"></i> View on GitHub</a>
            <div class="clearfix"></div>
        </div>
    </div>
    {% endfor %}
</div>
