let leftMain = document.querySelector('.left');
let rightMain = document.querySelector('.right');

let Player1_TotalScore = document.querySelector('.PLAYER-1-SCORE');
let Player2_TotalScore = document.querySelector('.PLAYER-2-SCORE');

let Player1_CurrentScore = document.querySelector('.PLAYER-1-CURRENT-SCORE');
let Player2_CurrentScore = document.querySelector('.PLAYER-2-CURRENT-SCORE');


let newGame = document.querySelector('.new-game');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.roll-dice')
let hold = document.querySelector('.hold')



// ? GAME VARIABLE
let TURN = 'PLAYER-1';

let PLAYER_1_CURRENT_SCORE = 0;
let PLAYER_1_TOTOL_SCORE = 0;

let PLAYER_2_CURRENT_SCORE = 0;
let PLAYER_2_TOTOL_SCORE = 0;

// ? initial setting

leftMain.classList.add('active');

Player1_TotalScore.innerHTML = '0';
Player2_TotalScore.innerHTML = '0';
Player1_CurrentScore.innerHTML = '0';
Player2_CurrentScore.innerHTML = '0';

newGame.addEventListener('click', function () {
    PLAYER_1_CURRENT_SCORE = 0;
    PLAYER_1_TOTOL_SCORE = 0;
    PLAYER_2_CURRENT_SCORE = 0;
    PLAYER_2_TOTOL_SCORE = 0;

    Player1_TotalScore.innerHTML = '0';
    Player2_TotalScore.innerHTML = '0';
    Player1_CurrentScore.innerHTML = '0';
    Player2_CurrentScore.innerHTML = '0';

    leftMain.classList.add('active');
    dice.innerHTML = `<img src="./resolurce/dice-6.png" alt=""></img>`
})

rollDice.addEventListener('click', function(){
    let random = Number(( 5*Math.random() + 1 ).toFixed(0))
    dice.innerHTML = `<img src="./resolurce/dice-${random}.png" alt=""></img>`

    console.log(random);

    if(TURN == 'PLAYER-1'){
        if(random == 1){
            PLAYER_1_CURRENT_SCORE = 0;
            Player1_CurrentScore.innerHTML = '0';
            TURN = 'PLAYER-2'
            rightMain.classList.add('active');
            leftMain.classList.remove('active');
        }
        else{
            PLAYER_1_CURRENT_SCORE += random;
            Player1_CurrentScore.innerHTML = PLAYER_1_CURRENT_SCORE;
        }
    }

    else if(TURN == 'PLAYER-2'){
        if(random == 1){
            PLAYER_2_CURRENT_SCORE = 0;
            Player2_CurrentScore.innerHTML = '0';
            TURN = 'PLAYER-1'
            leftMain.classList.add('active');
            rightMain.classList.remove('active');
        }
        else{
            PLAYER_2_CURRENT_SCORE += random;
            Player2_CurrentScore.innerHTML = PLAYER_2_CURRENT_SCORE;
        }
    }
})

hold.addEventListener('click', function(){
    TURN = TURN == 'PLAYER-1' ? 'PLAYER-2' : 'PLAYER-1';
    
        if(TURN == 'PLAYER-1'){
            leftMain.classList.add('active');
            rightMain.classList.remove('active');

            PLAYER_2_TOTOL_SCORE += PLAYER_2_CURRENT_SCORE;
            Player2_TotalScore.innerHTML = PLAYER_2_TOTOL_SCORE;
            console.log('passed');
            PLAYER_2_CURRENT_SCORE = 0;
            Player2_CurrentScore.innerHTML = PLAYER_2_CURRENT_SCORE;
            
        }
        
        else if(TURN == 'PLAYER-2'){
            rightMain.classList.add('active');
            leftMain.classList.remove('active');
            
            PLAYER_1_TOTOL_SCORE += PLAYER_1_CURRENT_SCORE;
            Player1_TotalScore.innerHTML =  PLAYER_1_TOTOL_SCORE ;

            PLAYER_1_CURRENT_SCORE = 0;
            Player1_CurrentScore.innerHTML = PLAYER_1_CURRENT_SCORE;
        }
})