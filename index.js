const APY_CLIMA_KEY = "3857dc3acb99a8e64fcea6c1d8c2f00e";

const fetchData = position =>{
    const {latitude, longitude}= position.coords;
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API key};`)
    console.log(position)
};


const onload = () =>{
    navigator.geolocation.getCurrentPosition(log);
};
