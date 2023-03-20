let menuBtn1 = document.getElementById("bar");
let menuBtn2 = document.getElementById("barr"); 
let menu = document.getElementById("scrollMenu");
let nav = document.getElementById("nav");

let dark = document.getElementsByClassName("nav-icon");
let body = document.getElementById("body");
let pdf = document.getElementById("pdf");
let btnPdf = document.getElementById("voirCv");

let page = document.getElementsByClassName("pasIndex");

if (sessionStorage.getItem("theme")=="dark"){
    body.classList.toggle("dark-mode");
    if (page.length!=0){
        dark[0].src = "../assets/img/sun.png";
    }
    else {
        dark[0].src = "./assets/img/sun.png";
    }   
}

menuBtn1.addEventListener('click',()=>{
    menu.style.clipPath = "circle(75%)";
    menu.style.visibility = "visible";
    menuBtn1.style.display = "none";
    
});

menuBtn2.addEventListener('click',()=>{
    menu.style.clipPath = "";
    menu.style.visibility = "hidden";
    menuBtn1.style.display = "";

});

dark[0].addEventListener('click', ()=>{
    body.classList.toggle("dark-mode");
    if (body.classList.length == 0){
        if (page.length!=0){
            dark[0].src = "../assets/img/moon.png";
        }
        else {
            dark[0].src = "./assets/img/moon.png";
        }
        sessionStorage.setItem("theme", "light");
    }
    else {
        if (page.length!=0){
            dark[0].src = "../assets/img/sun.png";
        }
        else {
            dark[0].src = "./assets/img/sun.png";
        }   
        sessionStorage.setItem("theme", "dark");
    }  
});


btnPdf.addEventListener('click', ()=>{
    pdf.classList.toggle("visible");
});


