
const hamburger = document.querySelector(".hamburger")
const contain =document.querySelector(".menu-container")

let count =0
hamburger.addEventListener("click" ,() =>  {
if (count===0) {
    contain.setAttribute("style", "top:  7% ");
count++
}else{
    contain.setAttribute("style", "top: -100%");
count--
}
});

