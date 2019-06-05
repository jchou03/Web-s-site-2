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
        path = "normal";
        newPath();
        nextElement();
    })
    $("#depression").click(function(){//for buttons of the option2 class
        path = "depression";
        newPath();
        nextElement();
    })
    $("#bathroom").click(function(){//for buttons of the option2 class
        path = "bathroom";
        newPath();
        nextElement();
    })
    $("#romance").click(function(){//for buttons of the option2 class
        path = "romance";
        newPath();
        nextElement();
    })
    $("#comedy").click(function(){//for buttons of the option2 class
        path = "comedy";
        newPath();
        nextElement();
    })
    $("#chaos").click(function(){//for buttons of the option2 class
        path = "chaos";
        newPath();
        nextElement();
    })
})

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

function newPath(){
    for (var i = 0; i < shown; i++) {
        $("#" + i).hide();
    }
    shown = 1;
    $(".next").fadeIn();
}
