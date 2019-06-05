var shown = 0;
var path = "";
var id= "#"+shown;
var oldPath = "";
var oldShown = 1;

$(document).ready(function(){    
    // hide all of the text, but make it so each one can individually be shown
    $(".hide > p").addClass("hideOnStart");
    $(".hideOnStart").hide();
    // when clicking the button, show the next part of the story
	$("#" + shown).fadeIn();
    shown += 1;
    $(".next").click(function(){//for buttons of the next class, it cycles through
        nextElement();
    })
    $("#normal").click(function(){//for buttons of the option1 class
        newPath();
        path = "normal";
        nextElement();
    })
	$("#sleep").click(function(){//for buttons of the option1 class
        newPath();
        path = "sleep";
        nextElement();
    })
	$("#awake").click(function(){//for buttons of the option1 class
        newPath();
        path = "awake";
        nextElement();
    })
    
    $("#depression").click(function(){//for buttons of the option2 class
        newPath();
        path = "depression";
        nextElement();
    })
        $("#bathroom").click(function(){//for buttons of the option2 class
            newPath();
            path = "bathroom";
            nextElement();
        })
    
    $("#romance").click(function(){//for buttons of the option2 class
        newPath();
        path = "romance";
        nextElement();
    })
        $("#runClass").click(function(){
            oldPath = "romance";
            oldShown = shown;
            newPath();
            path = "runClass";
            nextElement();
        })
        $("#walkClass").click(function(){
            oldPath = "romance";
            oldShown = shown;
            newPath();
            path = "walkClass";
            nextElement();
        })

    $("#comedy").click(function(){//for buttons of the option2 class
        newPath();
        path = "comedy";
        nextElement();
    })
    
    $("#chaos").click(function(){//for buttons of the option2 class
        newPath();
        path = "chaos";
        nextElement();
    })
	$("#Accept").click(function(){
            newPath();
            path = "Accept";
            nextElement();
        })
	$("#Decline").click(function(){
           newPath();
           path = "Decline";
           nextElement();
        })
		$("#GoToSchool").click(function(){
           newPath();
           path = "GoToSchool";
           nextElement();
        })
		$("#Skip").click(function(){
           newPath();
           path = "Skip";
           nextElement();
        })
		$("#SocialInteraction").click(function(){
         	  newPath();
        	   path = "SocialInteraction";
        	   nextElement();
       		 })
			$("#WhatIsSociality").click(function(){
         	  newPath();
         	  path = "WhatIsSociality";
         	  nextElement();
       		 })
})

// function to show the next element and increase shown counter
function nextElement(){
    id= "#" + path + shown;
    if(!($(id).length)){
        id="#"+ oldPath + oldShown;
        path = oldPath;
        shown = oldShown;
        oldPath="";
        oldShown=1;
    }
    
    console.log(id);
    $(id).fadeIn();
    shown += 1;
	if($(".choice").is(":visible")){
		$(".next").hide();
	}
}

// function to reset the shown counter to 1 and hide all of the previous parts
function newPath(){
    for (var i = 0; i < shown; i++) {
        $("#" + path + i).hide();
    }
    shown = 1;
    $(".next").fadeIn();
}

// function for branching paths out that plan on coming back together
function branchingPath(oldPath, oldShown){
    id = "#"+ oldPath + oldShown;
    console.log(id);
    $(id).fadeIn();
    shown += 1;
	if($(".choice").is(":visible")){
		$(".next").hide();
	}
}
