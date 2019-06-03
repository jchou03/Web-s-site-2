$(document).ready(function(){
    var shown = 0;
    $(".hide > p").addClass("hideOnStart");
    $(".hideOnStart").hide();
    $("#3").hide();
    $(".content").css("background-color","aqua");
    $("#button").click(function(){
        console.log(shown);
        shown += 1;
        $("#" + shown).fadeIn();
    })
})