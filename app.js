let input = document.getElementById("input");

function operators (secondValue){
    let firstValue = input.innerHTML;
    if(firstValue.startsWith("0")){
        input.innerHTML = secondValue;
    }else{
        input.innerHTML = firstValue + secondValue
    }
}

function perform (){
    let result = input.innerHTML;
    input.innerHTML = eval(result)
};

function allClear (){
    input.innerHTML = "0"
};

function clearing(){
    let deleteValue = input.innerHTML;

    if (deleteValue.length >1){
        input.innerHTML = deleteValue.slice(0, -1)
    }else{
        input.innerHTML = "0"
    }
}









































// function operators(currentValue) {
//     let previousValue = input.innerHTML;
//     if (previousValue.startsWith("0")) {
//         input.innerHTML = currentValue;
//     }else{
//         input.innerHTML = previousValue + currentValue;
//     }
    
// }

// // for equal to

// function perform() {
//     let result = input.innerHTML;
//     input.innerHTML = eval(result);


// }

// function allClear() {
//     input.innerHTML = "0";
// }

// function clearing (){
//     let deleteValue = input.innerHTML;
//     if(deleteValue > 0 ){
//         input.innerHTML = deleteValue.slice(0, -1);
//     }
// }