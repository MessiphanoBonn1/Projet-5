let arrowRight = document.querySelector(".arrow_right");
let arrowLeft = document.querySelector(".arrow_left");
let bannerImg = document.querySelector(".banner-img");
let bannerP = document.querySelector("p");
let bulletPoints = document.querySelector(".dots");
let index = 0;

const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

for (let i = 0; i < slides.length; i++) {
  let newBulletPoint = document.createElement("div");
  newBulletPoint.classList.add("dot");
  bulletPoints.appendChild(newBulletPoint);
}

let allBulletPoints = document.querySelectorAll(".dot");

arrowLeft.addEventListener("click", () => {
  allBulletPoints[index].classList.remove("dot_selected");
  if (index == 0) {
    index = slides.length;
  }
  index--;
  bannerImg.src = slides[index].image;
  bannerP.innerHTML = slides[index].tagLine;
  allBulletPoints[index].classList.add("dot_selected");
});

allBulletPoints[index].classList.add("dot_selected");

arrowRight.addEventListener("click", () => {
  allBulletPoints[index].classList.remove("dot_selected");
  if (index == slides.length - 1) {
    index = -1;
  }
  index++;
  bannerImg.src = slides[index].image;
  bannerP.innerHTML = slides[index].tagLine;
  allBulletPoints[index].classList.add("dot_selected");
});
