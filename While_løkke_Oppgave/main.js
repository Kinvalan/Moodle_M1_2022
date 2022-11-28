
let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;


function twoRandomNumbers() {
    while (number1 != number2) {
        number1 = Math.floor(Math.random() * 10) + 1;
        number2 = Math.floor(Math.random() * 10) + 1;
        console.log(number1);
        console.log(number2);
       }

    

    if(number1 == number2 ){
        document.getElementById('numbersDiv').innerHTML = /*HTML*/ "We found two equal numbers: " + number1 + ' and ' + number2 + "." + " Check the console while clicking the button for more information.";
    }
}


























