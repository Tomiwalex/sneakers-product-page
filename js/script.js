var menu = document.getElementById('menu');
var exit = document.getElementById('exit');
var over = document.getElementById('over');
var ham = document.getElementById('ham');

menu.addEventListener('click', function(){
    if (ham.classList.contains('slide-out')){
        ham.classList.remove('slide-out')
        ham.classList.add('slide-in')
    }else{
        ham.classList.add('slide-in')
    }

    if (over.classList.contains('fade-out')){
        over.classList.remove('fade-out')
        over.classList.add('fade-in')
    }else{
        over.classList.add('fade-in')
    }

});

exit.addEventListener('click', function(){
    if (ham.classList.contains('slide-in')){
        ham.classList.remove('slide-in')
        ham.classList.add('slide-out')
        
    }  
    if (over.classList.contains('fade-in')){
        over.classList.remove('fade-in')
        over.classList.add('fade-out')
    }  
});

var overDisplay = document.getElementById('over-display');
var over2 = document.getElementById('lay');
var quit = document.getElementById('quit');
var free = document.getElementById('my');

free.addEventListener('click', open);

function open(){
    if (overDisplay.classList.contains('fade-out')){
        overDisplay.classList.remove('fade-out')
        overDisplay.classList.add('fade-in')
    }else{
        overDisplay.classList.add('fade-in')
    }

    if (over2.classList.contains('fade-out')){
        over2.classList.remove('fade-out')
        over2.classList.add('fade-in')
    }else{
        over2.classList.add('fade-in')
    }
}

quit.addEventListener('click', function(){
    if (overDisplay.classList.contains('fade-in')){
        overDisplay.classList.remove('fade-in')
        overDisplay.classList.add('fade-out')
        
    }  
    if (over2.classList.contains('fade-in')){
        over2.classList.remove('fade-in')
        over2.classList.add('fade-out')
    }  
});

