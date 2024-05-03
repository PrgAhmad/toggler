let mode = document.querySelector("#inner");
let out = document.querySelector("#outer");
let m = "light";
mode.onclick = ()=>{
    if(m==="light"){
        document.body.style.backgroundColor="#262627";
        out.classList.remove("left");
        out.classList.add("right");
        mode.classList.add("inright");
        mode.classList.remove("inleft");
        m = "dark";
        mode.innerHTML='<i class="fa-solid fa-moon"></i>';
    } else {
        document.body.style.backgroundColor="white";
        out.classList.remove("right");
        out.classList.add("left");
        mode.classList.add("inleft");
        mode.classList.remove("inright");
        m = "light";
        mode.innerHTML='<i class="fa-solid fa-sun"></i>';
    }
}