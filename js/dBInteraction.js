// Where the answers are stored.
function get_database_path() {
    return "/";
  }
  
export function get_database_snapshot(callback) {
    var database = firebase.database();
    var ref = database.ref(get_database_path());
    ref.once("value").then(function(snapshot){
      callback(snapshot);
    });
}

export function forEachOverDatabase() {
    get_database_snapshot(function(snapshot){
      // Clear the previous display of the bookshelf.
      $("#displayQandA").empty();
  
      snapshot.forEach(function (questionItem) {
        var questionDisplay = questionItem.val().text;
        var questionUserDisplay = questionItem.val().user;
        var val = questionItem.val();
        // use let?
        if (val.question){
          $("#displayQandA").append(display(val.question));
        }
      });
    });
  }
  
  function display(question) {
    var displayString = "<p class='question'> Question: " + question.text + "</p> \n";
    displayString += "<p class='username'> Username: "  + question.user + "</p>"
    return $("<div>", {class: "questionSection"}).html(displayString);
    console.log(question.text);
  }
