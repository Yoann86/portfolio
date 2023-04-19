const image = document.querySelector(".slide-image");
const imageNumber = document.querySelector(".slide-image-number");
const totalImageNumber = document.querySelector(".total-image-number");
const prevBtn = document.querySelector(".backward");
const nextBtn = document.querySelector(".forward");
const overlay = document.querySelector("#overlay");
const ap1 = document.querySelector("#ap1");
const slider = document.querySelector(".slider");

const images = [
    "../assets/img/ap1/AP1_1.png",
    "../assets/img/ap1/AP1_2.png",
    "../assets/img/ap1/AP1_3.png",
    "../assets/img/ap1/AP1_4.png",
];

let currentImage = 0;

function showImage() {
    image.src = images[currentImage];
    imageNumber.textContent = currentImage + 1;
    totalImageNumber.textContent = images.length;
}

window.addEventListener("DOMContentLoaded", showImage);

nextBtn.addEventListener("click", function () {
    currentImage++;
    if (currentImage > images.length - 1) {
      currentImage = 0;
    }
    showImage(currentImage);
});
  
prevBtn.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage(currentImage);
});

ap1.addEventListener("click",()=>{
    slider.classList.toggle("visible");
    overlay.classList.toggle("visible");
})

overlay.addEventListener("click",()=>{
    slider.classList.toggle("visible");
    overlay.classList.toggle("visible");
})