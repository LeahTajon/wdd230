// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=a06d7028879dc658f6cc783a421dc265';

const apiFetch = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data)
        } else {
            throw Error (await response.text());
        } 
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
};


  
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
   
};

apiFetch();