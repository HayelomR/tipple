// lets get a data from the database
$.get("/api/all", function(data) {
//loop over the drinks that we have on a database
for (var i = 0; i < data.length; i++) {
    // Create div to hold the name of the drink and button
    var drink = $("<div>");
    var button = $("<button>");
    // Add a class (helps to edit the css part)
    drink.addClass("show-names show-recipes"+i);
    button.text("Show-Recipes");
    // Add an id 
    drink.attr("id","display" + i);
    button.addClass("button show-recipes");
    button.attr("data-i", i + 1);
    $(".show-recipes").attr("src", data);
    // Append this to a cocktailist
    $("#cocktails-list").append(drink); 
    $("#cocktails-list").append(button); 
//add the the name of drinks to our page
// only the name of drink because we want to crate a link here to the recipes
$("#display" + i).append("<p class = 'drink-name'>" + (i + 1) + ". " + data[i].name + "</p>");
}
});

$("#cocktails-list").on("click", ".show-recipes", function(){
    //console.log($(this).attr("data-name"));
    var id = $(this).attr("data-i");
    $.get("/api/" + id, function(data) {
    })
    .done(function(cocktail) {
        // console.log(cocktail[0].Instruction);
        var id = cocktail[0].id - 1;
        $(".show-recipes" + id).append("<p> ingredient1, " + cocktail[0].ingredient1 + "</p>");
        $(".show-recipes" + id).append("<p> ingredient2, " + cocktail[0].ingredient2 + "</p>");
        $(".show-recipes" + id).append("<p> ingredient3, " + cocktail[0].ingredient3 + "</p>");
        $(".show-recipes" + id).append("<p> ingredient4, " + cocktail[0].ingredient4 + "</p>");
        $(".show-recipes" + id).append("<p> ingredient5, " + cocktail[0].ingredient5 + "</p>");
        $(".show-recipes" + id).append("<p> ingredient6, " + cocktail[0].ingredient6 + "</p>");
        $(".show-recipes" + id).append("<p> Instruction, " + cocktail[0].Instruction + "</p>");

    });
});