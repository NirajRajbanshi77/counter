const displayValue = document.querySelector('.displayValue');
const incBtn = document.querySelector('.increment');
const decBtn = document.querySelector('.decrement');
const changeValue = document.querySelector('.changeValue');
const resetBtn = document.querySelector('.reset')

let result = parseFloat(localStorage.getItem('result')) || 1;
let toChange;

if(result){
    displayValue.innerText = localStorage.getItem('result')
}

changeValue.addEventListener('input', (e)=>{
    console.log('change value tiggred')
    toChange =parseFloat(e.target.value) || 0;
    console.log(toChange)
})

incBtn.addEventListener(('click'),(e)=>{
    console.log('inc clicked')
e.stopPropagation()
    result = toChange + result;
   

    if(isNaN(result)){
        alert('invalid input! resetting to previous result')
        result = 1
    }

    localStorage.setItem('result', result);
    console.log(result)
    displayValue.innerText = localStorage.getItem('result');
})

decBtn.addEventListener(('click'),(e)=>{
    e.stopPropagation()
    console.log('decrement clicked')
        result = result-toChange;


        if(isNaN(result)){
            alert('invalid input! resetting to previous result')
            result = 1
        }

        localStorage.setItem('result', result)
        displayValue.innerText = localStorage.getItem('result');

    })

    resetBtn.addEventListener(('click'), ()=>{
        result = 1;
        localStorage.setItem('result', result)
        displayValue.innerText = 1;
        changeValue.value = ''

    })

    



