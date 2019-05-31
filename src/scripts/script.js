$(document).ready(function(){
    var shown = 0;
    $("p").hide();
    $(".content").css("background-color","aqua");
    $("#button").click(function(){
        $(".content").append("<p>herro</p>")
    })
})