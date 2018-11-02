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
    game.drawFakeButtons(14, '#buttonDiv', true);
    $('#topLeftScreen').html('<br><h2>COMMAND LEVEL OVERRIDE <br><span class="lt-blue-text">INITIATED</span></h2>');
    $('#imageDiv, #infoDiv').empty();
    $('#questionText').html('<h3>UNAUTHORIZED ACCESS DETECTED<br>ENTER COMMAND CODES<br></h3>')
      .append('<h3><input id="passwordBox" type="password"></input><br></h3>')
      .append(game.linkButton('ENGAGE', 'engageButton'))
      .attr('style', 'padding-top: 50px');
    $('#timerDiv').attr('style', 'display:none;')
    $('.engageButton').click(function () {game.login()})
    this.currentQ = 0;
  },
};

var game = {
  colors: ['orange', 'purple', 'blue', 'lt-blue', 'lt-red', 'tan', 'lt-tan', 'pink', 'red'],
  loginAttempts: 0,
  correct: 0,
  incorrect: 0,

  genericButton: function (isBlank) { // true returns blank, false returns not blank, undefined randomly returns blank
    if ((isBlank === true) || ((isBlank === undefined) && ([Math.floor(Math.random() * 5)] == 0))) {
      return ($('<button type="button" class="btn black-back">X</button>'));
    } else {
      var buttonText = '0' + [Math.floor(Math.random() * 10)] + '-';
      for (j = 0; j < 4; j++) {
        buttonText += [Math.floor(Math.random() * 10)];
      }
      var buttonHTML = $('<button type="button" class="btn">');
      buttonHTML.addClass(this.colors[Math.floor(Math.random() * 8)] + '-back')
        .addClass('buttonType' + [Math.floor(Math.random() * 8)])
        .text(buttonText);      
      return (buttonHTML);     
    }
  },

  drawFakeButtons: function (numButtons, elementID, emptyElement) { // draws multipule genericButton
    if (emptyElement === true) {
      $(elementID).empty();
    }
    for (i = 0; i < numButtons; i++) {
      $(elementID).append(game.genericButton());
    }
  },

  linkButton: function (buttonText, buttonClass) { // returns random color buttons with classes
    var buttonHTML = $('<button type="button" class="btn">');
    buttonHTML.addClass(this.colors[Math.floor(Math.random() * 8)] + '-back')
      .text(buttonText)
    if (buttonClass !== 'none') {
      buttonHTML.addClass(buttonClass)
    }
    return (buttonHTML);
  },

  login: function () { // login prompts
    // game.drawFakeButtons(4, '#fakeButtonDiv', true);
    // game.drawFakeButtons(12, '#buttonDiv', true);
    $('#passwordBox').val('');
    switch (this.loginAttempts) {
      case 0:
        $('#questionText').append('<span id="badPassword"><br>ACCESS DENIED<br>2 ATTEMPTS REMAINING</span>');
        break;
      case 1:
        $('#badPassword').html('<br>ACCESS DENIED<br>1 ATTEMPT REMAINING');
        break;
      case 2:
        $('#questionText').html('<div style="padding-bottom:20px;">YOU HAVE EXCEEDED THE MAXIMUM NUMBER OF ATTEMPTED COMMAND CODES<br> <br>IDENTITY CONFIRMATION REQUIRED<br></div>')          
          .append(game.linkButton('ENGAGE', 'engageButton'));
        $('.engageButton').click(function () {
          $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="lt-blue-text">INITIATED</span></h2>');
          game.drawQ()
        })
    }
    this.loginAttempts++;
  },

  validateAnswer: function (a) {    
    var nextSeconds = 4;
    var nextTimer = setInterval(nextTicker, 1000);
    clearInterval(this.drawQ.timer);
    $('.answer').off('click');
    function nextTicker() {
      nextSeconds--;
      $('#timerDiv').html('NEXT QUESTION IN<br><span class="blinking"> 00 : 00 : 0' + nextSeconds + '</span>');
      if (nextSeconds === 0) {
        clearInterval(nextTimer);
        game.drawQ();
      }
    }
    for (i=0; i < 4; i++) { // hide incorrect answers
      if (i != trivia.questions[trivia.currentQ].answer) {
        $('#' + i).attr('style', 'visibility:hidden;');
      } 
    } 
    if (a == trivia.questions[trivia.currentQ].answer) { 
      this.correct ++;
      $('#questionText').append('<br>correct');
    } else {
      this.incorrect ++;
      $('#questionText').append('<br>incorrect');
    }
    trivia.currentQ++;
    $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="blue-text">' + this.correct + '</span>/<span class="lt-red-text">' + this.incorrect + '</span> &nbsp <span class="lt-blue-text">'+ (trivia.currentQ * 10) +'% COMPLETE</span></h2>');
    $('#timerDiv').html('NEXT QUESTION IN<br> &nbsp;');
  },
  
  endGame: function () {
    if (this.correct > 8) {
      $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="lt-blue-text">COMPLETE</span></h2>');
    } else {
      $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="red-text blinking">FAILED</span></h2>');
    }
    $('#imageDiv, #infoDiv').empty();
    $('#timerDiv').attr('style', 'display:none;')
    
    game.drawFakeButtons(4, '#fakeButtonDiv', true);
    game.drawFakeButtons(12, '#buttonDiv', true);
    $('#questionText').html('<h3>COMMAND CODES SUCCESSFULLY CHANGED</h3><h3>YOUR NEW COMMAND CODES HAVE BEEN SENT TO YOU</h3>');
  },

  drawQ: function () {
    if (trivia.currentQ === 10) {
      this.endGame();
    } else {
      var seconds = 9;
      var answerButton;
      var timer = setInterval(ticker, 1000);
      function stopTimer(response) {
          clearInterval(timer);
            $('.answer').off('click');
          game.validateAnswer(response);
      }
      
      function ticker() {
        seconds--;
        $('#timerDiv').html('TIME REMAINING<div class="blinking"> 00 : 00 : 0' + seconds + '<div>');
        if (seconds === 0) { stopTimer(false);
          // clearInterval(timer);
          // $('.answer').off('click');
          // game.validateAnswer(false);
        } 
      }
      $('#buttonDiv').empty();
      for (i = 0; i < 4; i++) {
        answerButton = this.linkButton(trivia.questions[trivia.currentQ].choices[i].toUpperCase(), 'answer');
        answerButton.attr('id', i);
        $('#buttonDiv').append(answerButton)
          .append(this.genericButton(true));
        }
      $('.answer').on('click', function () { stopTimer(this.id);
        // clearInterval(timer)
        // $('.answer').off('click');
        // game.validateAnswer(this.id);
      });    
      $('#imageDiv').html('<img id="questionImg" src="' + trivia.questions[trivia.currentQ].image + '">');
      $('#infoDiv').html(trivia.questions[trivia.currentQ].info);
      $('#questionText').html(trivia.questions[trivia.currentQ].question.toUpperCase());
      $('#timerDiv').html('TIME REMAINING<div class="blinking"> 00 : 00 : 0' + seconds + '</div>');
      $('#timerDiv').attr('style', '')
      game.drawFakeButtons(4, '#fakeButtonDiv', true);
    }
  }
};

$(document).ready(function () {
  trivia.init();
});