var shown = 0;
var path = "";
var id= "#"+shown;

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
            $("#stall").click(function(){//for buttons of the option2 class
                newPath();
                path = "stall";
                nextElement();
            })
            $("#hands").click(function(){//for buttons of the option2 class
                newPath();
                path = "hands";
                nextElement();
            })
        $("#walking").click(function(){//for buttons of the option2 class
            newPath();
            path = "walking";
            nextElement();
        })
            $("#stop").click(function(){//for buttons of the option2 class
                newPath();
                path = "stop";
                nextElement();
            })
            $("#goalong").click(function(){//for buttons of the option2 class
                newPath();
                path = "goalong";
                nextElement();
            })
                $("#callout").click(function(){//for buttons of the option2 class
                    newPath();
                    path = "callout";
                    nextElement();
                })
                $("#silent").click(function(){//for buttons of the option2 class
                    newPath();
                    path = "silent";
                    nextElement();
                })
    
    $("#romance").click(function(){//for buttons of the option2 class
        newPath();
        path = "romance";
        nextElement();
    })
        $("#runClass").click(function(){
            newPath();
            path = "runClass";
            nextElement();
        })
        $("#walkClass").click(function(){
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
})

// function to show the next element and increase shown counter
function nextElement(){
    if(path != ""){
        id = "#"+ path + shown;
    }else{
        id= "#" + shown;
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
function branchingPath(){
    if(path != ""){
        id = "#"+ path + shown;
    }else{
        id= "#" + shown;
    }
    console.log(id);
    $(id).fadeIn();
    shown += 1;
	if($(".choice").is(":visible")){
		$(".next").hide();
	}
}
