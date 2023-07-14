// 1-variable diclaration
 var cvs = document.getElementById("canvas").getContext("2d")
 var spox = 80
 var spoy = 80
 var npox = 0
 var npoy = 0
 var fpox = 140
 var fpoy = 140
 var snakeTail =[]
 var snakeSize = 1
//2-onload function
window.onload = function () {
    document.addEventListener("keydown", inputControl);
    setInterval(mainGame, 500)

}



//3-main game function
function mainGame(){

    //move snake
    spox += npox
    spoy += npoy

    //control snake
    if(spox>400){
        spox = 0
    }
    if(spoy>400){
        spoy = 0
    }
    if(spox<0){
        spox = 400
    }
    if(spoy<0){
        spoy = 400
    }


    //background color
    cvs.fillStyle = 'black'
    cvs.fillRect(0,0,400,400)

    //grid
    for(var cl=0; cl<=400; cl+=20){
        cvs.moveTo(cl,0);
        cvs.lineTo(cl,400);
    }

    for(var rl=0; rl<=400; rl+=20){
        cvs.moveTo(0,rl);
        cvs.lineTo(400,rl);
    }
    cvs.strokeStyle = "grey"
    cvs.stroke()
    //snake
    cvs.fillStyle = 'yellow'
    //cvs.fillRect(spox,spoy,20,20)
    for(var i=0; i<snakeTail.length; i++){
        cvs.fillRect(
            snakeTail[i].x, snakeTail[i].y,20,20
        )
    }
    //fruit
    cvs.fillStyle = 'red'
    cvs.fillRect(fpox,fpoy,20,20)

    //if snake eat fruit
    if(fpox==spox&&fpoy==spoy){
    snakeSize++;
    fpox = Math.floor(Math.random()*20)*20
    fpoy = Math.floor(Math.random()*20)*20
    }
    snakeTail.push({x:spox, y:spoy})
    while(snakeTail.length>snakeSize){
        snakeTail.shift()
    }
}



//4-input control function
function inputControl(e){
    console.log(e.key)
    console.log(e.keyCode)
    switch(e.keyCode){
        case 37:
            //left
            npox -= 20;
            npoy = 0
            break;
        case 38:
            //up
            npoy-=20;
            npox = 0
            break;
        case 39:
            //right
            npox += 20;
            npoy = 0
            break;
        case 40:
            //down
            npoy+= 20;
            npox = 0
            break;
    }
}


