const board = document.getElementById('board');
var cubeImage;
// var brownPos = [];
// var redPos = [];
var secondRow = false;
var inProces = false;
var optionsCubeA;
var optionsCubeB;
var activeOps = [];
var basePath = "http://127.0.0.1:5500/";
var chosenTool;
var chosenCube;
var brownTurn;

for (let i = 0; i < 64; i++) {
    setBoard(i);
}

//console.log(brownPos);
//console.log(redPos);


function clicka(id){

    resetGreyCubes();
   
    let idNumber = parseInt(id);
    
    

    if (document.getElementById(`${idNumber}`).src === `${basePath}brown-tool.png`) {
        chosenTool = document.getElementById(`${idNumber}`);
        optionsCubeA = document.getElementById(`${idNumber + 7}`);
        if(optionsCubeA.src === `${basePath}blank-grey.png`){
            optionsCubeA.src = "blank-green.png";
            activeOps.push(optionsCubeA);
        }
        optionsCubeB = document.getElementById(`${idNumber + 9}`);
        if(optionsCubeB.src === `${basePath}blank-grey.png`){
            optionsCubeB.src = "blank-green.png";
            activeOps.push(optionsCubeB);
        }
    }

    if (document.getElementById(`${idNumber}`).src === `${basePath}red-tool.png`) {
        chosenTool = document.getElementById(`${idNumber}`);
        optionsCubeA = document.getElementById(`${idNumber - 7}`);
        if(optionsCubeA.src === `${basePath}blank-grey.png`){
            optionsCubeA.src = "blank-green.png";
            activeOps.push(optionsCubeA);
        }
        
        optionsCubeB = document.getElementById(`${idNumber - 9}`);
        if(optionsCubeB.src === `${basePath}blank-grey.png`){
            optionsCubeB.src = "blank-green.png";
            activeOps.push(optionsCubeB);
        }
    }

    if (activeOps.includes(document.getElementById(`${idNumber}`))) {
        console.log("kjjj");
        
        chosenCube = document.getElementById(`${idNumber}`);
        chosenCube.src = chosenTool.src === `${basePath}brown-tool.png`? "brown-tool.png" : "red-tool.png";

        chosenTool.src = "blank-grey.png";
       
        activeOps = [];
        //brownPos.push();
    }
    
    
}

function resetGreyCubes() {
    for (let i = 0; i < activeOps.length; i++) {
        activeOps[i].src = "blank-grey.png";
    }
    //console.log(activeOps);
    
   
}



function setBoard(i){
    if(i % 8 === 0) secondRow = !secondRow;
    if(secondRow){
        if(i % 2 === 0){
            if(i < 23){
                cubeImage = "brown-tool.png";
                //brownPos.push(i);
            } 
            if(i > 23 && i < 39) cubeImage = "blank-grey.png";
            if(i > 39){
                cubeImage = "red-tool.png";
                //redPos.push(i);
            } 
            
        }
        if(i % 2 != 0){
            cubeImage = "blank-white.png"
        }
    }else{
        if(i % 2 === 0){
            cubeImage = "blank-white.png"
        }
        if(i % 2 != 0){
            if(i < 23){
                cubeImage = "brown-tool.png";
                //brownPos.push(i);
            } 
            if(i > 23 && i < 39) cubeImage = "blank-grey.png";
            if(i > 39){
                cubeImage = "red-tool.png";
                //redPos.push(i);
            } 
        }
    }

    
    board.innerHTML += `<img id="${i}" onclick="clicka(id)" src="${cubeImage}" alt="" style="width: 60px; height: 60px; border: 1px black solid; margin: -2px; "/>` 
}
