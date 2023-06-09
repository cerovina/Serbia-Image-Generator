const button = document.getElementById("generate-button");
const imageContainer = document.getElementById("image-container");

const imageUrls = [
  "Tara.jpg",
  "Golubac.jpg",
  "oj.jpg",
  "sarganska-osmica.jpg",
  "begis.jpg",
  "ns.jpg",
  "brda1.jpg"
];

let currentIndex = 0;

button.addEventListener("click", function () {
  const imageUrl = imageUrls[currentIndex];

  generateImage(imageUrl);

  currentIndex = (currentIndex + 1) % imageUrls.length;
});

function generateImage(url) {
  imageContainer.innerHTML = "";

  const image = document.createElement("img");
  image.src = url;
  image.style.width = "378px";
  image.style.height = "200px";
  image.style.border = "6px solid black";
  image.style.borderRadius = "30px";
  imageContainer.appendChild(image);
}
