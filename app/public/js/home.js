$("#search-name-btn").on("click", function(event) {
  event.preventDefault();
  var inp = $('#serach-input').val();
  window.location.replace('/search?' + inp);
});