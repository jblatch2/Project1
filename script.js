// pseudocode the js for the app's minimum viable product

//global variables here

//document.ready function here

//we need an event listener for the input
$("#submitBtn").on("click", function(){
fridge();



})

//we need to make ajaxcalls to the API
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
//we need a function to clear old results