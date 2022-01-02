const weatherContainer = document.querySelector("#weather span:first-child");
const nameContainer = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    console.log(position);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eda7893090288f572703459133352261&units=metric`;
    fetch(api).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main);
        const name = data.name;
        const weather = data.weather[0].main;
        weatherContainer.innerText= weather; 
        nameContainer.innerText = name;
    })
}

function onGeoError(){
    alert("can't find geolocation");
}
navigator.geolocation.  getCurrentPosition(onGeoOk, onGeoError);
