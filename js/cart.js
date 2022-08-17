var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var number = document.getElementById('number');

size = 0;

plus.addEventListener('click', function(){
    size ++;
    number.innerHTML = size;
});

minus.addEventListener('click', function(){
    if (size > 0){
        size--
        number.innerHTML = size;
    }
})

var cartBag = document.getElementById('cart-bag');
var cart = document.getElementById('cart');


cart.addEventListener('click', addopen);

function addopen(){
    if (cartBag.classList.contains("fade-in")){
        cartBag.classList.remove('fade-in');
        cartBag.classList.add('fade-out');
    }
    else{
        cartBag.classList.add('fade-in');
        cartBag.classList.remove('fade-out');

    }
}

//cart function

//add to cart button 

function addcartclicked() {
    var cartQuantity = document.getElementById('number').innerText;
    var cartTotal = "$" + (125 * cartQuantity) + ".00";
    addproducts(cartQuantity, cartTotal)
    tally.style.visibility = 'visible'
}

 var count = 0
function addproducts(cartQuantity, cartTotal) {
    var empty = document.getElementById('empty');
    var par = document.getElementById('par');
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-item');
    var details = document.getElementsByClassName('cart-details')[0];
    


var cartBoxContent = `
    <img src="images/image-product-1-thumbnail.jpg" id="cart-image">
      
    <div class="txt">
        Autumn Limited Edition<br/>
        $125.00 X <span id="cart-quantity">${cartQuantity}</span>  <b id="cart-total">${cartTotal}</b>
    </div>
  
    <img src="images/icon-delete.svg" class="cart-delete"> `
;

var tally = document.getElementById('tally');

cartShopBox.innerHTML = cartBoxContent 
details.append(cartShopBox)
count ++
tally.innerHTML = count;


var cartdelete = cartShopBox.getElementsByClassName('cart-delete')[0]
cartdelete.addEventListener('click', function(){
    this.parentElement.remove();
    count--
    if (count >= 1){
        empty.style.visibility='hidden'
        par.style.display='block'
        tally.style.visibility = 'visible'
    }else {
        empty.style.visibility='visible'
        par.style.display='none'
        tally.style.visibility = 'hidden'
        }

    tally.innerHTML = count;
   
    
})

if (count >= 1){
    empty.style.visibility='hidden'
    par.style.display='block'
}

}
 