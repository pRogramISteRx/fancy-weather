export const config = {
  en: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    lat: 'Latitude: ',
    lon: 'Longitude: ',
    feelsLike: 'feels like: ',
    wind: 'wind: ',
    windUnits: 'm/s',
    humidity: 'humidity: ',
    searchButton: 'Search',
    searchInput: 'Search city',
  },
  ru: {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    months: [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ],
    lat: 'Широта: ',
    lon: 'Долгота: ',
    feelsLike: 'ощущается как: ',
    wind: 'ветер: ',
    windUnits: 'м/с',
    humidity: 'влажность: ',
    searchButton: 'Поиск',
    searchInput: 'Поиск города',
  },
  be: {
    days: ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'],
    months: [
      'Студзеня',
      'Лютага',
      'Сакавіка',
      'Красавіка',
      'Мая ',
      'Чэрвеня',
      'Ліпеня',
      'Жніўня',
      'Верасня',
      'Кастрычніка',
      'Лістапада',
      'Снежня',
    ],
    lat: 'Шырата: ',
    lon: 'Даўгата: ',
    feelsLike: 'aдчуваeцца як: ',
    wind: 'вецер: ',
    windUnits: 'м/с',
    humidity: 'вільготнасць: ',
    searchButton: 'Пошук',
    searchInput: 'Пошук горада',
  },
};

function updateTranslate() {
  const lang = localStorage.getItem('lang') || 'en';

  document.querySelector('.weather-today-block__info_apparent-temperature span').textContent =
    config[lang].feelsLike;
  document.querySelector('.weather-today-block__info_wind span').textContent = config[lang].wind;
  document.querySelector('.weather-today-block__info_wind span:nth-child(3)').textContent =
    config[lang].windUnits;
  document.querySelector('.weather-today-block__info_humidity span').textContent =
    config[lang].humidity;
  document.getElementById('searchButton').textContent = config[lang].searchButton;
  document.querySelector('.geolocation-data-block__coordinates_latitude span').textContent =
    config[lang].lat;
  document.querySelector('.geolocation-data-block__coordinates_longtitude span').textContent =
    config[lang].lon;
}

const summaryWeather = document.querySelector('.weather-today-block__info_summary');

async function getWeatherToTranslateSummary() {
  const lang = localStorage.getItem('lang') || 'en';
  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1a7242e37b52994b88f5374d9cceb732/${latitude},${longitude}?lang=${lang}`;

  const response = await fetch(url);
  const data = await response.json();

  const weatherDescription = data.currently.summary;
  summaryWeather.innerHTML = weatherDescription;
}

const changeLanguage = document.querySelector('.control-block__button_lang');
const celsiusButton = document.querySelector('#celsiusButton');
const fahrenheitButton = document.querySelector('#fahrenheitButton');
const searchButton = document.querySelector('#searchButton');

changeLanguage.addEventListener('change', event => {
  localStorage.setItem('lang', event.target.value);
  updateTranslate();
  getWeatherToTranslateSummary();
  localStorage.setItem('searchButton', searchButton.textContent);
});

// eslint-disable-next-line
window.onload = function() {
  const lang = localStorage.getItem('lang') || 'en';

  changeLanguage.value = this.localStorage.getItem('lang') || 'en';
  if (this.localStorage.getItem('temperatureUnits') === 'fahrenheit') {
    fahrenheitButton.classList.remove('inactive');
    celsiusButton.classList.add('inactive');
  }
  searchButton.textContent = config[lang].searchButton;
};
