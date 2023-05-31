let cartttsIcon = document.querySelector('#cart-icon')
let carttts = document.querySelector('.carttts')
let closemenu = document.querySelector('#close-menu')

cartttsIcon.onclick = () => {
    carttts.classList.add("active");
}
closemenu.onclick = () => {
    carttts.classList.remove("active");
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
        button.addEventListener('click' , removeCartIteminCart)
    }
    var quantityInputs = document.getElementsByClassName('carttts-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change" , quantityChangedinCart);
    }
}
function removeCartIteminCart(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal()
}
function quantityChangedinCart(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal();
}
function updatetotal(){
    var cartttsContent = document.getElementsByClassName('carttts-cont')[0];
    var cartttsBoxes = cartttsContent.getElementsByClassName('carttts-box');
    var total = 0;
    for (var i = 0; i < cartttsBoxes.length; i++){
        var cartttsBox = cartttsBoxes[i];
        var priceElement = cartttsBox.getElementsByClassName('carttts-price')[0];
        var quantityElement = cartttsBox.getElementsByClassName('carttts-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("AED" , ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = 'AED' + total;
    }
}