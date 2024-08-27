'use strict mode';

//Variables
let waterValue = 0;

const waterEl = document.getElementById('water-value');
const plusBtn = document.querySelector('.plus');
const lessBtn = document.querySelector('.less');

plusBtn.addEventListener('click', ()=>{
    waterValue += 36;
    waterEl.textContent = `${waterValue} oz`;
});

lessBtn.addEventListener('click', () => {
    if(waterValue > 0){
        waterValue -= 36;
        waterEl.textContent = `${waterValue} oz`;
    }  
  
});