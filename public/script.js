
$(document).ready(function () {
    $(".carousel").carousel();
    $(document).on("click", "a", function () {
        var projectId = $(this).attr("id");
        if (projectId === "EatDaBurger!") {
            window.location("https://eat-burger-da.herokuapp.com/");
        } else if (projectId === "Friend Finder") {
            window.location("https://new-friend-finderapp.herokuapp.com/");
        } else if (projectId === "Whats Up App") {
            window.location("https://whatsup-app.herokuapp.com/");
        } else if (projectId === "Headline News Scraper") {
            window.location("https://news-scraper-egs.herokuapp.com/");
        }
    });
});
