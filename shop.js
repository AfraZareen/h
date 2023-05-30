let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.carttts')
let closeCart = document.querySelector('#close-menu')

cartIcon.onclick = () => {
    cart.classList.add("active");
}
closeCart.onclick = () => {
    cart.classList.remove("active");
}
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready);
}else{
    ready();
}
function ready(){
    var removeCartButtons = document.getElementsByClassName('item-removal')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click' , removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('carttts-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change" , quantityChanged);
    }
}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal()
}
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal();
}
function updatetotal(){
    var cartContent = document.getElementsByClassName('carttts-cont')[0];
    var cartBoxes = cartContent.getElementsByClassName('carttts-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('carttts-price')[0];
        var quantityElement = cartBox.getElementsByClassName('carttts-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("AED" , ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = 'AED' + total;
    }
}