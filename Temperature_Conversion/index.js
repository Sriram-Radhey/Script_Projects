const number = document.getElementById("text-f");
const celConvertor = document.getElementById("dropbtn1");
const fahrConvertor = document.getElementById("dropbtn2");
const result = document.getElementById("result");
let temp;

function convertTemp(){
    if(celConvertor.value === "Select scale" || fahrConvertor.value === "Select scale"){
        result.textContent = `You need to select the scale definetly`;
        result.style.color = '#f10bda';
    }
    else if(celConvertor.value === "celsius" && fahrConvertor.value === "fahrienheat"){
        temp = ((number.value)*(9/5))+32;
        result.textContent = `The temperature is ${temp.toFixed(1)}F`;
    }
    else if (celConvertor.value === "celsius" && fahrConvertor.value === "kelvin"){
        temp = (parseFloat(number.value)) + 273.15;
        result.textContent = `The temperature is ${temp.toFixed(1)}K`;
    }
    else if(celConvertor.value === "fahrienheat" && fahrConvertor.value === "celsius"){
        temp = ((parseFloat(number.value))-32)*(5/9);
        result.textContent = `The temperature is ${temp.toFixed(1)}C`;
    }
    else if(celConvertor.value === "fahrienheat" && fahrConvertor.value === "kelvin"){
        temp = ((parseFloat(number.value))-32)*(5/9) + 273.15;
        result.textContent = `The temperature is ${temp.toFixed(3)}C`;
    }
    else if (celConvertor.value === "kelvin" && fahrConvertor.value === "celsius"){
        temp = (parseFloat(number.value)) - 273.15;
        result.textContent = `The temperature is ${temp.toFixed(2)}K`;
    }
    else if(celConvertor.value === "kelvin" && fahrConvertor.value === "fahrienheat"){
        temp = ((parseFloat(number.value))-273.15)*(9/5) +32;
        result.textContent = `The temperature is ${temp.toFixed(2)}C`;
    }
    else{
        result.textContent = 'Try to change one of the scale';
        result.style.color='red';
    }
}
