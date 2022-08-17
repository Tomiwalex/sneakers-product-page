const hamburger = document.querySelector("#btnHamburger");
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click',function(){
console.log('open Hamburger');

    if (header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noscroll');

        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }

    else {
        header.classList.add('open');
        body.classList.add('noscroll');
       
        fadeElems.forEach(function(element){
           element.classList.remove('fade-out');
           element.classList.add('fade-in');
        });
        
    }
}); 