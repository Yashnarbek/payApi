let elBurger = document.querySelector(".burger-mnu")
let elNav = document.querySelector(".site-nav")

elBurger.addEventListener("click", function(){
    elNav.classList.toggle("active")
})
