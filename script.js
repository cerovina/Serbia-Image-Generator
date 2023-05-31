const button = document.getElementById("generate-button");
const imageContainer = document.getElementById("image-container");

button.addEventListener("click", function () {
  const imageUrls = [
    "Tara.jpg",
    "Golubac.jpg",
    "oj.jpg",
    "sarganska-osmica.jpg",
    "begis.jpg",
    "ns.jpg",
    "brda1.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const imageUrl = imageUrls[randomIndex];

  generateImage(imageUrl);
});

function generateImage(url) {
  imageContainer.innerHTML = "";

  const image = document.createElement("img");
  image.src = url;
  imageContainer.appendChild(image);
}

function generateImage(url) {
    imageContainer.innerHTML = "";
  
    const image = document.createElement("img");
    image.src = url;
    image.style.width = "700px"; 
    image.style.height = "350px"; 
    imageContainer.appendChild(image);
  }
  