const display = document.getElementById("display")

function buttonValue(input){
    display.value += input
}

function buttonCalculator(input){
    display.value = eval(display.value)
}

function buttonClear(){
    display.value = " ";

}

