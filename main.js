let smaller_shoes = document.querySelectorAll(".smaller_shoes img");//let used for declaring the smaller_shoes img statement 
let big_shoes = document.querySelector(".big_shoes img");//let used for declaring the  statement big_shoes img statement
let shadow = document.querySelector(".shadow");//let used for declaring the smaller_shoes statement the div class shadow 
let color_change = document.querySelector(".color_change");//let used for declaring the color_change statement 
let link = document.querySelector(".link");//let used for declaring the link
smaller_shoes .forEach((colour)=>{  //for each to call the color from the smaller_shoes
    colour.addEventListener("click" , (co) => { //here the html document is added with the event listener method
        smaller_shoes.forEach((col)=>{ 
            col.classList.remove("change") //remove the call from te classlist change
        })
        co.target.classList.add("change")//add the call from te classlist change
        co.target.style.borderColor = co.target.dataset.bg; //dataset allowing to read the data from the DOM provided 
        big_shoes.src = co.target.src;
        shadow.style.background = co.target.dataset.bg;
        color_change.style.color = co.target.dataset.bg;
        link.style.border = co.target.dataset.bg;
    })
})
