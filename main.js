const board = document.getElementById('board');
var cubeImage;
var brownPos = [];
var redPos = [];
var secondRow = false;
var inProces = false;
var optionsCubeA;
var optionsCubeB;

for (let i = 0; i < 64; i++) {
    setBoard(i);
}

console.log(brownPos);
console.log(redPos);


function clicka(id){
    let idNumber = parseInt(id)
    if (brownPos.includes(idNumber)) {
        
        
        optionsCubeA = document.getElementById(`${idNumber + 7}`).src = "blank-grey.png";
        optionsCubeB = document.getElementById(`${idNumber + 9}`).src = "blank-grey.png";
        optionsCubeA.src = "blank-green.png";
        optionsCubeB.src = "blank-green.png";
    }
    
}

function setBoard(i){
    if(i % 8 === 0) secondRow = !secondRow;
    if(secondRow){
        if(i % 2 === 0){
            if(i < 23){
                cubeImage = "brown-tool.png";
                brownPos.push(i);
            } 
            if(i > 23 && i < 39) cubeImage = "blank-grey.png";
            if(i > 39){
                cubeImage = "red-tool.png";
                redPos.push(i);
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
                brownPos.push(i);
            } 
            if(i > 23 && i < 39) cubeImage = "blank-grey.png";
            if(i > 39){
                cubeImage = "red-tool.png";
                redPos.push(i);
            } 
        }
    }

    
    board.innerHTML += `<img id="${i}" onclick="clicka(id)" src="${cubeImage}" alt="" style="width: 60px; height: 60px; border: 1px black solid; margin: -2px; "/>` 
}
