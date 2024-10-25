const imagecontainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x += 45;
  clearTimeout(timer);
  updategallery();
});

nextEl.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updategallery();
});

const updategallery = () => {
  imagecontainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x -= 45;
    updategallery();
  }, 3000);
};

updategallery();
