const clock = document.querySelector("#clock");

setInterval(getClock, 1000);

function getClock(){
    const d = new Date();
    const hour = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2,"0");
    const seconds = d.getSeconds().toString().padStart(2,"0");
  
    clock.innerText =`${hour}:${minutes}:${seconds}`; 
}