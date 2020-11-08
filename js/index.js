const displayInput = document.querySelector('.displayInput');
const displayOutput = document.querySelector('.displayOutput');
const keyInputs = document.querySelector('.keyInput');
const operatorKeys = document.querySelectorAll('.operator');

let dataInput = [];

keyInputs.addEventListener('click', (e)=>{
    //console.log(e);
    
    if(e.target.classList.contains('number')){
        dataInput.push(e.target.textContent);
        displayOutput.textContent = dataInput.join('');
    }else if(e.target.classList.contains('operator')){
        dataInput.push(e.target.textContent);
        displayOutput.textContent = dataInput.join('');
            if(e.target.textContent === '+' ||
               e.target.textContent === '-' ||
               e.target.textContent === '*' ||
               e.target.textContent === '/'
              ){
                //when operator is click pass to equal to execute
            }

    }else if(e.target.classList.contains('key')){
        if(e.target.innerHTML === 'Del'){
            dataInput.pop();
            displayOutput.textContent = dataInput.join('');
        }else if(e.target.innerHTML === 'CE'){
            dataInput = [];
            displayOutput.textContent = dataInput;
        }
    }else if(e.target.classList.contains('equal')){
            operatorLogic();
    }
    //Do Not Remove
    console.log(dataInput);
});

function operatorLogic(){
    let joinData = dataInput.join('');
    console.log(joinData);
};

function addition(num1,num2){
    console.log(num1 + num2);
}

function subtraction(num1, num2){
    return num1 - num2;
}

function division(num1, num2){
    return num1 / num2;
}

function multiplication(num1, num2){
    return num1 * num2;
}
