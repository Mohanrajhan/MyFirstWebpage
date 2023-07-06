const nav = document.querySelector("nav");
const mobile_nav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");


window.addEventListener("scroll" ,() =>  {
    if(window.scrollY > 60){
        nav.classList.add("scrolled");
        mobile_nav.classList.add("scrolled")
    }
    else{
        nav.classList.remove("scrolled");
        mobile_nav.classList.remove("scrolled");
    }

});


menuIcon.addEventListener("click",() => {
    mobileMenuContainer.classList.add("active");

})

closeIcon.addEventListener("click", () =>{
    mobileMenuContainer.classList.remove("active");
})