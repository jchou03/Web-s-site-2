$(document).ready(function(){
    var shown = 0;
    var path = "";
    var id= "#"+shown;
    // hide all of the text, but make it so each one can individually be shown
    $(".hide > p").addClass("hideOnStart");
    $(".hideOnStart").hide();
    // when clicking the button, show the next part of the story
	$("#" + shown).fadeIn();
    
    $(".next").click(function(){//for buttons of the next class, it cycles through
        if(path != ""){
            id = "#"+ path + shown;
        }else{
            id= "#" + shown;
        }
        console.log(id);
        $(id).fadeIn();
        shown += 1;
		if($(".option1").is(":visible") || $(".option2").is(":visible")){
			$(".next").hide();
		}
    })
    if(path == "normal"){
        console.log("banana");
    }
    $(".option1").click(function(){//for buttons of the option1 class, it goes forwards 1
        path = "normal";
        id = "#"+ path + shown;
        console.log(id);
        shown += 1;
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
        $(id).fadeIn();
		$(".next").fadeIn();
    })
    
    $(".option2").click(function(){//for buttons of the option2 class, it goes forward 5
        path = "depression";
        id = "#"+ path + shown;
        console.log(id);
        shown += 1;
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
		$(id).fadeIn();
		$(".next").fadeIn();
    })
    $(".option4").click(function(){//for buttons of the option2 class, it goes forward 5
        path = "comedy";
        id = "#"+ path + shown;
        console.log(id);
        $(id).fadeIn();
        shown += 1;
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
    })
	    })
    $(".option5").click(function(){
        path = "chaos";
        id = "#"+ path + shown;
        console.log(id);
        $(id).fadeIn();
        shown += 1;
        for (var i = 0; i < shown; i++) {
			$("#" + i).hide();
		}
    })
})

