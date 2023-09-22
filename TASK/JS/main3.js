 
    const ball = document.querySelector(".ball");
    const moveButton = document.getElementById("moveButton");
    const containerWidth = document.querySelector(".container").offsetWidth;

    let count=0
    moveButton.addEventListener("click",  ()=> {
    if(count==0){
            ball.style.transform = `translateX(${containerWidth - 80}px)`;
            count++
    }else{
            ball.style.transform = `translateX(${containerWidth -500}px)`;
            count--
    }
});

