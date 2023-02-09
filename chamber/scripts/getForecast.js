const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Guam&units=imperial&appid=a06d7028879dc658f6cc783a421dc265';

const forecast = document.querySelector('.weather-forecast');

const fetchForecast = async () => {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data["list"]);
        }
    } catch (error) {
        console.error("An error occured while fetching data:", error);
    }
};

function displayForecast(weather) {
     const dateNow = new Date().toLocaleDateString();

     weather.forEach(data => {
         const card = document.createElement('section')
         const weatherDay = document.createElement('h4');
         const weatherIcon = document.createElement('img');
         const weatherDesc = document.createElement('p');
         const weatherTemp = document.createElement('h2');

         let unix = data['dt'];

         let date = getDate(unix).toLocaleDateString();
         let day = getDate(unix).getDay();
         let hour = getHour(unix);

         const weatherObj = [];

         if (day !== dateNow) {
            if (hour === '7:00:00 AM') {
                weatherDay.textContent = dayOfTheWeek(day);
                const iconSrc = `https://openweathermap.org/img/wn/${data['weather'][0].icon}.png`;
                let description = data['weather'][0].description;

                weatherIcon.setAttribute('src', iconSrc);
                weatherIcon.setAttribute('alt', description);
                weatherIcon.setAttribute('loading', 'lazy');
                weatherTemp.innerHTML = `${data['main']['temp']}&deg;F`;
                weatherDesc.textContent = description;

                card.appendChild(weatherDay);
                card.appendChild(weatherIcon);
                card.appendChild(weatherTemp);
                card.appendChild(weatherDesc);
                forecast.appendChild(card);
            }
         }
        
         
     })
}

function getDate(unix) {
    return new Date(unix * 1000);
}

function dayOfTheWeek(date) {
    let day;
    switch(date) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
    }
    return day;
}

function getHour(unix) {
    const hour = new Date(unix * 1000);
    return hour.toLocaleTimeString('default');
}

fetchForecast();
