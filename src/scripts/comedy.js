    $(document).ready(function(){
        $("#updog").hide();
    });
    
function whatsLigma() {
    var form = document.forms["ligma"]["didYouSayIt"].value;

    if (form.toLowerCase()=="what's ligma"||form.toLowerCase()=="whats ligma") {
        document.getElementById("updog").innerHTML = "ligma balls gottem"
        $("#updog").show();
    } else if(form==""){
        document.getElementById("updog").innerHTML = "bruh say something"
    }
}