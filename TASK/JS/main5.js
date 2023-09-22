
const hamburger = document.querySelector(".hamburger")
const container =document.querySelector(".menu-container")
const menutop = document.querySelector(".menu-top")
const center = document.querySelector(".center")
const menubot = document.querySelector(".menu-bottom")

let count =0
hamburger.addEventListener("click" ,() =>  {
if (count===0) {
    container.setAttribute("style", "top:  7% ");
    menutop.setAttribute("style", "transform: rotate(-45deg); margin-top: 30px");
    center.setAttribute("style", "transform: rotate(45deg); margin-top: -6px");
    menubot.setAttribute("style", "opacity: 0");
count++
}else{
    container.setAttribute("style", "top: -100%");
    menutop.setAttribute("style", "transform: rotate(0); margin-top: 6px");
    center.setAttribute("style", "transform: rotate(0); margin-top: 6px");
    menubot.setAttribute("style", "opacity: 1" );
count--
}
});

