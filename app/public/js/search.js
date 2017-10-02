$(document).ready(function(event) {
  // event.preventDefault();
  var url = window.location.href;
  console.log(url);
  var query = url.split("?").pop();
  console.log(query);
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  $.ajax({
    url: queryURL + query,

        accept: "application/json",
        method: "GET"
      }).done(function(response) {
        if (response.drinks == undefined || response.drinks.length < 1) {
          $(".bar-search").text("Sorry " + " we don't have that drink..please try the following local bars.");
          barSearch();
          return ;

        } 
        for(var i = 0; i < response.drinks.length; i++){
          var currentDrink = response.drinks[i];
          var html = `
          <div class="drink-suggestion col-md-6">
          <h1 class = "drinkName">${currentDrink.strDrink}</h1>
                                 <hr>
            <div class="list">
            <h4 class="text-center">Ingridents needed</h4>
          <div>${currentDrink.strIngredient1}</div>
          <div>${currentDrink.strIngredient2}</div>
          <div>${currentDrink.strIngredient3}</div>
          <div>${currentDrink.strMeasure1}</div>
          <div>${currentDrink.strMeasure2}</div>
          <div>${currentDrink.strMeasure3}</div>
           <h5 class="text-center what-toDo">How to make the drink</h5>
                           <hr>
           <div>${currentDrink.strInstructions}</div>
                              <hr>
          </div>
            </div>
          `
          $("#cocktail-search").append(html);
        }

      });

    });




//captures users location
function initMap(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
        zips: ''
      };
      var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng="+pos.lat+","+ pos.long+"&key=AIzaSyBao5t2cXEN-W6a_Mw0JBIUlifRXiSaLaM";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response){
        pos.zips = response.results[0].address_components[7].long_name; 
        callback(pos);
      });
    });
  };
};

initMap();

//takes lat and lon of venue location and sends to google places api to obtain nearby lodging options
function barSearch() {
  initMap(pos => {
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBQkuYsm8oh06NHs9FxloCXM38CPbYG0BQ&query=\"bar\"&location=" + pos.lat + "," + pos.long + "&radius=4000",
      type: "GET"
    }).done(function(response) {     
      for (var i = 0; i < response.results.length; i++) {
        console.log(response.results[i].name);
        var bar54 = $("<div>");
        bar54.text(response.results[i].name);
         $(".bar-search").append(bar54);

     
      
      }
     
    });
  });
 
  
};






