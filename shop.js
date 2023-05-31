let cartttsIcon = document.querySelector('#cart-icon') //let used for declaring the cart_icon statement 
let carttts = document.querySelector('.carttts') //let used for declaring id cartts statement 
let closemenu = document.querySelector('#close-menu') //let used for declaring id close-menu statement 

cartttsIcon.onclick = () => { //for user to click and its activates the classlist property and adds in it
    carttts.classList.add("active");
}
closemenu.onclick = () => {
    carttts.classList.remove("active");//for user to click and its activates the classlist property and removes it
}
if (document.readyState == 'loading'){ // if the document is loading it adds event listener and prepares it to be available
    document.addEventListener('DOMContentLoaded' , ready);
}else{
    ready(); //else the ready() function will just make it available after the document is loaded
}
function ready(){
    var removeCartButtons = document.getElementsByClassName('item-removal') //lets remove the item from the cart when click on the reduce 
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click' , removeCartIteminCart)
    }
    var quantityInputs = document.getElementsByClassName('carttts-quantity')//manages the quantity i.e 1 or greater and 
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change" , quantityChangedinCart); //makes changes in the cart when added in the eventlistener
    }
}
function removeCartIteminCart(event){ //removes the targeted item completely when clicked on the remove button (the icon) from the parent element
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal()
}
function quantityChangedinCart(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){ //shows changes when added or removed the quantity
        input.value = 1
    }
    updatetotal();
}
function updatetotal(){
    var cartttsContent = document.getElementsByClassName('carttts-cont')[0]; //updates the menu with the info box  
    var cartttsBoxes = cartttsContent.getElementsByClassName('carttts-box');
    var total = 0;                                                         //shows cart with its price provided by the classlist the number of quantity 
    for (var i = 0; i < cartttsBoxes.length; i++){
        var cartttsBox = cartttsBoxes[i];
        var priceElement = cartttsBox.getElementsByClassName('carttts-price')[0];
        var quantityElement = cartttsBox.getElementsByClassName('carttts-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("AED" , ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity); //provides the total amount with the per quantity price multiplied with quantities purchased

        document.getElementsByClassName('total-price')[0].innerText = 'AED' + total; //displays on the website the total amount 
    }
}