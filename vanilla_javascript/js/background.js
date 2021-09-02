const images = [
    "licensed-image.jpg",
    "licensed-image(1).jpg",
    "licensed-image(2).jpg",
    "licensed-image(3).jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);