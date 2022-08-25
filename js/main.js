let elBurger = document.querySelector(".site-header__burger")
let elNav = document.querySelector(".sitenav")
let elClose = document.querySelector(".sitenav__close")
let elbody = document.querySelector("body")

elBurger.addEventListener("click", function(){
    elNav.classList.add("open")
    elbody.classList.add("overflow")
})

elClose.addEventListener("click", function(){
    elNav.classList.remove("open")
    elNav.classList.remove("close")
    elbody.classList.remove("overflow")
})