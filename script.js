"use strict";

/////////////////////////////////
// Selections
const imgBox = document.querySelector(".box-image");
const úvodka = document.querySelector(".úvodka");
const imgBox2 = document.querySelector(".box-image2");
const imgBoxPerps = document.querySelector(".box-Persp");
const infoBox = document.querySelector(".info");
const divInfo = document.querySelector(".divInfo");
const divInfoClose = document.querySelector(".close");

// úvodní animace fotky
const heroAnimace = async function () {
  window.addEventListener("load", function () {
    úvodka.style.transform = "translateY(0)";
  });
};

// click info reveal box
infoBox.addEventListener("click", function () {
  divInfo.style.transform = "translateX(0)";
  divInfo.style.opacity = 1;
});

divInfoClose.addEventListener("click", function () {
  divInfo.style.transform = "translateX(80rem)";
  divInfo.style.opacity = 0;
});

// movedown to boximage
const moveDown = async function (idofSection) {
  const section = document.getElementById(idofSection);
  section.scrollIntoView({ behavior: "smooth" });
};

// timer
const waitSec = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// creating P
const createImg = function (imgPathIndex, divtoAppend) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPathIndex;
    // img.style.width = "100%";
    img.style.opacity = "90%";

    img.addEventListener("load", function () {
      divtoAppend.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image Not found"));
    });
  });
};

// listen P
let currentImg;

const imgRendering = async function () {
  // moveDown animace hero
  const heroAni = await heroAnimace();
  // wait 4sec
  const úvodkaWait = await waitSec(4);

  // move down do Ptaci Persp
  const movetoPersp = await moveDown("boxScrollToView0");

  // 1 PERSPEKTIVA PICS
  //img A
  const imgA = await createImg("fotky/persp1.webp", imgBoxPerps);
  currentImg = imgA;
  console.log("ImageA loaded");
  const imgAWait = await waitSec(3);

  //img B
  currentImg.style.display = "none";
  const imgB = await createImg("fotky/persp2.webp", imgBoxPerps);
  currentImg = imgB;
  console.log("ImageB loaded");
  const imgBWait = await waitSec(3);
  //img C
  currentImg.style.display = "none";
  const imgC = await createImg("fotky/persp3.webp", imgBoxPerps);
  currentImg = imgC;
  console.log("ImageC loaded");
  const imgCWait = await waitSec(3);
  //img D
  currentImg.style.display = "none";
  const imgD = await createImg("fotky/persp4.webp", imgBoxPerps);
  currentImg = imgD;
  console.log("ImageD loaded");
  const imgDWait = await waitSec(3);
  //img E
  currentImg.style.display = "none";
  const imgE = await createImg("fotky/persp5.webp", imgBoxPerps);
  currentImg = imgE;
  console.log("ImageE loaded");
  const imgEWait = await waitSec(3);
  //img F
  currentImg.style.display = "none";
  const imgF = await createImg("fotky/persp6.webp", imgBoxPerps);
  currentImg = imgF;
  console.log("ImageF loaded");
  const imgFWait = await waitSec(3);
  //img G
  currentImg.style.display = "none";
  const imgG = await createImg("fotky/persp7.webp", imgBoxPerps);
  currentImg = imgG;
  console.log("ImageG loaded");
  const imgGWait = await waitSec(6);

  // move down to FIRST MAKRO
  const moveToLvice = await moveDown("boxScrollToView1");

  // 2 LVICE MAKRO
  //img1
  const img1 = await createImg("fotky/SAM_0445.webp", imgBox);
  currentImg = img1;
  console.log("Image1 loaded");
  const img1Wait = await waitSec(2);
  //img2
  currentImg.style.display = "none";
  const img2 = await createImg("fotky/SAM_0447.webp", imgBox);
  currentImg = img2;
  console.log("Image2 loaded");
  const img2Wait = await waitSec(0.5);
  //img3
  currentImg.style.display = "none";
  const img3 = await createImg("fotky/SAM_0449.webp", imgBox);
  currentImg = img3;
  console.log("Image3 loaded");
  const img3Wait = await waitSec(2);
  //img4
  currentImg.style.display = "none";
  const img4 = await createImg("fotky/SAM_0450.webp", imgBox);
  currentImg = img4;
  console.log("Image4 loaded");
  const img4Wait = await waitSec(3);
  //img5
  currentImg.style.display = "none";
  const img5 = await createImg("fotky/SAM_0451.webp", imgBox);
  currentImg = img5;
  console.log("Image5 loaded");
  const img5Wait = await waitSec(1);
  //img6
  currentImg.style.display = "none";
  const img6 = await createImg("fotky/SAM_0452.webp", imgBox);
  currentImg = img6;
  console.log("Image6 loaded");
  const img6Wait = await waitSec(1);

  // movedown to another image
  const moveToGepard = await moveDown("boxScrollView2");

  // 3 GEPARD CHILL
  // imagesloading2 - img7
  const img7 = await createImg("fotky/SAM_0512.webp", imgBox2);
  currentImg = img7;
  console.log("Image7 loaded");
  const img7Wait = await waitSec(2);
  // img8
  currentImg.style.display = "none";
  const img8 = await createImg("fotky/SAM_0515.webp", imgBox2);
  currentImg = img8;
  console.log("Image8 loaded");
  const img8Wait = await waitSec(3);
  // img9
  currentImg.style.display = "none";
  const img9 = await createImg("fotky/SAM_0519.webp", imgBox2);
  currentImg = img9;
  console.log("Image9 loaded");
  const img9Wait = await waitSec(3);

  // img10
  currentImg.style.display = "none";
  const img10 = await createImg("fotky/SAM_0520.webp", imgBox2);
  currentImg = img10;
  console.log("Image10 loaded");
  const img10Wait = await waitSec(3);
  // img11
  currentImg.style.display = "none";
  const img11 = await createImg("fotky/SAM_0522.webp", imgBox2);
  currentImg = img11;
  console.log("Image11 loaded");
  const img11Wait = await waitSec(3);
  // img12
  currentImg.style.display = "none";
  const img12 = await createImg("fotky/SAM_0523.webp", imgBox2);
  currentImg = img12;
  console.log("Image12 loaded");
  const img12Wait = await waitSec(3);
  // img13
  currentImg.style.display = "none";
  const img13 = await createImg("fotky/SAM_0524.webp", imgBox2);
  currentImg = img13;
  console.log("Image13 loaded");
  const img13Wait = await waitSec(3);
  // img14
  currentImg.style.display = "none";
  const img43 = await createImg("fotky/SAM_0530.webp", imgBox2);
  currentImg = img14;
  console.log("Image14 loaded");
  const img14Wait = await waitSec(3);
};

imgRendering();
