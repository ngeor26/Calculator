document.addEventListener('click', function(e){
    if(e.target.id == "clear"){
        document.querySelector("#display").value = ""
    }else if(e.target.innerText == "="){
        evaluate(document.querySelector("#display").value)
    }else if(e.target.tagName == "TD"){
        display(e.target.innerText)
    }
})

function display(val){
    arr = document.querySelector("#display").value.split("")
    if(!Number.isInteger(parseInt(val))){
        document.querySelector("#display").value += " " + val + " "
    }else {
        document.querySelector("#display").value += val
    }
}

function evaluate(expression){
    arr = expression.split(" ")
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(parseInt(arr[i]))){
            arr[i] = parseInt(arr[i])
        }
    }
    console.log(arr)
    while(arr.includes("×")){
        let num = arr[arr.indexOf("×") - 1] * arr[arr.indexOf("×") + 1]
        arr[arr.indexOf("×") - 1] = num
        arr.splice(arr.indexOf("×"), 2)
        console.log(arr)
    }

    while(arr.includes("/")){
        let num = arr[arr.indexOf("/") - 1] / arr[arr.indexOf("/") + 1]
        arr[arr.indexOf("/") - 1] = num
        arr.splice(arr.indexOf("/"), 2)
        console.log(arr)
    }

    while(arr.includes("+")){
        let num = arr[arr.indexOf("+") - 1] + arr[arr.indexOf("+") + 1]
        arr[arr.indexOf("+") - 1] = num
        arr.splice(arr.indexOf("+"), 2)
        console.log(arr)
    }

    while(arr.includes("-")){
        let num = arr[arr.indexOf("-") - 1] - arr[arr.indexOf("-") + 1]
        arr[arr.indexOf("-") - 1] = num
        arr.splice(arr.indexOf("-"), 2)
        console.log(arr)
    }

    document.querySelector("#display").value = arr[0].toFixed(2)
}