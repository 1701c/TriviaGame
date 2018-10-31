var trivia = {
  currentQ: 0,
  questions: [{
    question: 'what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '2what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '3what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '4what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '5what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '6what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '7what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '8what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '9what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  },{
    question: '10what class of ship was the uss enterprise NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: 'assets/images/1701.jpg',
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1
  }], 

  init: function () {
    game.drawFakeButtons(4, '#fakeButtonDiv', true);
    game.drawFakeButtons(12, '#buttonDiv', true);
    $('#topLeftScreen').html('<br><h2>COMMAND LEVEL OVERRIDE <br><span class="lt-blue-text">INITIATED</span></h2>');
    $('#imageDiv, #infoDiv').empty();
    $('#questionText').html('Unauthorized access detected<br>enter command codes'.toUpperCase())
      .append('<input id="passwordBox" class="text-center" type="password"></input><br>')
      .append(game.linkButton('ENGAGE', '#engageButon', 'game.login()'))
      .addClass('text-center')
      .attr('style', 'padding-top: 50px');
    this.currentQ = 0;
  },
};

var game = {
  colors: ['orange', 'purple', 'blue', 'lt-blue', 'lt-red', 'tan', 'lt-tan', 'pink', 'red'],
  loginAttempts: 0,
  correct: 0,
  incorrect: 0,

  genericButton: function (isBlank) { // true draws blank, false does not draw blank, undefined randomly draws blank
    if ((isBlank === true) || ((isBlank === undefined) && ([Math.floor(Math.random() * 3)] == 0))) {
      return ($('<button type="button" class="btn black-back">'));
    } else {
      var buttonText = '0' + [Math.floor(Math.random() * 10)] + '-';
      for (j = 0; j < 4; j++) {
        buttonText += [Math.floor(Math.random() * 10)];
      }
      var buttonHTML = $('<button type="button" class="btn">');
      buttonHTML.addClass(this.colors[Math.floor(Math.random() * 8)] + '-back')
        .text(buttonText);
      return (buttonHTML);
    }
  },

  drawFakeButtons: function (numButtons, elementID, emptyElement) {
    if (emptyElement === true) {
      $(elementID).empty();
    }
    for (i = 0; i < numButtons; i++) {
      $(elementID).append(game.genericButton());
    }
  },

  linkButton: function (buttonText, id, event) {
    var buttonHTML = $('<button type="button" class="btn">');
    buttonHTML.addClass(this.colors[Math.floor(Math.random() * 8)] + '-back')
      .text(buttonText)
    if (id !== 'none') {
      buttonHTML.attr('id', id)
    }
    if (event !== undefined) {
      buttonHTML.attr('onclick', event);
    }
    return (buttonHTML);
  },

  login: function () {
    game.drawFakeButtons(4, '#fakeButtonDiv', true);
    game.drawFakeButtons(12, '#buttonDiv', true);
    $('#passwordBox').val('');
    switch (this.loginAttempts) {
      case 0:
        $('#questionText').append('<span id="badPassword"><br>ACCESS DENIED<br>2 ATTEMPTS REMAINING</span>');
        game.drawFakeButtons(4, '#fakeButtonDiv', true);
        game.drawFakeButtons(12, '#buttonDiv', true);
        break;
      case 1:
        $('#badPassword').html('<br>ACCESS DENIED<br>1 ATTEMPT REMAINING');
        break;
      case 2:
        $('#questionText').html('<div style="padding-bottom:20px;">YOU HAVE EXCEEDED THE MAXIMUM NUMBER OF ATTEMPTED COMMAND CODES<br> <br>IDENTITY CONFIRMATION REQUIRED<br></div>')
          .append(game.linkButton('ENGAGE', '#engageButon', 'game.drawQ()'));
    }
    this.loginAttempts++;
  },


  timer: function () {
    var seconds = 7;
    var timer = setInterval(ticker, 1000);
    function stop () {
      clearInterval(timer)
    }
    function ticker() {
      seconds--;
      $('#timerDiv').html('TIME REMAINING<div class="blinking"> 00 : 00 : 0' + seconds + '<div>');
      if (seconds === 0) {
        stop();
        game.validateAnswer(false);
      } 
    }
    $('#timerDiv').html('TIME REMAINING<div class="blinking"> 00 : 00 : 0' + seconds + '</div>');
    $('.answer').on("click",stop);
  },

  validateAnswer: function (a) {
    if (a === true ) {
      this.correct ++;
      $('#questionText').append('<br>correct');
    } else {
      this.incorrect ++;
      $('#questionText').append('<br>incorrect');
    }


    var nextSeconds = 3;
    var nextTimer = setInterval(nextTicker, 1000);
    $('#timerDiv').html('NEXT QUESTION IN<br><span class="blinking"> 00 : 00 : 0' + nextSeconds + '</span>');
    function nextTicker() {
      nextSeconds--;
      $('#timerDiv').html('NEXT QUESTION IN<br><span class="blinking"> 00 : 00 : 0' + nextSeconds + '</span>');
      if (nextSeconds === 0) {
        clearInterval(nextTimer);
        game.drawQ();
      }
    }
    $('.answer').attr("style", "visibility:hidden;");
    $('#correct').attr("style", "");
  },


  drawQ: function () {
    var answerButton;
    $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="lt-blue-text">'+ (trivia.currentQ * 10) +'%</span> <span class="blue-text">' + this.correct + '</span> <span class="lt-red-text">' + this.incorrect + '</span></h2>');
    $('#questionText').html(trivia.questions[trivia.currentQ].question.toUpperCase());
    $('#infoDiv').html(trivia.questions[trivia.currentQ].info);
    $('#imageDiv').html('<img class="img-fluid" src="' + trivia.questions[trivia.currentQ].image + '">');
    $('#buttonDiv').empty();
    for (i = 0; i < 4; i++) {
      if (i == trivia.questions[trivia.currentQ].answer) {
        var id = 'correct';
        var clickEvent = 'game.validateAnswer(true)';
      } else {
        var id = 'none';
        var clickEvent = 'game.validateAnswer(false)';
      }
      answerButton = this.linkButton(trivia.questions[trivia.currentQ].choices[i].toUpperCase(), id);
      answerButton.addClass('answer');
      answerButton.attr('onclick', clickEvent);
      $('#buttonDiv').append(answerButton);
      $('#buttonDiv').append(this.genericButton(true));
    }
    game.drawFakeButtons(4, '#fakeButtonDiv', true);
    game.timer();
    trivia.currentQ++;
  },
};



$(document).ready(function () {
  // game.login();
  trivia.init();
  // $(document).on("click", function () {
  //   console.log('click');
  //   game.drawQ();
  // });  
});







  // questionsOld: ['what class of ship was the uss enterprise NCC-1701?',
  //   'this is question 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 4. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 6. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 8. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 10. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  // ],
  // info: ['<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
  //   'this is question 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 4. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 6. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 8. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   'this is question 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'this is question 10. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  // ],
  // answers: [
  //   [2, 'galaxy', 'constitution', 'excelsior', 'sovereign'],
  //   [2, '2answer1', 'answer2', 'answer3', 'answer4'],
  //   [3, '3answer1', 'answer2', 'answer3', 'answer4'],
  //   [4, '4answer1', 'answer2', 'answer3', 'answer4'],
  //   [1, '5answer1', 'answer2', 'answer3', 'answer4'],
  //   [2, '6answer1', 'answer2', 'answer3', 'answer4'],
  //   [3, '7answer1', 'answer2', 'answer3', 'answer4'],
  //   [4, '8answer1', 'answer2', 'answer3', 'answer4'],
  //   [1, '9answer1', 'answer2', 'answer3', 'answer4'],
  //   [2, '10answer1', 'answer2', 'answer3', 'answer4']
  // ],
  // images: ['assets/images/1701.jpg'],


    // startTimer: function (duration, display) {
  //   var timer = duration,
  //     minutes, seconds;
  //   setInterval(function () {
  //     minutes = parseInt(timer / 60, 10)
  //     seconds = parseInt(timer % 60, 10);

  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;

  //     display.textContent = minutes + ":" + seconds;

  //     if (--timer < 0) {
  //       timer = duration;
  //     }
  //   }, 1000);
  // },
