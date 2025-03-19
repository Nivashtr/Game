// variables

let gameLayout = document.querySelector(".gameLayout")
let totalScore =document.querySelector(".scoreCard h2")
let foodX,foodY;
let headX=12,headY=12;
let movementX=0,movementY=0;
let snackBoday=[]
let score=0









// function

function genFood(){
    foodX = Math.floor(Math.random()*26)+1;
    foodY = Math.floor(Math.random()*26)+1;
    for( let i=0; i<snackBoday.length; i++){
        if(snackBoday[i][1] == foodY && snackBoday[i][0] == foodX ){
            genFood();
        }
    }
}

function gameOver(){
    headX=12;
    headY=12;
    movementX =0;
    movementY=0;
    alert("GameOver")
    snackBoday=[];
    genFood()
    score = 0;
    totalScore.innerHTML = "Total Score: " + score;
}

function runGame(){
    let updategame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></i></div>`;
    if (headX == foodX && headY == foodY){
        snackBoday.push([foodX,foodY]);
        genFood();
        score += 10;
        totalScore.innerHTML = "Total Score:" +score;
    }

    for(i=0;i< snackBoday.length;i++){
        updategame += `<div class="head" style="grid-area: ${snackBoday[i][1]}/${snackBoday[i][0]};"></div>`;
    }

    snackBoday.pop();
    headX += movementX;
    headY += movementY;


    snackBoday.unshift([headX,headY]);

    for(let i =1; i<snackBoday.length; i++){
        if(snackBoday[0][0] == snackBoday[i][0] && snackBoday[0][1]== snackBoday[i][1]){
            gameOver();
            snackBoday=[];
            return
        }
    }

    let stop = headX <0|| headY <0 || headX > 26 || headY > 26; 
    
    if(stop){
        gameOver();
        snackBoday=[];
        return;
    }


    gameLayout.innerHTML = updategame;
}
genFood();
setInterval(runGame,150);

document.addEventListener("keydown",function(el){
    let key =el.key;
    console.log(key)
    if(key == "ArrowUp" && movementY!=1){
        movementX = 0;
        movementY = -1;
    }else if (key == "ArrowDown"&& movementY!=-1){
        movementX = 0;
        movementY = 1;
    }else if (key == "ArrowLeft" && movementX!=1){
        movementY = 0;
        movementX = -1;
    }else if (key == "ArrowRight" && movementX!=-1){
        movementY = 0;
        movementX = 1;
    }

})