// pseudocode the js for the app's minimum viable product

//global variables here
var lat;
var lon;
// document.ready function here
geolocate();
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
    console.log(x.results[0].title)
    $("#foodimage").attr("src",x.results[0].thumbnail )
    $("#title").text(x.results[0].title)
    $("#link").text(x.results[0].href)
    $("#link").attr("href",x.results[0].href)

    
    // finds first recipe
  });
// geolocate

}
//we need a function to clear old results
$("#about").on("click", function(){
  $("#mcard").attr("class", "is-active");
  $("#mcard").css("z-index", "1");
})
$(".delete").on("click", function(){
  $("#mcard").attr("class", "modal")
})

function geolocate(){

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    lat =`${crd.latitude}` 
    lon =`${crd.longitude}`
  
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

}