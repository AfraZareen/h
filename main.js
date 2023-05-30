let smaller_shoes = document.querySelectorAll(".smaller_shoes img");
let big_shoes = document.querySelector(".big_shoes img");
let shadow = document.querySelector(".shadow");
let color_change = document.querySelector(".color_change");
let link = document.querySelector(".link");
smaller_shoes .forEach((colour)=>{
    colour.addEventListener("click" , (co) => {
        smaller_shoes.forEach((col)=>{
            col.classList.remove("change")
        })
        co.target.classList.add("change")
        co.target.style.borderColor = co.target.dataset.bg;
        big_shoes.src = co.target.src;
        shadow.style.background = co.target.dataset.bg;
        color_change.style.color = co.target.dataset.bg;
        link.style.border = co.target.dataset.bg;
    })
})
