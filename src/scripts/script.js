$(document).ready(function(){
    var shown = 0;
    // hide all of the text, but make it so each one can individually be shown
    $(".hide > p").addClass("hideOnStart");
    $(".hideOnStart").hide();
    // when clicking the button, show the next part of the story
    $(".hide > p").addClass("hideOnStart");//adds p in hide div
    $(".hideOnStart").hide();//hides all in hideonstart class
    
    $(".next").click(function(){//for buttons of the next class, it cycles through
        console.log(shown);
        // $("#" + shown).hide();
        shown += 1;
        $("#" + shown).fadeIn();
    })
    
    $(".option1").click(function(){//for buttons of the option1 class, it goes forwards 1
        console.log(shown);
        $("#" + shown).hide();
        shown += 1;
        $("#" + shown).fadeIn();
    })
    
    $(".option2").click(function(){//for buttons of the option2 class, it goes forward 5
        console.log(shown);
        $("#" + shown).hide();
        shown += 6;//goes 1 ahead
        $("#" + shown).fadeIn();
    })
    
})
