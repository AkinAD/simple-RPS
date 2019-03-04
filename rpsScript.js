var userPlay;
function issaRock()
  {
    userPlay = "rock";
    game();
  }
 function issaPaper()
  {
    userPlay = "paper";
    game();
  }
function  issaKnife()
  {
    userPlay =  "scissors";
    game();
  }
var leColor = 'rgba(0, 181, 204, 0.5)'; 
  
function computerPlay() 
  {
   let comPlay = "";
      let val = getRandomInt(3);
      switch (val) 
      {
        case 0:
          comPlay= "rock";
            break;
        case 1:
          comPlay= "paper";
            break;
        case 2:
          comPlay= "scissors";
          break;
      }
      return comPlay;
    }

    function oneRound(playerSelection, computerSelection)
    { draw();
      if(playerSelection == computerSelection)
      {
        let result = "It's a tie!, Computer also played "+ computerSelection;
        leColor = 'rgba(0, 181, 204, 0.5)'; 
        dispResult(result); 
      }
        //rock>scissors>paper>rock

      else if(playerSelection == "rock" && computerSelection == "scissors")
      {
        let result = "You win! Computer played: "+ computerSelection;
        leColor = 'rgba(46, 204, 113, 0.5)';
        dispResult(result); 
      }   
      else if(playerSelection == "scissors" && computerSelection == "paper")
      {
        let result = "You win! Computer played: "+ computerSelection;
       leColor = 'rgba(46, 204, 113, 0.5)';
       dispResult(result); 
      }
        else if(playerSelection == "paper" && computerSelection == "rock")
      {
        let result = "You win! Computer played: "+ computerSelection;
        leColor = 'rgba(46, 204, 113, 0.5)';
        dispResult(result); 
      }
      else 
      {
        let result = "You lose! Computer played: "+ computerSelection;
        leColor ='rgba(255,0,0,0.5)'; 
        dispResult(result); 
      }
      //update(result);
    }
    // const playerSelection = 'rock'
    // const computerSelection = computerPlay()
    // console.log(oneRound(playerSelection, computerSelection))
    function getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function game()
    {
      userPlay.toLowerCase();
      var comPlay= computerPlay();
      oneRound(userPlay, comPlay);
    }

    function dispResult(input)
    {
      var board = document.getElementById('board');
      board.innerHTML = input;

    }

    const btn = document.querySelector('button');
      const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let WIDTH = document.documentElement.clientWidth;
    let HEIGHT = document.documentElement.clientHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function random(number) {
      return Math.floor(Math.random()*number);
    }

    function draw() {
      ctx.clearRect(0,0,WIDTH,HEIGHT);
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle =  leColor; 
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    btn.addEventListener('click',draw);
