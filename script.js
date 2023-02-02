document.addEventListener('click', function(e){
    if(e.target.innerText == "="){
        evaluate(document.querySelector("#display").value)
    }
    if(e.target.tagName == "TD"){
        display(e.target.innerText)
    }
})

function display(val){
    document.querySelector("#display").value += val
}

function evaluate(expression){
    console.log(expression)
}