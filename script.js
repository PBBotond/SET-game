let selectedPlayerCount
let selectedGameMode=""
let showButton=false;
let hintButton=false;
let automatic=false;
let playerObjList;

let gameDiv = document.querySelector('#game');

let menuDiv = document.querySelector('#menu');

let ruleDiv = document.querySelector('#rules');

let numberOfPlayerSelector =document.querySelector('#nop')

let gmodes = document.querySelector('#gmodes')

let extra = document.querySelector('#extra')
let playerNameSpace = document.querySelector('#playername');

let showcheckbox = document.querySelector('#show');
let hintcheckbox = document.querySelector('#hint');
let automaticcheckbox = document.querySelector('#auto');

let gmodemenuchild = gmodes.children;
for (elem of gmodemenuchild){
    elem.addEventListener('click',(event)=>{
        for (elem of gmodemenuchild){
            elem.style.color='';
        }
        event.target.parentElement.classList.add('frized')
        console.log(gmodes);
        event.target.style.color='red';
        selectedGameMode=event.target.id;
        if(selectedGameMode==="normal"){
            hintButton=false;
            showButton=false;
            automatic=true;
            hintcheckbox.checked=hintButton 
            showcheckbox.checked=showButton
            automaticcheckbox.checked=automatic
            hintcheckbox.disabled=true;
            showcheckbox.disabled=true;
            automaticcheckbox.disabled=true;
            
        }else{
            hintcheckbox.disabled=false;
            showcheckbox.disabled=false;
            automaticcheckbox.disabled=false;
        }
        console.log(automaticcheckbox)
        console.log(selectedGameMode);
    })
}

let playermenutrchild = numberOfPlayerSelector.children;
for (elem of playermenutrchild){
    elem.addEventListener('click',(event)=>{
        for (elem of playermenutrchild){
            elem.style.color='';
        }
        event.target.style.color='red';
        selectedPlayerCount=parseInt(event.target.innerText);
        nopOption.innerText =`Játékosok száma ${selectedPlayerCount}`
        createPlayerNameField(selectedPlayerCount)
    })
}

function createPlayerNameField(maxPlayer){
    playerNameSpace.innerHTML="";
    for(let i =0; i<maxPlayer;i++){
        let newTr = document.createElement('tr');
        let newTd = document.createElement('td');
        let newInput = document.createElement('input');
        newInput.value = `Játékos ${i+1}`;
        newTd.appendChild(newInput);
        newTr.appendChild(newTd);
        playerNameSpace.appendChild(newTr);
    }
}


function displayswitch(target){
    if(target.classList.contains('hidden')){
        target.classList.remove('hidden');
    }else{
        if(!target.classList.contains('frized'))
        target.classList.add('hidden');
    }
    
}



function gameStart(){
    if(selectedPlayerCount!=undefined&&selectedGameMode!=""){
        displayswitch(menuDiv);
    displayswitch(gameDiv);
    showButton=showcheckbox.checked
    hintButton=hintcheckbox.checked
    automatic=automaticcheckbox.checked
    playerObjList =document.querySelectorAll('#playername input');
    init();
    }else{
        let alertMsg=""
        if(selectedPlayerCount==undefined)alertMsg+="Kötelező játékos számot választani \n";
        if(selectedGameMode=="")alertMsg+="Kötelező játékmódot választani \n";
        alert(alertMsg)
    }
}
displayswitch(numberOfPlayerSelector);
displayswitch(gameDiv);
displayswitch(ruleDiv);
displayswitch(gmodes);
displayswitch(extra);

let startButton = document.querySelector('#startb');
startButton.addEventListener('click', gameStart);

let nopOption = document.querySelector('#numOfPlayes');
nopOption.addEventListener('click', ()=>{
    displayswitch(numberOfPlayerSelector)
})
let gameRules = document.querySelector('#gamerules')
gameRules.addEventListener('click',()=>{
    displayswitch(menuDiv)
    displayswitch(ruleDiv)
})
let backButtons = document.querySelectorAll('#back');
for (elem of backButtons){
    elem.addEventListener('click',(event)=>{
        console.log(event.target.parentElement);
        if(event.target.parentElement.id=='rules'){
            displayswitch(ruleDiv)
        }else{
            displayswitch(gameDiv)
        }
        if(event.target.parentElement.id=='game'){
            alert("Ha visszalépsz el fog veszni a jelenlegi játékállás.")
            reset()
        }
        displayswitch(menuDiv)
    })
}

let gameMode = document.querySelector('#gameMode');
gameMode.addEventListener('click', ()=>{
    displayswitch(gmodes)
})
let options = document.querySelector('#options');
options.addEventListener('click',()=>{
    displayswitch(extra)
})


// game


let cards = [
    "src\\1HgD.svg",
    "src\\1HgP.svg",
    "src\\1HgS.svg",
    "src\\1HpD.svg",
    "src\\1HpP.svg",
    "src\\1HpS.svg",
    "src\\1HrD.svg",
    "src\\1HrP.svg",
    "src\\1HrS.svg",
    "src\\1OgD.svg",
    "src\\1OgP.svg",
    "src\\1OgS.svg",
    "src\\1OpD.svg",
    "src\\1OpP.svg",
    "src\\1OpS.svg",
    "src\\1OrD.svg",
    "src\\1OrP.svg",
    "src\\1OrS.svg",
    "src\\1SgD.svg",
    "src\\1SgP.svg",
    "src\\1SgS.svg",
    "src\\1SpD.svg",
    "src\\1SpS.svg",
    "src\\1SrD.svg",
    "src\\1SrP.svg",
    "src\\1SrS.svg",
    "src\\2HgD.svg",
    "src\\2HgP.svg",
    "src\\2HgS.svg",
    "src\\2HpD.svg",
    "src\\2HpP.svg",
    "src\\2HpS.svg",
    "src\\2HrD.svg",
    "src\\2HrP.svg",
    "src\\2HrS.svg",
    "src\\2OgD.svg",
    "src\\2OgP.svg",
    "src\\2OgS.svg",
    "src\\2OpD.svg",
    "src\\2OpP.svg",
    "src\\2OpS.svg",
    "src\\2OrD.svg",
    "src\\2OrP.svg",
    "src\\2OrS.svg",
    "src\\2SgD.svg",
    "src\\2SgP.svg",
    "src\\2SgS.svg",
    "src\\2SpD.svg",
    "src\\2SpS.svg",
    "src\\2SrD.svg",
    "src\\2SrP.svg",
    "src\\2SrS.svg",
    "src\\3HgD.svg",
    "src\\3HgP.svg",
    "src\\3HgS.svg",
    "src\\3HpD.svg",
    "src\\3HpP.svg",
    "src\\3HpS.svg",
    "src\\3HrD.svg",
    "src\\3HrP.svg",
    "src\\3HrS.svg",
    "src\\3OgD.svg",
    "src\\3OgP.svg",
    "src\\3OgS.svg",
    "src\\3OpD.svg",
    "src\\3OpP.svg",
    "src\\3OpS.svg",
    "src\\3OrD.svg",
    "src\\3OrP.svg",
    "src\\3OrS.svg",
    "src\\3SgD.svg",
    "src\\3SgP.svg",
    "src\\3SgS.svg",
    "src\\3SpD.svg",
    "src\\3SpS.svg",
    "src\\3SrD.svg",
    "src\\3SrP.svg",
    "src\\3SrS.svg"
]
//if player name is debug or altDeck
let debug=false;
let altDeck=false;
//

let gameplace = document.querySelector('#gametable');
let leftSpace = document.querySelector('#leftSpace table');
let rightSpace = document.querySelector('#rightSpace table');
let infoTable = document.querySelector('#infoLine table')
let scoreList = document.querySelector('#scoreList table')
displayswitch(scoreList);
let gamebackB = document.querySelector('#game #back')

let solution=false;
let playerList=[];
let rowOn = 4

let singlePlayer=false
let sDate;
let fDate;

let badSDeck=[23,15,55,42,0,10,67,54,63,46,50,1,3,5,12,6,22,32]


let deckID=[];

let deck=[]

let selectedCards =[];

let activePlayer=undefined;
let leftPlayerCount;
let rightPlayerCount

function reset(){
    gameplace.innerHTML="";
    rightSpace.innerHTML="";
    leftSpace.innerHTML="";
    playerList=[];
    deckID=[];
    deck=[];
    selectedCards=[];
    activePlayer=undefined;
    singlePlayer=false;
    rowOn=4
    scoreList.innerHTML="";
    gameplace.style.border= '1px';
}

function deckLogAndInterpretation(deckId){
    for (const elem of deckId) {
        let actualCard=cards[elem]
        let tempString=actualCard.split("\\");
        let info=tempString[1].split(".");
        let temp = parser(info[0],elem);
        deck.push(temp);
        let printString =
        `ID: ${temp.id}| Count: ${temp.count} | Model: ${temp.model} 
        | Color: ${temp.color} | Shape: ${temp.shape}`;
        console.log(printString);
    }
}

function parser(parsableString,id){ 
    let count = parseInt(parsableString[0]);
    let model;
    let color;
    let shape;
    switch(parsableString[1]){
        case 'S':
            model="Full";
        break;
        case 'H':
            model="Lined";
        break;
        case 'O':
            model="Empty";
        break;
    }
    switch(parsableString[2]){
        case 'g':
            color="Green";
        break;
        case 'p':
            color="Purple";
        break;
        case 'r':
            color="Red";
        break;
    }
    switch(parsableString[3]){
        case 'P':
            shape="Ellipse"
        break;
        case 'S':
            shape="ShapeLess"
        break;
        case 'D':
            shape="Diamond"
        break;
    }
    return({id,count,model,color,shape})
}
function cardDraw(){
    gameplace.innerHTML="";
    for(let i=0;i<rowOn;i++){
        if((i*3)+1>deck.length){rowOn-=1; return}
        let newCardRow = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let newCard = document.createElement('td');
            let newImage = document.createElement('img');
            newImage.src=cards[deck[(i*3)+j].id];
            newImage.id=`cardID|${deck[(i*3)+j].id}`;
            newImage.addEventListener('click',cardSelect);
            newCard.appendChild(newImage);
            newCardRow.appendChild(newCard);
            
        }
        gameplace.appendChild(newCardRow);
    }
}
function init(){
    for(elem of playerObjList){
        
        playerList.push({name: elem.value, points: 0, disqualificated: false, selected: false});
        if(playerObjList.length==1){playerList[0].selected=true;
            singlePlayer=true;console.log("Single");
            activePlayer=playerList[0]
            sDate = Date.now();
        };
        if(elem.value=="debug"){debug=true;}
        if(elem.value=="altDeck"){altDeck=true;}
    }
    mkdeck(27)
    if(altDeck)deckID=badSDeck;
    deckLogAndInterpretation(deckID);
    cardDraw();
    drawInfo();
    hasSETOnTable()
    leftPlayerCount= Math.round(selectedPlayerCount/2);
    rightPlayerCount= selectedPlayerCount-leftPlayerCount;
    console.log(`Debug Mode:${debug?"ON":"OFF"}`)
    console.log(`Alternative deck Mode:${altDeck?"ON":"OFF"}`)
    if(debug){
        console.log(`showButton=>${showButton}`)
        console.log(`hintButton=>${hintButton}`)
        console.log(`automatic=>${automatic}`)
        console.log(`Bal=>${leftPlayerCount} Jobb=>${rightPlayerCount}`);
        console.log(hasSETOnTable().solution);
    }
    redrawPlayer();
    
}

function mkdeck(count){
    let i=0;
    while(i<count){
        let rand = Math.floor(Math.random() * 78);
        if(!deckID.includes(rand)){
            deckID.push(rand);
            i++;
        }
        
    }
}

function cardSelect(event){
    if(activePlayer!=null){
        tempString=event.target.id.split('|')
        cardID=tempString[1];
        if(event.target.classList.contains('selectedCard')){
            event.target.classList.remove('selectedCard');
            selectedCards = selectedCards.filter(function(value, index, arr){ return value.id !=cardID;});
        }else{
        event.target.classList.add("selectedCard");
        
        for(elem of deck){
            if(elem.id==cardID){selectedCards.push(elem);}
        }
        if(selectedCards.length===3){
            if((isSET(selectedCards))){
                activePlayer.points+=1;
                removeCards();
                for(elem of playerList){elem.disqualificated=false;}
            }else{
                activePlayer.disqualificated=true;
                activePlayer.points-=1;
                selectRemove();0
                hasNotDisqualified();
            }
            solution=true;
            if(!singlePlayer){
                activePlayer.selected=false;
                activePlayer=undefined;
            }
            redrawPlayer();
            console.log(selectedCards);
            selectedCards=[];
        }
        console.log(selectedCards)
    }
    }
}

function hasNotDisqualified(){
    notDisqualified = playerList.filter(function(value, index, arr){ return (!value.disqualificated)});
    console.log(notDisqualified);
    if(notDisqualified.length===0){for(elem of playerList){elem.disqualificated=false;}}
}

function isSET(cardset){
    let count=false;
    let color=false;
    let shape=false;
        if(cardset[0].count===cardset[1].count&&cardset[0].count===cardset[2].count){
            count=!count;
        }else if(cardset[0].count!=cardset[1].count&&cardset[0].count!=cardset[2].count
            &&cardset[1].count!=cardset[2].count){
                count=!count;
            }
        
        if(cardset[0].color===cardset[1].color&&cardset[0].color===cardset[2].color){
            color=!color;
        }else if(cardset[0].color!=cardset[1].color&&cardset[0].color!=cardset[2].color
            &&cardset[1].color!=cardset[2].color){
                color=!color;
            }

        if(cardset[0].shape===cardset[1].shape&&cardset[0].shape===cardset[2].shape){
            shape=!shape;
        }else if(cardset[0].shape!=cardset[1].shape&&cardset[0].shape!=cardset[2].shape
            &&cardset[1].shape!=cardset[2].shape){
                shape=!shape;
            }
        //Todo detecting the modell.
        if(debug)console.log(`Count ${count} Color ${color} Shape ${shape}`)
    return count&&color&&shape
}
function removeCards(){
    console.log(deck);
    deck = deck.filter(function(value, index, arr){ console.log(`value ${value} card  ${selectedCards[0].id}`);return (value.id !=selectedCards[0].id&&value.id !=selectedCards[1].id&&value.id !=selectedCards[2].id)});
    console.log(deck);
    cardDraw();
    drawInfo();
    console.log(hasSETOnTable().solution);
}

function drawPlayer(startCount,maxCount,side){
    for (let i = startCount; i <maxCount+startCount ; i++) {
        let newTr = document.createElement('tr');
        let newTd = document.createElement('td');
        let newLabel = document.createElement('label');
        newLabel.innerText = `${playerList[i].name} \n ${playerList[i].points}`;
        newLabel.id=`p|${i}`;
        if(playerList[i].selected){newLabel.classList.add("selectedPlayer");}
        newLabel.addEventListener('click',(event)=>{
            let tempString=event.target.id.split('|');
            console.log(playerList[tempString[1]]);
            if (activePlayer===undefined&&!playerList[parseInt(tempString[1])].disqualificated&&!singlePlayer){
                activePlayer=playerList[tempString[1]];
                activePlayer.selected=true;
                newLabel.classList.add("selectedPlayer");
                startcountdown();

            }
            
        })
        if(playerList[i].disqualificated){newLabel.classList.add('disqualified')}
        newTd.appendChild(newLabel);
        newTr.appendChild(newTd);
        side.appendChild(newTr);
    }
}
function redrawPlayer(){
    leftSpace.innerHTML='';
    rightSpace.innerHTML='';
    drawPlayer(0,leftPlayerCount,leftSpace);
    drawPlayer(leftPlayerCount,rightPlayerCount,rightSpace);
}

window.addEventListener('keydown',(event)=>{
    if(debug){
        console.log(activePlayer);
        console.log(playerList.length);
    }
    switch(event.key){
        case '0':
            if (activePlayer===undefined&&!playerList[0].disqualificated) {
                activePlayer =playerList[0];
            }
        break;
        case '1':
        if(2<=playerList.length&&activePlayer===undefined&&!playerList[1].disqualificated){
            activePlayer =playerList[1];
        }
        break;
        case '2':
            if(3<=playerList.length&&activePlayer===undefined&&!playerList[2].disqualificated){
                activePlayer =playerList[2];
            }
        break;
        case '3':
            if(4<=playerList.length&&activePlayer===undefined&&!playerList[3].disqualificated){
                activePlayer =playerList[3];
            }
        break;
        case '4':
            if(5<=playerList.length&&activePlayer===undefined&&!playerList[4].disqualificated){
                activePlayer =playerList[4];
            }
        break;
        case '5':
            if(6<=playerList.length&&activePlayer===undefined&&!playerList[5].disqualificated){
                activePlayer =playerList[5];
            }
        break;
        case '6':
            if(7<=playerList.length&&activePlayer===undefined&&!playerList[6].disqualificated){
                activePlayer =playerList[6];
            }
        break;
        case '7':
            if(8<=playerList.length&&activePlayer===undefined&&!playerList[7].disqualificated){
                activePlayer =playerList[7];
            }
        break;
        case '8':
            if(9<=playerList.length&&activePlayer===undefined&&!playerList[8].disqualificated){
                activePlayer =playerList[8];
            }
        break;
        case '9':
            if(10<=playerList.length&&activePlayer==undefined&&!playerList[9].disqualificated){
                activePlayer =playerList[9];
            }
        break;
        case 'Enter':
            if(!automatic){
                if(debug)console.log("Added new row");
            rowOn+=1;
            cardDraw();
            drawInfo();
            }
        break;
    }
    console.log(event.key)
    if(activePlayer!=undefined){
        activePlayer.selected=true; 
        redrawPlayer();
        startcountdown();
    }

})

function startcountdown(){
    let timerLabel = document.querySelector('#timer');
    timerLabel.style.visibility='visible';
    let finish=Date.now()+10000;
    let now = Date.now();
    let distance=finish-now;
    timerLabel.innerText=`${Math.floor((distance % (1000 * 60)) / 1000)} mp`;
    let timer = setInterval(()=>{
        now = Date.now();
        distance=finish-now;
        timerLabel.innerText=`${Math.floor((distance % (1000 * 60)) / 1000)} mp`;
        if (distance < 0) {
            clearInterval(timer);
            timerLabel.style.visibility='hidden';
            activePlayer.disqualificated=true;
            activePlayer.points-=1;
            if(!singlePlayer)
            activePlayer.selected=false;
            activePlayer=undefined;
            hasNotDisqualified();
            selectRemove();
            selectedCards=[];
            
            redrawPlayer();
        } 
        if(solution){
            clearInterval(timer);
            timerLabel.style.visibility='hidden';
            solution=false;
        }
    },500)
}
function selectRemove(){
    for(elem of selectedCards){
        var searchId=`cardID|${elem.id}`;
        document.getElementById(searchId).classList.remove('selectedCard');
    }
}

function drawInfo(){
    infoTable.innerHTML="";
    let newTr = document.createElement('tr');
    let infoTd = document.createElement('td');
    infoTd.innerText=`A pakliban még van ${deck.length-(rowOn*3)}db lap`;
    newTr.appendChild(infoTd);
    if(showButton){
        let hintPart = document.createElement('td');
        let activateButton = document.createElement('button');
        let solutioLabel= document.createElement('label');
        activateButton.style.display='block';
        solutioLabel.style.textAlign='center';
        solutioLabel.style.display='block';
        solutioLabel.innerText="\n";
        activateButton.innerText="Található SET ?";
        activateButton.addEventListener('click',()=>{
            solutioLabel.innerText=`${hasSETOnTable().bool?"Igen":"Nem"}`;
        });
        hintPart.appendChild(activateButton);
        hintPart.appendChild(solutioLabel);
        newTr.appendChild(hintPart);
    }
    if(hintButton){
        let hintPart = document.createElement('td');
        let activateButton = document.createElement('button');
        let solutioLabel= document.createElement('label');
        activateButton.style.display='block';
        solutioLabel.style.textAlign='center';
        solutioLabel.style.display='block';
        solutioLabel.innerText="\n";
        activateButton.innerText="Mutass egy SET-et.";
        activateButton.addEventListener('click',()=>{
            solutioLabel.innerText=`${hasSETOnTable().bool?`${hasSETOnTable().position}`:"Nincs"}`;
            console.log(hasSETOnTable().position);
        });
        hintPart.appendChild(activateButton);
        hintPart.appendChild(solutioLabel);
        newTr.appendChild(hintPart);
    }
    if(!automatic){
        let helpSign = document.createElement('td');
        helpSign.innerText='"Enter" lenyomásával kérhet \n újabb 3 lapot'
        newTr.appendChild(helpSign);
    }
    infoTable.appendChild(newTr);
}

function hasSETOnTable(){
    console.log(`RowOn :${rowOn}`);
    for(let i=0 ;i<rowOn*3; i++){
        for(let t=0 ;t<rowOn*3; t++){
            for(let h=0 ;h<rowOn*3; h++){
                if(i!=h&&i!=t&&t!=h){
                    let tempCardSet=[];
                    tempCardSet.push(deck[i]); 
                    tempCardSet.push(deck[h]); 
                    tempCardSet.push(deck[t]); 
                    if(isSET(tempCardSet)){if(rowOn>4)rowOn-=1;return {bool:true,solution: tempCardSet,position: `${i+1} ${t+1} ${h+1}`};}
                }
            }
        }
    }
    if(rowOn>3&&automatic&&deck.length-(rowOn*3)>0){
        if(debug)console.log("Added new row");
        rowOn+=1;
        cardDraw();
        drawInfo();
        hasSETOnTable();
    }
    if(rowOn<4){
        gameplace.innerHTML="";
        gameplace.style.border= '0px';
    displayswitch(gameplace);
    displayswitch(rightSpace);
    displayswitch(leftSpace);
    displayswitch(infoTable);
    displayswitch(backButtons[0])
    console.log("DONE");
    endGame()
    }
    return false;
}

function endGame(){
    fDate=Date.now();
    let finalTime = fDate-sDate;
    displayswitch(scoreList);
    playerList.sort(function(a,b){
        if(a.points<b.points) return 1;
        if(a.points>b.points) return -1;
        return 0;
    })
    let pos=1;
    let headth = document.createElement('tr');
    let poshead = document.createElement('th');
    let namehead = document.createElement('th');
    let pointhead = document.createElement('th');
    poshead.innerText="Pozició";
    headth.appendChild(poshead)
    namehead.innerText="Név";
    headth.appendChild(namehead)
    pointhead.innerText="Pontszám";
    headth.appendChild(pointhead)
    if(singlePlayer){
        let timehead = document.createElement('th');
        timehead.innerText="Teljesítéshez szükségeltetett idő"
        headth.appendChild(timehead)
    }
    scoreList.appendChild(headth);
    for(elem of playerList){
        let newtr = document.createElement('tr');
        let posLine = document.createElement('td');
        posLine.innerText = `#${pos}`;
        let nameLine = document.createElement('td');
        nameLine.innerText = `${elem.name}`
        let pointLine = document.createElement('td');
        pointLine.innerText = `${elem.points}`
        newtr.appendChild(posLine);
        newtr.appendChild(nameLine);
        newtr.appendChild(pointLine);
        if(singlePlayer){
            let timeLine = document.createElement('td');
            let sec =Math.floor(((finalTime % (1000 * 60)) / 1000)/60)
            let ms = Math.floor(((finalTime % (1000 * 60)) / 1000)%60)
            timeLine.innerText=`p ${sec} mp ${ms}`
            newtr.appendChild(timeLine);
        }
        
        scoreList.appendChild(newtr);
        pos++;
    }
    let bttr = document.createElement('tr');
    let bttd = document.createElement('td');
    let bt = document.createElement('button');
    bttd.colSpan= singlePlayer?"4":"3";
    bt.innerText="Vissza a főmenübe";
    bt.addEventListener('click',()=>{
        displayswitch(gameDiv);
        displayswitch(menuDiv);
        gameplace.style.border= '1px';
        displayswitch(gameplace);
        displayswitch(rightSpace);
        displayswitch(leftSpace);
        displayswitch(infoTable);
        displayswitch(backButtons[0])
        displayswitch(scoreList);
        reset();
    })
    bttd.appendChild(bt);
    bttr.appendChild(bttd);
    scoreList.appendChild(bttr);
}