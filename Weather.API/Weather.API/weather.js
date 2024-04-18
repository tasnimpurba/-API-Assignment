function searchCountry() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
    .then(response => response.json())
    .then(data =>  {
        
        }

        const country = data[0]; r
        const countryDetails = `
            <div class="country-card">
                <h2>${country.name.common}</h2>
                <img src="${country.flags.svg}" alt="Flag">
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population}</p>
                <button onclick="getWeather('${country.name.common}')">More Details</button>
            </div>
        `;
        document.getElementById('countryData').innerHTML = countryDetails;
    })
    .catch(error => console.error('Error fetching country data:', error));
}

function getWeather(countryName) {
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=WEATHER_API_KEY&q=${countryName}`)
    .then(response => response.json())
    .then(data => {
        const weatherDetails = `
            <p>Weather: ${data.current.condition.text}</p>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Wind Speed: ${data.current.wind_kph} km/h</p>
        `;
        document.getElementById('countryData').insertAdjacentHTML('beforeend', weatherDetails);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}
