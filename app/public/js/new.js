
// the code below will help to create the 
// When user clicks add-btn
$("#create-cocktail").on("click", function(event) {
  event.preventDefault();
    // Make a newBook object
  var newDrink = {
    name: $("#name").val().trim(),
    ingredient1: $("#ingredient1").val().trim(),
    ingredient2: $("#ingredient2").val().trim(),
    ingredient3: $("#ingredient3").val().trim(),
    ingredient4: $("#ingredient4").val().trim(),
    ingredient5: $("#ingredient5").val().trim(),
    ingredient6: $("#ingredient6").val().trim(),
    Instruction: $("#Instruction").val().trim()
  };
  

$.post("/api/new", newDrink)
.done(function(data) {
});
  // lets display this on the page
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("your-drink");
      row.append("<li>" + data[i].name + "</li>");
      row.append("<li>" + data[i].ingredient1 + "</li>");
      row.append("<li>" + data[i].ingredient2 + "</li>");
      row.append("<li>" + data[i].ingredient3 + "</li>");
      row.append("<li>" + data[i].ingredient4 + "</li>");
      row.append("<li>" + data[i].ingredient5 + "</li>");
      row.append("<li>" + data[i].ingredient6 + "</li>");
      row.append("<li>" + data[i].Instruction + "</li>");
      

      $("#customer-createdDrink").prepend(row);

    }

  }

});


// empty the box
$("#name").val("");
$("#ingredient1").val("");
$("#ingredient2").val("");
$("#ingredient3").val("");
$("#ingredient4").val("");
$("#ingredient5").val("");
$("#ingredient6").val("");
$("#Instruction").val("");

});