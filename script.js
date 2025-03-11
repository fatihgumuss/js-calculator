function addition(a,b){
    return a + b;
}
function substraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
function operate(numberOne,numberTwo,operator){
    let result = null
    switch(operator){
        case "+":
            result = addition(numberOne,numberTwo)
            break;
        case "-":
            result = substraction(numberOne,numberTwo)
            break;
        case "*":
            result = multiplication(numberOne,numberTwo)
            break;
        case "/":
            result = division(numberOne,numberTwo)
            break;
    }
    console.log(result)
    return result
}
const display = document.getElementById("input")
let numberOne = null
let numberTwo = null
let currentInput = ""
let operators = []
const buttons = document.querySelectorAll(".operator")

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        if(button.id === "clear"){
            operators = []
            numberOne = null
            numberTwo = null
            currentInput = ""
            display.value = ""
        }
        if(button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/"){
            operators.push(button.id)
            
            if(currentInput !== "") {
                if(numberOne === null) {
                    numberOne = parseFloat(currentInput)
                } else {
                    numberTwo = parseFloat(currentInput)
                }
                currentInput = ""
            }
            
            if(numberOne !== null && numberTwo !== null){
                numberOne = operate(numberOne, numberTwo, operators[0]).toFixed(5)
                operators.shift()
                display.value = numberOne
                numberTwo = null
            } else {
                display.value = numberOne || "0"
            }
            
            console.log(operators)
        }
        if(button.id === "decimal"){
            if(currentInput.indexOf(".") === -1){
                currentInput += "."
                display.value = currentInput
            }
        }
        if(button.id === "backspace"){
            currentInput = currentInput.slice(0,-1)
            display.value = currentInput
        }
        if(button.id === "equal"){
            if(currentInput !== "" && numberOne !== null) {
                numberTwo = parseFloat(currentInput)
                currentInput = ""
            }
            
            console.log(numberOne, operators[0], numberTwo)
            
            if(numberOne !== null && numberTwo !== null && operators.length > 0) {
                numberOne = operate(numberOne, numberTwo, operators[0]).toFixed(5)
                numberOne - Math.floor(numberOne) !== 0 ? display.value = numberOne : display.value = Math.floor(numberOne)
                operators.shift()
                numberTwo = null
            }
            operators = []
        }
    })
})

const numbers = document.querySelectorAll(".number")
numbers.forEach(number =>{
    number.addEventListener("click",()=>{
        currentInput += number.id
        display.value = currentInput
        
        console.log("Current input: " + currentInput)
    })
})