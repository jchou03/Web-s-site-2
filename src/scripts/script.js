$(document).ready(function(){
    var shown = 0;
    $(".hide > p").addClass("hideOnStart");//adds p in hide div
    $(".hide > button").addClass("hideOnStart");//adds button in hide div
    $(".hideOnStart").hide();//hides all in hideonstart class
    $("#3").hide();
    $(".content").css("background-color","aqua");//sets background color to aqua
    
    $(".next").click(function(){//for buttons of the next class, it cycles through
        console.log(shown);
        $("#" + shown).hide();
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
