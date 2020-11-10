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
    }else if(e.target.classList.contains('key')){
        if(e.target.innerHTML === 'Del'){
            dataInput.pop();
            displayOutput.textContent = dataInput.join('');
        }else if(e.target.innerHTML === 'CE'){
            dataInput = [];
            displayOutput.textContent = dataInput;
        }
    }else if(e.target.classList.contains('equal')){
            if(dataInput.includes('+')){
                let dataToAdd = dataInput.join('');
                addition(dataToAdd);
                dataInput = [];
            }else if(dataInput.includes('-')){
                let dataToSubtract = dataInput.join('');
                subtraction();
            }else if(dataInput.includes('*')){
                let dataToMultiply = dataInput.join('');
                multiplication();
            }else if(dataInput.includes('/')){
                let dataToDivide = dataInput.join('');
                division();
            }
    }
    //Do Not Remove
    //console.log(dataInput);
});

function addition(toAdd){
    //console.log(toAdd);
    let result_raw = toAdd;
    let result_split = result_raw.split('+');
    let result0 = parseInt(result_split[0]);
    let result1 = parseInt(result_split[1]);
    function addResult(num1,num2){
        console.log(num1 + num2);
    };
    addResult(result0, result1);
};

function subtraction(){
    
}

function division(){
    
}

function multiplication(){
    
}
