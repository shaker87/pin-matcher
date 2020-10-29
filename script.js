// Random Number Generate Function
function randomNumber(){
    const randomNumber = Math.round((1000 + Math.random() * 9000));
    const randomOutput = document.getElementById('randomOutput').value = randomNumber;
}

// buttonDigitNumber
function number(num) {
    document.getElementById('screen').value = document.getElementById('screen').value + num;

}

// Clear Display Value
function clearDisplay(){
    document.getElementById('screen').value = "";
}

// Clear Last Digit In Display
function clearLastDigit() {
    let clearBack = document.getElementById('screen').value;
    document.getElementById('screen').value = clearBack.substring(0, clearBack.length - 1);
}

// Submit Button
function submitButton(){
    let generatePin = document.getElementById('screen').value;
    let randomNumber = document.getElementById('randomOutput').value;
    if(generatePin == randomNumber){
        document.getElementById('matched').style.display = "block";
        document.getElementById('doNotMatched').style.display = "none";
    }
    if(generatePin != randomNumber){
        document.getElementById('matched').style.display = "none";
        document.getElementById('doNotMatched').style.display = "block";
        const decrease = parseInt(document.getElementById('decrease').innerText);
        const newDecrease = decrease - 1;
        if(newDecrease == 0){
            document.getElementById('submit').disabled= true;
        }
        document.getElementById('decrease').innerText = newDecrease;
    }
}