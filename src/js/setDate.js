import { config } from './translate.js';

function setDate() {
  const lang = localStorage.getItem('lang') || 'en';
  const dayNameOne = document.querySelector(
    '.weather-forecast-block div:nth-child(1) .weather-forecast-block__info_day',
  );
  const dayNameTwo = document.querySelector(
    '.weather-forecast-block div:nth-child(2) .weather-forecast-block__info_day',
  );
  const dayNameThree = document.querySelector(
    '.weather-forecast-block div:nth-child(3) .weather-forecast-block__info_day',
  );
  const dateTime = document.querySelector('.weather-today-block__datetime p');

  const date = new Date();
  let dayName = date.getDay();
  let monthName = date.getMonth();
  const dayNumberMonth = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let firstDay;
  let secondDay;
  let thirdDay;

  for (let i = 0; i < config[lang].days.length; i += 1) {
    if (dayName === i) {
      if (dayName === 4) {
        firstDay = config[lang].days[i + 1];
        secondDay = config[lang].days[i + 2];
        thirdDay = config[lang].days[0];
      } else if (dayName === 5) {
        firstDay = config[lang].days[i + 1];
        secondDay = config[lang].days[0];
        thirdDay = config[lang].days[1];
      } else if (dayName === 6) {
        firstDay = config[lang].days[0];
        secondDay = config[lang].days[1];
        thirdDay = config[lang].days[2];
      } else {
        firstDay = config[lang].days[i + 1];
        secondDay = config[lang].days[i + 2];
        thirdDay = config[lang].days[i + 3];
      }
    }
  }
  dayName = config[lang].days[dayName];
  for (let i = 0; i < config[lang].months.length; i += 1) {
    if (monthName === i) {
      monthName = config[lang].months[i];
    }
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  dateTime.innerHTML = `${dayName} ${dayNumberMonth} ${monthName} ${hour}:${minute}`;

  dayNameOne.innerHTML = firstDay;
  dayNameTwo.innerHTML = secondDay;
  dayNameThree.innerHTML = thirdDay;
}

setInterval(() => setDate(), 1000);
