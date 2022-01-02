const images=["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//window 크기에 맞춰 사진 비율 뱐경
bgImage.width = window.innerWidth;
bgImage.height = window.innerHeight;
document.body.appendChild(bgImage);
document.body.classList.add("background"); 
