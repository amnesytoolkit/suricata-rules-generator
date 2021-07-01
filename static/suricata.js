
if($("#generate").prop("checked")){
    removeInput("#pcre-label");
    removeInput("#pcre-tr");
}
$("#generate").click(function() {
    if($("#generate").prop("checked")){
        removeInput("#pcre-label");
        removeInput("#pcre-tr");
    }else {
        addInput("#pcre-label");
        addInput("#pcre-tr");
    } 
});


function removeInput(id){
    $(id).addClass("nascondimi");;
}
function addInput(id){
    $(id).removeClass("nascondimi");
}

console.log("prima")
var action = "alert";
$('input[name="action"]').on('click', function(event) {
    action = event.target.id;
    generateRule();
});

var protocol = "http";
$('input[name="protocol"]').on('click', function(event) {
    protocol = event.target.id;
    generateRule();
});

var direction = "->";
$('input[name="direction"]').on('click', function(event) {
    direction = event.target.value;
    generateRule();
});

var name = "test";
$('#name').on('input', function(event) {
    name = event.target.value;
    if(name == ""){
        name = "test";
    }
    generateRule();
});

var source = "any";
$('#Source').on('input', function(event) {
    source = event.target.value;
    if(source == ""){
        source = "any";
    }
    generateRule();
});

var destination = "any";
$('#Destination').on('input', function(event) {
    destination = event.target.value;
    if(destination == ""){
        destination = "any";
    }
    generateRule();
});

var sport = "any";
$('#sourceport').on('input', function(event) {
    sport = event.target.value;
    if(sport == ""){
        sport = "any";
    }
    generateRule();
});

var dport = "any";
$('#destinationport').on('input', function(event) {
    dport = event.target.value;
    if(dport == ""){
        dport = "any";
    }
    generateRule();
});


var url_decode = "url_decode; ";
$('#url_decode').change(function(event) {
    console.log("Ciao");
    if ($("#url_decode").prop("checked")){
        url_decode = "url_decode; ";
    }
    else{
        url_decode = "";
    }
    console.log($("#url_decode").prop("checked"))
    generateRule();
});
var rule = "";

function generateRule(){
    rule = action + " " + protocol + " " + destination + " " + dport + " " + direction + " " + source + " " + sport + " ";
    rule += "(msg: \"" + name + "\"; " + url_decode + ")"
    $("#output").text(rule);
}
generateRule();

// url decoder
// insert flow -> https://suricata.readthedocs.io/en/suricata-6.0.0/rules/flow-keywords.html
// docs -> https://suricata.readthedocs.io/en/suricata-6.0.0/rules/intro.html