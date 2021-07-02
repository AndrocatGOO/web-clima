const APY_CLIMA_KEY = "05d15a22fc70a03fd6b58ce55c838b91";

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APY_CLIMA_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
};

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humedad: data.main.humidity,
        presion: data.main.pressure,
        temperatura: data.main.temp,
        date: getDate(),
    }
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
};

const getDate = () => {
    let date = new Date();
    return `${("0" + (date.getDate())).slice(-2)}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getYear() + 1900}`;
}


const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
};

var fondo = document.getElementById('fondo');

var description = document.getElementById("description");
console.log(description.textContent);

if (description.textContent == "Clouds") {
    fondo.style.backgroundColor = '#000000';
} else {
    fondo.style.backgroundColor = '#ffffff';
}

let frutas = [1, 2, 3, 4];
console.log(frutas[1])