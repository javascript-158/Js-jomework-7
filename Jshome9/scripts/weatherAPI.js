function resolveWeatherInfo (){
    const result = document.getElementById("result")

    const city = document.getElementById("city").value
fetch (`https://geocode.maps.co/search?q=${city}`, {
    method : "GET"
}).then(_=>_.json()).then (cityInfo => {
  
    let longitude = cityInfo[0].lon
    let latitude = cityInfo[0].lat
    console.log(longitude, latitude)

    fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`, {
        method : "GET"
    }).then(_=>_.json ()).then (weather => {
console.log(weather)
let temperature = weather.current_weather.temperature
console.log(temperature)
result.innerHTML =`<p> in ${city} temperature is ${temperature}`
}
   )


    }
    )



    
}


