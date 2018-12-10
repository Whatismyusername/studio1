import * as db from './dBInteraction.js';
var database = firebase.database();
var ref = database.ref("/");
db.forEachOverDatabase();
$("#question").hide();
$("#questionBtn").click(function(){
    var questionLength = $("#questionInput").val().length;
    var questionUsernameVal = $("#questionUsername").val();
    if (questionLength >= 10){
        if(questionUsernameVal === ""){
            questionUsernameVal = "Anonymous User";
        }    
        ref.push({
            question:{text: $("#questionInput").val(), user: questionUsernameVal}
        });
    
    }
    else{
        var numLeft = 10 - questionLength;
        alert("You need to enter " + numLeft + " more characters");
    }
    
    db.forEachOverDatabase();
});

$("#answerBtn").click(function(){
    console.log("FIREANSWER");
    ref.push({
        answer:{text: $("#answerInput").val(), user: $("#answerUsername").val()}
    });
});

$(".promptInputs").click(function(){
    $("#question").toggle();
   
});