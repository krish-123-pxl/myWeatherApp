const api_key= "ad63b660a749dff5b991796da77f83b9";
var city_name = document.getElementById("city_name");
var img_icon = document.getElementById("icon");
var temp_ele = document.getElementById("temp");
var haze_ele = document.getElementById("haze");
var feels_like = document.getElementById("feels");
var humidity = document.getElementById("humid");
var wind_speed = document.getElementById("wind");
var get_weather_btn = document.getElementById("get_weather");
var form = document.getElementById("frm");

get_weather_btn.onclick = function(){
    getweatherdata(city_name.value);   
    return false; 
}
async function getweatherdata(city_value){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
            city_name.value}&appid=${api_key}&units=metric`);
            if(!response.ok){
                throw new Error("Network response is not okay!");
            }
            var data = await response.json();
            // console.log(data);

            temp_ele.innerHTML = data.main.temp + "°C";
            feels_like.innerHTML ="feels like " + data.main.feels_like + "°C";
            haze_ele.innerHTML = data.weather[0].description;
            img_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" id="img" alt="">`
            wind_speed.innerHTML = `wind speed ${data.wind.speed}m/s`
            humidity.innerHTML = `humidity ${data.main.humidity}`;
     

    }catch(err){

    }
}