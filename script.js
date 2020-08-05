// pseudocode the js for the app's minimum viable product

//global variables here

//document.ready function here

//we need an event listener for the input
//we need to make ajaxcalls to the API

$( document ).ready(function() {
    function ajaxone () {
        var api_url = '' // need to get
        var key = '' // need to get
        $.ajax({
            url: api_url + "?key=" + key + " &q=" + $( "#searchBar" ).val(),
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    }

    function ajaxtwo () {
        var api_url = '' // need to get
        var key = '' // need to get
        $.ajax({
            url: api_url + "?key=" + key + " &q=" + $( "#searchBar" ).val(),
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        })
    }
  });

//we need to append the desired results to the recipe and store
//we need to animate the fridge
//we need a function to clear old results