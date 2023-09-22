 
    const ball = document.querySelector(".ball");
    const moveButton = document.getElementById("moveButton");
    const containerWidth = document.querySelector(".container").offsetWidth;

    let count=0
    ball.addEventListener("click",  ()=> {

    if(count==0){
            ball.style.transform = `translateX(${containerWidth - 50}px)`;
            count++
    }else{
            ball.style.transform = `translateX(${containerWidth -200}px)`;
            count--
    }
});
