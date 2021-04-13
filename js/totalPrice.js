'use strict';

let blokPrice = document.getElementsByClassName('vivod');
let table = document.querySelector('b');
let info = document.getElementById('info');

for(let i = 0; i <blokPrice.length; i++ ) {
      blokPrice[i].addEventListener('click', function() {


            let activeCells = getActiveCells(table);
            let sum = getElemsSum(activeCells);
            showSum(sum, info);
            
      });
}


function getActiveCells(table) {
    return table.querySelectorAll('b');
}

function getElemsSum(elems) {
    let sum = 0;
    for (let i = 0; i < elems.length; i++) {
    sum += Number(elems.innerHTML);
 }
    return sum;
}

function showSum(sum, elem) {
    elem.innerHTML = sum;
}