var btn1 = document.querySelector('.btn1');

var btn2 = document.querySelector('.btn2');

const countDisplay= document.querySelector('.counter');
let count = 0; 

btn1.addEventListener('click', function(){
      count--;
      countDisplay.innerHTML = count;
});

btn2.addEventListener('click', function(){
    count ++;
    countDisplay.innerHTML = count;
});