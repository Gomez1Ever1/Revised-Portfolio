$(document).ready(function () {
    $(document).on("click", ".linkTxt", function () {
        var projectLink = $(this).text();
        console.log(projectLink)
        if (projectLink.toLowerCase() === "trivia game") {
            window.location.href = "https://gomez1ever1.github.io/TriviaGame/";
        }
        else if (projectLink.toLowerCase() === "database example") {
            window.location.href = "https://franstrd87.github.io/the-noobs/";
        }
        else if (projectLink.toLowerCase() === "server example") {
            window.location.href = "";
        }
    })
})