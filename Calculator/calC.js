const input = document.getElementById('input-f');
const cBtn = document.getElementById('cbtn');

input.value = `0`;

function appendOp(result){
    if(input.value === '0' && input.value !== '.'){
        input.value = result;
    }
    else{
    input.value += result;
    }
}

function clearField(){
    input.value = '0';
}

function evalUate(){
    try{
        let result= parseFloat(eval(input.value));
        if(result % 1 === 0) input.value = result;
        else input.value = result.toFixed(2);
        if(input.value === `Infinity`){
            input.value = `Can't Divide with zero`;
        }
    }
    catch(error){
        input.value = `Error`;
    }
}

function getValue(x){
try{
    if(x=== 'x2'){
        let m = input.value;
        input.value = m*m;
    }
    else if(x==='rx'){
        let m = input.value;
        input.value = Math.sqrt(m);
    }
    else if(x === '+/-'){
        let m = input.value;
        if(!isNaN(m)){
            input.value = (m>0 ? -Math.abs(m):Math.abs(m));
        }
    }
}
catch(error){
    input.value = `Error`;
}
}