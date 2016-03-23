var urlToGetAllOpenBugs = "https://api.github.com/repos/openbroadcaster/obplayer/issues?state=open";

$(document).ready(function () {
    $.getJSON(urlToGetAllOpenBugs, function (allIssues) {
        if (allIssues.length ==0) $(bugs).append("No open issues</br>");
        $.each(allIssues, function (i, issue) {
            $(bugs)
                .append("<b>" + issue.number + " - " + issue.title + "</b></br>")
//                .append("created at: " + issue.created_at + "</br>")
//                .append(issue.body + "</br></br></br>");
        });
    });
    $('[data-toggle="tooltip"]').tooltip();
});

