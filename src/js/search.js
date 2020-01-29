import { addMap } from './addMap.js';
import { getWeatherData } from './getWeatherData.js';
import { config } from './translate.js';

const latitudeSpan = document.querySelector('.geolocation-data-block__coordinates_latitude span');
const longtitudeSpan = document.querySelector(
  '.geolocation-data-block__coordinates_longtitude span',
);
const locationCoord1 = document.querySelector('#latValue');
const locationCoord2 = document.querySelector('#lonValue');
const place = document.querySelector('.weather-today-block__place_city');

export async function search(city) {
  const lang = localStorage.getItem('lang') || 'en';

  const apikey = 'a4d11e052bb24c05b5ed74e8fa01a606';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apikey}&language=${lang}`;

  const response = await fetch(url);
  const data = await response.json();

  const latitude = data.results[0].geometry.lat.toFixed(2);
  const longitude = data.results[0].geometry.lng.toFixed(2);

  const cityName =
    data.results[0].components.city ||
    data.results[0].components.county ||
    data.results[0].components.state;
  const countryName = data.results[0].components.country;

  latitudeSpan.innerHTML = config[lang].lat;
  longtitudeSpan.innerHTML = config[lang].lon;
  locationCoord1.innerHTML = `${Math.floor(latitude)}&#176;${Math.floor(
    (latitude - Math.floor(latitude)) * 100,
  )}'`;
  locationCoord2.innerHTML = `${Math.floor(longitude)}&#176;${Math.floor(
    (longitude - Math.floor(longitude)) * 100,
  )}'`;

  place.innerHTML = `${cityName}, ${countryName}`;

  getWeatherData(latitude, longitude);
  addMap(latitude, longitude);
  localStorage.setItem('latitude', latitude);
  localStorage.setItem('longitude', longitude);
}

function voiceSearch() {
  const lang = document.querySelector('.control-block__button_lang').value;
  const nameCity = document.querySelector('#searchInput');

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  // eslint-disable-next-line
  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.interimResults = true;
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    nameCity.value = transcript;
  });
  recognition.start();
}

const searchButton = document.querySelector('#searchButton');
const voiceButton = document.querySelector('#voiceButton');

searchButton.addEventListener('click', () => {
  const nameCity = document.querySelector('#searchInput').value;
  search(nameCity);
});

document.getElementById('searchInput').addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    searchButton.click();
  }
});

voiceButton.addEventListener('click', () => {
  voiceSearch();
});
