var trivia = {
  currentQ: 0,
  beep: new Audio("assets/sounds/computerbeep_15.mp3"),
  deny: new Audio("assets/sounds/denybeep1.mp3"),
  processing: new Audio("assets/sounds/processing.mp3"),
  question: new Audio("assets/sounds/deskviewer1.mp3"),

  questions: [{
    question: 'WHAT CLASS OF SHIP WAS THE ENTERPRISE<br>NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: ['assets/images/1701.jpg', 'assets/images/1701schem.jpg'],
    choices: ['GALAXY', 'CONSTITUTION', 'EXCELSIOR', 'SOVEREIGN'],
    answer: 1,
    fact: 'THE ENTERPRISE NCC-1701 WAS A CONSTITUTION CLASS VESSEL'
  }, {
    question: 'WHO IS RESPONSIBLE FOR THE DESTRUCTION OF THE ENTERPRISE NCC-1701?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> CONSTITUTION<br><span class="tan-text">REGISTRY:</span> NCC-1701<br><span class="tan-text">OWNER:</span> UNITED FEDERATION OF PLANETS<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">STATUS:</span> DESTROYED (2285)',
    image: ['assets/images/1701spacedock.jpg', 'assets/images/1701destructs.jpg'],
    choices: ['ROMULANS', 'KLINGONS', 'KIRK', 'KHAN'],
    answer: 2,
    fact: 'THE ENTERPRISE NCC-1701 WAS DESTROYED BY JAMES T. KIRK TO PREVENT ITS CAPTURE BY A KLINGON BOARDING PARTY'
  }, {
    question: 'WHAT WAS THE MAXIMUM DESIGN SPEED OF THE ENTERPRISE NX-01?',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> NX<br><span class="tan-text">REGISTRY:</span> NX-01<br><span class="tan-text">OWNER:</span> UNITED EARTH<br><span class="tan-text">OPERATOR:</span> STARFLEET<br><span class="tan-text">STATUS:</span> DECOMMISSIONED (2161)',
    image: ['assets/images/NX-01.jpg', 'assets/images/warp_core.jpg'],
    choices: ['WARP 3', 'WARP 5', 'WARP 7', 'WARP 9'],
    answer: 1,
    fact: 'THE ENTERPRISE NX-01 WAS EQUIPED WITH EARTH\'S FIRST WARP 5 ENGINE'
  }, {
    question: 'WHAT STARSHIP WAS COMMANDED BY CAPTAIN HIKARU SULU?',
    info: '<span class="blue-text">HIKARU SULU</span><br><span class="tan-text">GENDER:</span> MALE<br><span class="tan-text">SPECIES:</span> HUMAN<br><span class="tan-text">AFFILIATION:</span> FEDERATION STARFLEET<br><span class="tan-text">OPERATOR:</span> STARFLEET/UESPA<br><span class="tan-text">RANK:</span> CAPTAIN<br><span class="tan-text">DOB:</span> 2237',
    image: ['assets/images/Sulu.jpg', 'assets/images/Excelsior.jpg'],
    choices: ['FARRAGUT', 'YORKTOWN', 'DEFIANT', 'EXCELSIOR'],
    answer: 3,
    fact: 'IN 2290, CAPTAIN SULU WAS GIVEN COMMAND OF<br>NCC-2000, USS EXCELSIOR'
  }, {
    question: 'IDENTIFY THIS SHIP',
    info: '<span class="blue-text">USS ENTERPRISE</span><br><span class="tan-text">CLASS:</span> ?<br><span class="tan-text">REGISTRY:</span> ?<br><span class="tan-text">OWNER:</span> ?<br><span class="tan-text">OPERATOR:</span> ?<br><span class="tan-text">STATUS:</span> ?',
    image: ['assets/images/1701x1.jpg', 'assets/images/1701cschem.jpg'],
    choices: ['1701-A', '1701-B', '1701-C', '1701-D'],
    answer: 2,
    fact: 'THE ENTERPRISE NCC-1701-C WAS WAS COMMANDED BY CAPTAIN RACHEL GARRETT'
  }],

  init: function () {
    this.currentQ = 0;
    game.loginAttempts = 0;
    game.correct = 0;
    game.incorrect = 0;
    $('#imageDiv, #infoDiv, #timerDiv').css('display','none')
    $('#topLeftScreen').html('<br><h2>COMMAND LEVEL <span class="tan-text">OVERRIDE</span><br><span class="lt-blue-text">INITIATED</span></h2>')
    $('#questionText').html('<h3>UNAUTHORIZED ACCESS DETECTED<br>ENTER COMMAND CODES<br></h3><input id="passwordBox" type="password"></input><br> <br></h3>')
      .append(game.linkButton('ENGAGE', 'engageButton'))
      .css('padding-top', '70px')
    $('.engageButton').click(function () {
      game.login()
    })
    game.drawFakeButtons(14, '#buttonDiv', true);
    this.currentQ = 0;
    this.question.play();
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
      var buttonHTML = $('<button type="button" class="btn">');
      var buttonText = '0' + [Math.floor(Math.random() * 10)] + '-';
      for (j = 0; j < 4; j++) buttonText += [Math.floor(Math.random() * 10)];
      buttonHTML.addClass(this.colors[Math.floor(Math.random() * 8)] + '-back ' + 'buttonType' + [Math.floor(Math.random() * 8)])
        .text(buttonText)
      return (buttonHTML);
    }
  },

  drawFakeButtons: function (numButtons, elementID, emptyElement) { // draws multipule genericButton
    if (emptyElement === true) $(elementID).empty();
    for (i = 0; i < numButtons; i++) $(elementID).append(game.genericButton());
  },

  linkButton: function (buttonText, buttonClass) { // returns random color buttons with classes 
    var buttonHTML = $('<button type="button" class="btn">');
    buttonHTML.addClass(this.colors[Math.floor(Math.random() * 8)] + '-back')
      .text(buttonText)
    if (buttonClass !== 'none') buttonHTML.addClass(buttonClass)
    return (buttonHTML);
  },

  login: function () { // login prompts
    $('#passwordBox').val('');
    switch (this.loginAttempts) {
      case 0:
        $('#questionText').append('<span id="badPassword"><br>ACCESS DENIED: 1/3</span>')
        break;
      case 1:
        $('#badPassword').html('<br>ACCESS DENIED: 2/3')
        break;
      case 2:
        $('#questionText').html('<div>YOU HAVE EXCEEDED THE MAXIMUM NUMBER OF ATTEMPTED COMMAND CODES<br> <br>IDENTITY CONFIRMATION REQUIRED<br> <br></div>')
          .css('padding-bottom','20px')
          .append(game.linkButton('ENGAGE', 'engageButton'))
        $('.engageButton').click(function () {
          $('#topLeftScreen').html('<br><h2>COMMAND CODE <span class="tan-text">RESET</span><br><span class="lt-blue-text">INITIATED</span></h2>')
          game.drawQ();
        })
    }
    trivia.beep.play();
    this.loginAttempts++;
  },

  validateAnswer: function (a) {
    var nextSeconds = 5;
    var nextTimer = setInterval(nextTicker, 1000);
    clearInterval(this.drawQ.timer);
    $('.answer').off('click');

    function nextTicker() {
      nextSeconds--;
      $('#timerDiv').html('CONTINUING IN<br><span class="blinking"> 00 : 00 : 0' + nextSeconds + '</span>');
      if (nextSeconds === 0) {
        clearInterval(nextTimer);
        $('#imageDiv, #infoDiv').css('display','')
        game.drawQ();
      }
    }

    for (i = 0; i < 4; i++) { // hide incorrect answers
      if (i != trivia.questions[trivia.currentQ].answer) $('#' + i).attr('style', 'visibility:hidden;');
    }
    $('#imageDiv, #infoDiv').css('display','none')
    $('#questionText').html('<img id="answerImg" src="' + trivia.questions[trivia.currentQ].image[1] + '" width="300"><br>')
      .css('padding-top','10px')
      .append(trivia.questions[trivia.currentQ].fact)
    if (a == trivia.questions[trivia.currentQ].answer) {
      this.correct++;
      $('#questionText').append('<br> <br><span class="blinking blue-text">CORRECT</span>');
      trivia.processing.play();
    } else {
      this.incorrect++;
      $('#questionText').append('<br> <br><span class="blinking red-text">INCORRECT</span>');
      trivia.deny.play();
    }
    $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="blue-text">' + this.correct + '</span>:<span class="lt-red-text">' + this.incorrect + '</span>   <span class="lt-blue-text">' + (trivia.currentQ * 20) + '% COMPLETE</span></h2>');
    $('#timerDiv').html('CONTINUING IN<br>  ');
    trivia.processing.play();
    trivia.currentQ++;
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
      game.drawFakeButtons(14, '#buttonDiv', true);
      $('#questionText').append(game.linkButton('ENGAGE', 'engageButton'))
      $('.engageButton').click(function () {
        trivia.init()
      })
    } else {
      $('#topLeftScreen').html('<br><h2>COMMAND CODE RESET<br><span class="red-text blinking">FAILED</span></h2>')
      $('#bottomDiv').empty()
        .append('<div id="endDiv">')
      $('#endDiv').attr('style', 'margin-top: 20px; text-align: center; background-image: url("../assets/images/fedlogo.jpeg"); background-repeat: no-repeat; background-position: center; ')
        .html('<h2 class="red-text blinking"><br>COMMAND CODE RESET FAILED</h2><br><h2>THIS CONSOLE HAS BEEN LOCKED</h2><h2>SECURITY HAS BEEN ALERTED</h2><br><h2 class="blinking">REMAIN IN THE AREA<br> <br></h2>')
      $('#buttonDiv, #topRightScreen').empty()
      trivia.deny.play();
    }
    // $('#imageDiv, #infoDiv').empty()
    $('#timerDiv, #imageDiv, #infoDiv').css('display','none')
  },

  drawQ: function () {
    if (trivia.currentQ === 5) {
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
        if (seconds === 0) {
          stopTimer(false);
        }
      }

      $('#buttonDiv').empty();
      for (i = 0; i < 4; i++) {
        answerButton = this.linkButton(trivia.questions[trivia.currentQ].choices[i], 'answer');
        answerButton.attr('id', i);
        $('#buttonDiv').append(answerButton)
          .append(this.genericButton(true));
      }
      $('.answer').on('click', function () {
        stopTimer(this.id);
      });
      $('#imageDiv, #infoDiv').css('display','')
      $('#imageDiv').html('<img id="questionImg" src="' + trivia.questions[trivia.currentQ].image[0] + '">');
      $('#infoDiv').html(trivia.questions[trivia.currentQ].info);
      $('#questionText').html(trivia.questions[trivia.currentQ].question)
        .attr('style', 'padding-top: 30px;')
      $('#timerDiv').html('TIME REMAINING<div class="blinking"> 00 : 00 : 0' + seconds + '</div>');
      $('#timerDiv').attr('style', '')
      trivia.question.play();
    }
  }
};

$(document).ready(function () {
  $('#buttonDiv').click(function () {
    trivia.beep.currentTime = 0;
    trivia.beep.play();
  })
  $(document).keypress(function () {
    trivia.beep.currentTime = 0;
    trivia.beep.play();
  })
  trivia.init();
});