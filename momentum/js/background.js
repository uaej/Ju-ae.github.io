const images=["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//window 크기에 맞춰 사진 비율 뱐경
bgImage.width = window.innerWidth + 10;
bgImage.height = window.innerHeight + 10;
document.body.appendChild(bgImage);
bgImage.classList.add("background"); 
