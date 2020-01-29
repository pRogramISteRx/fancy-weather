import { addMap } from './addMap.js';
import { getWeatherData } from './getWeatherData.js';
import { config } from './translate.js';
import { search } from './search.js';

const latitudeSpan = document.querySelector('.geolocation-data-block__coordinates_latitude span');
const longtitudeSpan = document.querySelector(
  '.geolocation-data-block__coordinates_longtitude span',
);
const locationCoord1 = document.querySelector('#latValue');
const locationCoord2 = document.querySelector('#lonValue');

async function setPosition(position) {
  const lang = localStorage.getItem('lang') || 'en';
  const { latitude } = position.coords;
  const { longitude } = position.coords;

  latitudeSpan.innerHTML = config[lang].lat;
  longtitudeSpan.innerHTML = config[lang].lon;
  locationCoord1.innerHTML = `${Math.floor(latitude)}&#176;${Math.floor(
    (latitude - Math.floor(latitude)) * 100,
  )}'`;
  locationCoord2.innerHTML = `${Math.floor(longitude)}&#176;${Math.floor(
    (longitude - Math.floor(longitude)) * 100,
  )}'`;

  addMap(latitude, longitude);
  getWeatherData(latitude, longitude);
  localStorage.setItem('latitude', latitude);
  localStorage.setItem('longitude', longitude);
}

function getCurrentCoordinates() {
  navigator.geolocation.getCurrentPosition(setPosition);
}

getCurrentCoordinates();

async function getCurrentUserCity() {
  const url = 'https://ipinfo.io/json?token=e831fe61cef2b2';

  const res = await fetch(url);
  const data = await res.json();

  const cityName = data.city;
  search(cityName);
}

getCurrentUserCity();
