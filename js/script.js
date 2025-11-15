const menuItems = document.querySelectorAll('.menu-item');
const logo = document.querySelector(".logo-menu");

var lastScrollTop = 0;
window.addEventListener('scroll', () => {
    //var st = window.pageYOffset || document.documentElement.scrollTop;  Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //if (st > lastScrollTop) {
    if(window.scrollY > 0) {
        menuItems.forEach(element => {
            element.classList.add("scrolled");
            logo.classList.add("scrolled");
        });
    } else if (window.scrollY === 0) {
        menuItems.forEach(element => {
            element.classList.remove("scrolled");
            logo.classList.remove("scrolled");
        });
    }
})


const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
})

document.querySelectorAll(".menu-item").forEach(element => element.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
}))