// Where the questions are stored.
// export {};
var database = firebase.database();
var ref = database.ref("/");

console.log("lol");
$("#questionBtn").click(function(){
    console.log("FIRE");
    ref.push({
        question:{text: $("#questionInput").val(), user: $("#questionUsername").val()}
    });
    display();
})

function display(){
    $("body").html(
        // snapshot.forEach((a) => {
        //     console.log(a.val().question.text);
        // });
    );
}