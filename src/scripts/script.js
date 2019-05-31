$(document).ready(function(){
    var shown = 0;
    $(".hideOnStart").hide();
    $(".content").css("background-color","aqua");
    $("#button").click(function(){
        console.log(shown);
        shown += 1;
        $("#" + shown).show();
    })
})