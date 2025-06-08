// weather api = https://openweathermap.org/

const apiKey = "e1c01cdd9e4e3fdaa0a13dea5bbd270f";
const url = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e1c01cdd9e4e3fdaa0a13dea5bbd270f&units=metric";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const weatherImg = document.querySelector(".weatherImg");

async function checkWeather(){

    
const inputCity = document.getElementById("inputCity").value;
    const response =await fetch(apiUrl +`&appid=${apiKey}&q=${inputCity}`);
    // const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML= data.name ;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".desc").innerHTML = data.weather[0].description ;
    document.querySelector(".humidity p").innerHTML= data.main.humidity+"%";
    document.querySelector(".windSpeed p").innerHTML= data.wind.speed+"km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherImg.src="images/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
           weatherImg.src="images/sun_8697636.png";
    }
    else if(data.weather[0].main == "Rain"){
         weatherImg.src="images/rain_2105910.png";
    }
    else if(data.weather[0].main == "Drizzle"){
         weatherImg.src="images/storm_10981827.png";
    }
    else if(data.weather[0].main == "Mist"){
         weatherImg.src="images/cloudy_2204336.png";
    }

}

