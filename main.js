const small = document.querySelectorAll(".small img");
const bigshoes = document.querySelector(".bigshoes img");

small.forEach((el) => {
    el.addEventListener("click" , (e) => {
        bigshoes.src = e.target.src;
    })
})
