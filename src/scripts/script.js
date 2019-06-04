$(document).ready(function(){
    var shown = 0;
    // hide all of the text, but make it so each one can individually be shown
    $(".hide > p").addClass("hideOnStart");
    $(".hideOnStart").hide();
    // when clicking the button, show the next part of the story
    $("#button").click(function(){
        console.log(shown);
        // $("#" + shown).hide();
        shown += 1;
        $("#" + shown).fadeIn();
    })
})
