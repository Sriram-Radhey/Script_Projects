let userscore =0;
let compscore =0;

const Options = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const uscore = document.querySelector('#uscore');
const cscore = document.querySelector('#cscore');

const getCpuChoice =()=>{
    const litems = ["Rock","Paper","Scissors"]
    const ranIndx = Math.floor(Math.random()*3);
    return litems[ranIndx];
}
const playG = (mychoice)=>{
const cpuchoice = getCpuChoice();

if(mychoice === cpuchoice){
    drawGame();
}
else{
    let uWin = true;
    if(mychoice === "Rock"){
        uWin = cpuchoice ==="Paper"?false:true;
    }else if(mychoice === "Paper"){
        uWin = cpuchoice ==="Scissors"?false:true;
    }else{
        uWin = cpuchoice ==="Rock"?false:true;
    }
    showWinner(uWin,mychoice,cpuchoice);
}
}
const showWinner = (uWin,mychoice,cpuchoice) =>{
    if(uWin){
        userscore++;
        uscore.innerText = userscore;
        msg.innerText = 'You have win the game';
        msg.style.backgroundColor = 'green';
    }else{
        compscore++;
        cscore.innerText = compscore;
        msg.innerText = 'You have been Defeated';
        msg.style.backgroundColor = 'red';
    }
}
const drawGame= ()=>{
    msg.innerText = "Game Was a Draw.Try again😉";
    msg.style.backgroundColor = "violet";
}

Options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const mychoice = option.getAttribute('id');
        playG(mychoice);
    });
})

