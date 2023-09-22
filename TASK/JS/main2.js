    const changecolor = document.querySelector(".change");

    changecolor.addEventListener("click",()=>{
       
        changecolor.style.backgroundColor = `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
            )`;
    });

