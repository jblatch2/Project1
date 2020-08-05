// pseudocode the js for the app's minimum viable product

//global variables here

//document.ready function here

//we need an event listener for the input
$("#submitBtn").on("click", function(event){
event.preventDefault();
fridge();
ajaxone();


})


//we need to append the desired results to the recipe and store
//we need to animate the fridge
function fridge(){
    anime({
        targets: '.fridge',
        keyframes: [
          {rotate: -10},
          {rotate: 10},
          {rotate: -5},
          {rotate: 5},
          {rotate: 0}
    
        ],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
}

function ajaxone(){
  var search = $("#searchBar").val()
 console.log(search)
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://recipe-puppy.p.rapidapi.com/?p=1&i="+ search,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": "f8000cf55dmsh8316770dd76cb27p11a0e3jsn8995fc3fe564"
    }
  }
  $.ajax(settings).done(function (response) {
    var x = JSON.parse(response)
    console.log(x.results[0])
    // finds first recipe
  });


}
//we need a function to clear old results