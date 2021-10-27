var menu = document.getElementById('menu')
var body = document.getElementsByTagName('body')
var menuLinks = document.getElementById('menuLinks')
var hamburger = document.getElementById('hamburger')
var index = 0;
menu.addEventListener('click', ()=>{
    window.scroll(0,0) 
    body[0].classList.toggle('open')
    menuLinks.classList.toggle('menu-open')
    if (index === 0) {
        hamburger.src="images/icon-close.svg";
        index = 1 
    }else{
        hamburger.src="images/icon-hamburger.svg";
        index = 0
    }
})