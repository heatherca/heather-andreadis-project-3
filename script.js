
// Countdown timer that starts game 
// https://stackoverflow.com/questions/21670438/make-countdown-start-after-button-is-clicked/21670514 
function startTimer() {
  let counter = 60;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      $('#timer').html(counter);
    }
    if (counter === 0 || percDone == 100) {
      // count number of done classes
      let numDone = $(".done").length
      // divide number of done classes by 64(total number of squares)
      let percDone = ((numDone / 64) * 100).toFixed(0)
      // change message depending on amount of lasagna eaten 
      if (percDone >=75){
        swal({
          text:'You ate ' + percDone + '% of Nonna\'s lasagna. Nonna is so happy and glows in your obvious love for her and her lasagna! She promptly goes to the oven and pulls out another lasagna just for you.',
          button: 'Eat Again',
          closeOnClickOutside: false
        }).then(function () {
          // intially used location.reload but wanted it to refresh to start of page
          location.href = 'index.html';
        }
        );
      }
      else if(percDone < 75 && percDone >= 50){
        swal({
          text:'You ate ' + percDone + '% of Nonna\'s lasagna. Nonna looks at you quizically, she thought lasangna was your favourite? Did she not put enough cheese? Prove to Nonna her lasagna is perfect.',
          button: 'Eat Again',
          closeOnClickOutside: false
        }).then(function () {
          location.href = 'index.html';
        }
        );
      }
      else if (percDone < 50 && percDone >= 25) {
        swal({
          text: 'You ate ' + percDone + '% of Nonna\'s lasagna. Nonna is concerned. You have never eaten so little lasagna! Clearly you are sick or sad. Luckily her lasagna is the cure for both these things and she tells you to have some more.',
          button: 'Eat Again',
          closeOnClickOutside: false
        }).then(function () {
          location.href = 'index.html';
        }
        );
      }
      else if (percDone < 25) {
        swal({
          text: 'You ate ' + percDone + '% of Nonna\'s lasagna. Nonna is distraught. You clearly don\'t love her or her lasagna. Tears well up in her eyes. She sits down, despondent. Quickly eat more lasagna and restore Nonna\'s happiness.',
          button: 'Eat Again',
          closeOnClickOutside: false
        }).then(function () {
          location.href = 'index.html';
        }
        );
      }
      clearInterval(counter);
    }
  }, 1000);
}

// reduce opacity of lasagna image and add class of done when opacity reaches 0 
function eating() {
  $('img').on('click', function () {
    
    // safari fix wasn't reducing opacity to solid number
    if ($(this).css('opacity') <= '0.21' && $(this).css('opacity') >= '0.2'){
      $(this).css("opacity", "0");
      $(this).addClass("done");
    }
    else if ($(this).css('opacity') > '0.2'){
      $(this).css("opacity", "-=0.2");
    }
    return false;
  });
}

// display the game when let's eat button clicked (change height of game section)
$("#goto").on('click', function(){
  $("#game").css("min-height", "100vh");
  $("#game").css("overflow", "visible");
  $("#game").css("height", "auto");

});

// Start timer on button click, run eating function to make sure that eating can't start until time starts, make sure timer doesn't run when button clicked again 
$("#startTime").one('click', function () {
  startTimer();
  eating();
});