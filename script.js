// // variables

// let gameLayout = document.querySelector(".gameLayout")
// let totalScore =document.querySelector(".scoreCard h2")
// let foodX,foodY;
// let headX=12,headY=12;
// let movementX=0,movementY=0;
// let sneckBody=[]
// let score=0


// // function

// function genFood(){
//     foodX = Math.floor(Math.random()*26)+1;
//     foodY = Math.floor(Math.random()*26)+1;
//     for( let i=0; i<sneckBody.length; i++){
//         if(sneckBody[i][0] == foodX && sneckBody[i][1] == foodY ){
//             genFood();
//         }
//     }
// }

// function gameOver(){
//     headX=12;
//     headY=12;
//     movementX =0;
//     movementY=0;
//     alert("GameOver")
//     sneckBody=[];
//     genFood()
//     score = 0;
//     totalScore.innerHTML = "Total Score: " + score;
// }

// function runGame(){
//     let updategame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

//     if (headX == foodX && headY == foodY){
//         sneckBody.push([foodX,foodY]);
//         genFood();
//         score += 10;
//         totalScore.innerHTML = "Total Score:" +score;
//     }


//     snackBoday.unshift([headX,headY]);
//     sneckBody.pop();


//     for(i=0;i< sneckBody.length;i++){
//         updategame += `<div class="head" style="grid-area: ${sneckBody[i][0]}/${sneckBody[i][1]};"></div>`;
//     }


//     headX += movementX;
//     headY += movementY;


//     for(let i =1; i<sneckBody.length; i++){
//         if(sneckBody[0][0] == sneckBody[i][1] && sneckBody[0][1]== sneckBody[i][0]){
//             gameOver();
//             sneckBody=[];
//             return
//         }
//     }

//     let stop = headX < 0|| headY < 0 || headX > 27 || headY > 27; 
//     if(stop){
//         gameOver();
//         sneckBody=[];
//         return;
//     }


//     gameLayout.innerHTML = updategame;
// }
// genFood();
// setInterval(runGame,150);

// document.addEventListener("keydown",function(el){
//     let key =el.key;
//     console.log(key)
//     if(key == "ArrowUp" && movementY!=1){
//         movementX = 0;
//         movementY = -1;
//     }else if (key == "ArrowDown"&& movementY!=-1){
//         movementX = 0;
//         movementY = 1;
//     }else if (key == "ArrowLeft" && movementX!=1){
//         movementY = 0;
//         movementX = -1;
//     }else if (key == "ArrowRight" && movementX!=-1){
//         movementY = 0;
//         movementX = 1;
//     }

// })

// Variables
let gameLayout = document.querySelector(".gameLayout");
let totalScore = document.querySelector(".scoreCard h2");
let foodX, foodY;
let headX = 12, headY = 12;
let movementX = 0, movementY = 0;
let snakeBody = [];
let score = 0;






// Functions
function genFood() {
    foodX = Math.floor(Math.random() * 26) + 1;
    foodY = Math.floor(Math.random() * 26) + 1;
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeBody[i][0] == foodX && snakeBody[i][1] == foodY) {
            genFood(); 
        }
    }
}


function gameOver() {
    alert("Game Over!");
    headX = 12;
    headY = 12;
    movementX = 0;
    movementY = 0;
    snakeBody = [];
    score = 0;
    totalScore.innerHTML = "Total Score: " + score;
    genFood();
}


function runGame() {
    let updateGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;


    if (headX == foodX && headY == foodY) {
        snakeBody.push([foodX, foodY]); 
        genFood();
        score += 10;
        totalScore.innerHTML = "Total Score: " + score;
    }


    snakeBody.unshift([headX, headY]);
    if (snakeBody.length > score / 10 + 1) {
        snakeBody.pop();
    }


    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[i][0] == headX && snakeBody[i][1] == headY) {
            gameOver();
            return;
        }
    }


    if (headX < 1 || headY < 1 || headX > 26 || headY > 26) {
        gameOver();
        return;
    }


    for (let i = 0; i < snakeBody.length; i++) {
        updateGame += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }

    gameLayout.innerHTML = updateGame;


    headX += movementX;
    headY += movementY;
}


genFood();
setInterval(runGame, 150);


document.addEventListener("keydown", function (el) {
    let key = el.key;
    if (key == "ArrowUp" && movementY != 1) {
        movementX = 0;
        movementY = -1;
    } else if (key == "ArrowDown" && movementY != -1) {
        movementX = 0;
        movementY = 1;
    } else if (key == "ArrowLeft" && movementX != 1) {
        movementY = 0;
        movementX = -1;
    } else if (key == "ArrowRight" && movementX != -1) {
        movementY = 0;
        movementX = 1;
    }
});
