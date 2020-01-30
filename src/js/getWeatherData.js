import { config } from './translate.js';

const temperature = document.querySelector('.weather-today-block__info_temperature');
const todayWeatherIconElement = document.querySelector('.weather-today-block__info_icon');
const summaryWeather = document.querySelector('.weather-today-block__info_summary');
const appTemp = document.querySelector('.weather-today-block__info_apparent-temperature span');
const appTempSpan = document.querySelector(
  '.weather-today-block__info_apparent-temperature span:nth-child(2)',
);
const windSpan = document.querySelector('.weather-today-block__info_wind span');
const windValue = document.querySelector('.weather-today-block__info_wind span:nth-child(2)');
const windUnits = document.querySelector('.weather-today-block__info_wind span:nth-child(3)');
const humiditySpan = document.querySelector('.weather-today-block__info_humidity span');
const humidityValue = document.querySelector(
  '.weather-today-block__info_humidity span:nth-child(2)',
);

const temperatureFirstDayElement = document.querySelector('#firstDayTemperature');
const temperatureSecondDayElement = document.querySelector('#secondDayTemperature');
const temperatureThirdDayElement = document.querySelector('#thirdDayTemperature');
const firstDayWeatherIconElement = document.querySelector('#firstDayIcon');
const secondDayWeatherIconElement = document.querySelector('#secondDayIcon');
const thirdDayWeatherIconElement = document.querySelector('#thirdDayIcon');

function fToC(temp) {
  return Math.round((5 / 9) * (temp - 32));
}

export async function getWeatherData(latitude, longitude) {
  const activeTemperature = localStorage.getItem('temperatureUnits') || 'celsius';
  const lang = localStorage.getItem('lang') || 'en';

  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1a7242e37b52994b88f5374d9cceb732/${latitude},${longitude}?lang=${lang}`;

  const response = await fetch(url);
  const data = await response.json();

  const tempF = Math.round(data.currently.temperature);
  const tempC = fToC(tempF);
  const todayWeatherIcon = data.currently.icon;
  const weatherDescription = data.currently.summary;
  const appTempF = Math.round(data.currently.apparentTemperature);
  const appTempC = fToC(appTempF);
  const windSpeed = Math.round(data.currently.windSpeed);
  const humidity = data.currently.humidity * 100;

  const firstDayWeatherIcon = data.daily.data[1].icon;
  const secondDayWeatherIcon = data.daily.data[2].icon;
  const thirdDayWeatherIcon = data.daily.data[3].icon;
  const temperatureFirstDayF = Math.round(
    (data.daily.data[1].temperatureHigh + data.daily.data[1].temperatureLow) / 2,
  );
  const temperatureSecondDayF = Math.round(
    (data.daily.data[2].temperatureHigh + data.daily.data[2].temperatureLow) / 2,
  );
  const temperatureThirdDayF = Math.round(
    (data.daily.data[3].temperatureHigh + data.daily.data[3].temperatureLow) / 2,
  );
  const temperatureFirstDayC = fToC(temperatureFirstDayF);
  const temperatureSecondDayC = fToC(temperatureSecondDayF);
  const temperatureThirdDayC = fToC(temperatureThirdDayF);

  todayWeatherIconElement.style.background = `url(../assets/images/${todayWeatherIcon}.png)`;
  todayWeatherIconElement.style.backgroundSize = '100%';
  summaryWeather.innerHTML = weatherDescription;
  appTemp.innerHTML = config[lang].feelsLike;
  if (activeTemperature === 'celsius') {
    temperature.innerHTML = `${tempC}&#176;`;
    appTempSpan.innerHTML = `${appTempC}&#176;`;
    temperatureFirstDayElement.innerHTML = `${temperatureFirstDayC}&#176;`;
    temperatureSecondDayElement.innerHTML = `${temperatureSecondDayC}&#176;`;
    temperatureThirdDayElement.innerHTML = `${temperatureThirdDayC}&#176;`;
  } else if (activeTemperature === 'fahrenheit') {
    temperature.innerHTML = `${tempF}&#176;`;
    appTempSpan.innerHTML = `${appTempF}&#176;`;
    temperatureFirstDayElement.innerHTML = `${temperatureFirstDayF}&#176;`;
    temperatureSecondDayElement.innerHTML = `${temperatureSecondDayF}&#176;`;
    temperatureThirdDayElement.innerHTML = `${temperatureThirdDayF}&#176;`;
  }
  windSpan.innerHTML = config[lang].wind;
  windValue.innerHTML = windSpeed;
  windUnits.innerHTML = config[lang].windUnits;
  humiditySpan.innerHTML = config[lang].humidity;
  humidityValue.innerHTML = `${humidity}%`;

  firstDayWeatherIconElement.style.background = `url(../assets/images/${firstDayWeatherIcon}.png)`;
  firstDayWeatherIconElement.style.backgroundSize = '100%';
  secondDayWeatherIconElement.style.background = `url(../assets/images/${secondDayWeatherIcon}.png)`;
  secondDayWeatherIconElement.style.backgroundSize = '100%';
  thirdDayWeatherIconElement.style.background = `url(../assets/images/${thirdDayWeatherIcon}.png)`;
  thirdDayWeatherIconElement.style.backgroundSize = '100%';
}
