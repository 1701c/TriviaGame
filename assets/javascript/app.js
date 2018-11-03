var trivia = {
  currentQ: 0,
  questions: [{
    question: 'what class of ship was the uss enterprise<br>NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: ['assets/images/1701.jpg','assets/images/1701schem.jpg'],
    choices: ['galaxy', 'constitution', 'excelsior', 'sovereign'],
    answer: 1,
    fact: 'THE ENTERPRISE NCC-1701 WAS A CONSTITUTION CLASS VESSEL'
  },{
    question: 'WHO DESTROYED THE ENTERPRISE NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> CONSTITUTION<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: ['assets/images/1701spacedock.jpg','assets/images/1701destructs.jpg'],
    choices: ['ROMULANS', 'KLINGONS', 'KIRK', 'KHAN'],
    answer: 2,
    fact: 'THE ENTERPRISE NCC-1701 WAS DESTROYED BY JAMES T. KIRK TO PREVENT ITS CAPTURE BY A KLINGON BOARDING PARTY'
  },{
    question: 'WHAT WAS THE MAXIMUM DESIGN SPEED OF THE ENTERPRISE NX-01?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> NX<br><span class="tan-text">REGISTRY:</span> NX-01<br><span class="tan-text">OWNER:</span> UNITED EARTH<br><span class="tan-text">OPERATOR:</span> STARFLEET<br><span class="tan-text">STATUS:</span> DECOMMISSIONED (2161)',
    image: ['assets/images/NX-01.jpg','assets/images/NX-01storm.jpg'],
    choices: ['WARP 3', 'WARP 5', 'WARP 7', 'WARP 9'],
    answer: 1,
    fact: 'THE ENTERPRISE NX-01 WAS EQUIPED WITH EARTH\'S FIRST WARP 5 ENGINE'
  },{
    question: 'WHAT STARSHIP WAS COMMANDED BY CAPTAIN HIKARU SULU?',
    info: '<span class="blue-text">HIKARU SULU</span><br><span class="tan-text">GENDER:</span> MALE<br><span class="tan-text">SPECIES:</span> HUMAN<br><span class="tan-text">AFFILIATION:</span> FEDERATION STARFLEET<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">RANK:</span> CAPTAIN',
    image: ['assets/images/Sulu.jpg','assets/images/Excelsior.jpg'],
    choices: ['FARRAGUT', 'YORKTOWN', 'DEFIANT', 'EXCELSIOR'],
    answer: 3,
    fact: 'IN 2290, CAPTAIN SULU ASSUMED COMMAND OF<br>NCC-2000, USS EXCELSIOR'
  },{
    question: 'IDENTIFY THIS SHIP',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> ?<br><span class="tan-text">OWNER:</span> ?<br><span class="tan-text">OPERATOR:</span> ?<br><span class="tan-text">STATUS:</span> ?',
    image: ['assets/images/1701x.jpg','assets/images/1701cschem.jpg'],
    choices: ['ENTERPRISE 1701A', 'ENTERPRISE 1701B', 'ENTERPRISE 1701C', 'ENTERPRISE 1701D'],
    answer: 2,
    fact: 'THE ENTERPRISE NCC-1701C WAS WAS COMMANDED BY CAPTAIN RACHEL GARRETT'
  }], 

  init: function () {
    game.loginAttempts = 0;
    game.correct = 0;
    game.incorrect = 0;
    game.drawFakeButtons(14, '#buttonDiv', true);
    $('#topLeftScreen').html('<br><h2>COMMAND LEVEL <span class="tan-text">OVERRIDE</span><br><span class="lt-blue-text">INITIATED</span></h2>');
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

  genericButton: function (isBlank) { // true returns blank, false returns not blank, undefined randomly returns blanks and blinking css class
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
          $('#topLeftScreen').html('<br><h2>COMMAND CODE <span class="tan-text">RESET</span><br><span class="lt-blue-text">INITIATED</span></h2>');
          game.drawQ()
        })
    }
    this.loginAttempts++;
  },

  validateAnswer: function (a) {    
    var nextSeconds = 5;
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
    $('#imageDiv, #infoDiv').empty()
    $('#questionText').html('<img src="' + trivia.questions[trivia.currentQ].image[1] + '" width="300"><br>')
    .attr('style','padding-top: 10px;')
    .append(trivia.questions[trivia.currentQ].fact)
    if (a == trivia.questions[trivia.currentQ].answer) { 
      this.correct ++;
      $('#questionText').append('<br> <br><span class="blinking blue-text">CORRECT</span>');
    } else {
      this.incorrect ++;
      $('#questionText').append('<br> <br><span class="blinking red-text">INCORRECT</span>');
    }
    trivia.currentQ++;
    $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="blue-text">' + this.correct + '</span>:<span class="lt-red-text">' + this.incorrect + '</span> &nbsp <span class="lt-blue-text">'+ (trivia.currentQ * 10) +'% COMPLETE</span></h2>');
    $('#timerDiv').html('NEXT QUESTION IN<br> &nbsp;');
  },
  
  endGame: function () {
    if (this.correct > 3) {
      if (this.correct > 4) {
        $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="lt-blue-text">COMPLETE</span></h2>')
        $('#questionText').html('<h3><br> <br>COMMAND CODES SUCCESSFULLY RESET</h3><h3>YOUR NEW COMMAND CODES HAVE BEEN SENT TO YOU<br> <br></h3>')
      } else {
        $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="lt-red-text">INCONCLUSIVE</span></h2>')
        $('#questionText').html('<h3><br> <br>UNABLE TO CONFIRM IDENTITY</h3><h3>YOU MAY ATTEMPT AGAIN<br> <br></h3>')         
      }
      $('#questionText').append(game.linkButton('ENGAGE', 'engageButton'))
      $('.engageButton').click(function () {trivia.init()})
        game.drawFakeButtons(14, '#buttonDiv', true);
    } else {
      $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="red-text blinking">FAILED</span></h2>')
      $('#bottomDiv').empty()
        .attr('style','margin-left: 120px;')
        .append('<div id="endDiv">')
      $('#endDiv').attr('style','margin-top: 20px; text-align: center; background-image: url("../assets/images/fedlogo.jpeg"); background-repeat: no-repeat; background-position: center; ')
        .html('<h2 class="red-text blinking"><br>COMMAND CODE RESET FAILED</h2><br><h2>THIS CONSOLE HAS BEEN LOCKED</h2><h2>SECURITY HAS BEEN ALERTED</h2><br><h2 class="blinking">REMAIN IN THE AREA<br> <br></h2>')
      $('#buttonDiv, #fakeButtonDiv').empty()
    }
    $('#imageDiv, #infoDiv').empty()
    $('#timerDiv').attr('style', 'display:none;')
  },

  drawQ: function () {
    if (trivia.currentQ === 5) {
      this.endGame();
    } else {
      var seconds = 7;
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
      });    
      $('#imageDiv').html('<img id="questionImg" src="' + trivia.questions[trivia.currentQ].image[0] + '">');
      $('#infoDiv').html(trivia.questions[trivia.currentQ].info);
      $('#questionText').html(trivia.questions[trivia.currentQ].question.toUpperCase())
      .attr('style','padding-top: 30px;')
      $('#timerDiv').html('TIME REMAINING<div class="blinking"> 00 : 00 : 0' + seconds + '</div>');
      $('#timerDiv').attr('style', '')
    }
  }
};

$(document).ready(function () {
  trivia.init();
});