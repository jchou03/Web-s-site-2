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
    if(path == "normal"){
        console.log("banana");
    }
    $("#normal").click(function(){//for buttons of the option1 class
        path = "normal";
        nextElement();
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
    })
    
    $("#depression").click(function(){//for buttons of the option2 class
        path = "depression";
        nextElement();
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
    })
    $("#romance").click(function(){//for buttons of the option2 class
        path = "romance";
        nextElement();
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
    })
    $("#comedy").click(function(){//for buttons of the option2 class
        path = "comedy";
        nextElement();
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
    })
    $("#chaos").click(function(){//for buttons of the option2 class
        path = "chaos";
        nextElement();
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
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
}