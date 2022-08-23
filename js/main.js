let elBurger = document.querySelector(".site-header__burger")
let elNav = document.querySelector(".sitenav")
let elClose = document.querySelector(".sitenav__close")

elBurger.addEventListener("click", function(){
    elNav.classList.add("open")
})

elClose.addEventListener("click", function(){
    elNav.classList.remove("open")
    elNav.classList.remove("close")
})