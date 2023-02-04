document.addEventListener('click', function(e){
    if(e.target.innerText == "="){
        evaluate(document.querySelector("#display").value)
    }else if(e.target.tagName == "TD"){
        display(e.target.innerText)
    }
})

function display(val){
    document.querySelector("#display").value += val
}

function evaluate(expression){
    expression = expression.split("")
    console.log(expression)
    while(expression.find("×") != -1){
        let num = expression[expression.indexOf("×") - 1] * expression[expression.indexOf("×") + 1]
        console.log(num)
    }
}