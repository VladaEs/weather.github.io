window.onload = function education() {
    let temp = document.querySelector('.temp');
    let btn = document.querySelector('button');
    let weather_name = document.querySelector('.description');
    let humidity = document.querySelector('.humidity');
    let wind = document.querySelector('.wind');
    
    const my_key = '&appid=2e7ce274ef5d45527da7279d9a80e068';
    let city_mark = document.querySelector('.city');
    let start_href = 'https://api.openweathermap.org/data/2.5/weather?q=';
        btn.onclick = () => {
            let location = document.querySelector('.search-bar').value;
            console.log(location);
            let main_href = `${start_href}${location}${my_key}`;


            fetch(main_href).then(function (resp) { return resp.json() })
                .then(function (data) {
                    console.log(data);
                    temp.innerHTML = Math.floor(data.main.temp - 273) + "&#176;";
                    let location_main = location[0].toUpperCase() + location.slice(1)
                    city_mark.textContent = `The weather in ${location_main}`;
                    weather_name.textContent = data.weather[0].description;
                    humidity.textContent = 'Humidity: ' + data.main.humidity + "%";
                    wind.textContent ='Wind speed: ' +data.wind.speed.toFixed(1);
                    let icon_code = data.weather[0].icon;
                    let icon_href = document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon_code + '.png';

                    


            })
            .catch(function () {
                alert('Write correct name of the city');
            });
            }
    
}