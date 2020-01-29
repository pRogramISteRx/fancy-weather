function fToC(temp) {
  return Math.round((5 / 9) * (temp - 32));
}

function cToF(temp) {
  return Math.round((9 / 5) * temp + 32);
}

export function changeTemperatureUnits() {
  let temperatureUnits = localStorage.getItem('temperatureUnits') || 'celsius';
  const temperature = document.querySelector('.weather-today-block__info_temperature');
  const appTempSpan = document.querySelector(
    '.weather-today-block__info_apparent-temperature span:nth-child(2)',
  );
  const temperatureFirstDayElement = document.querySelector('#firstDayTemperature');
  const temperatureSecondDayElement = document.querySelector('#secondDayTemperature');
  const temperatureThirdDayElement = document.querySelector('#thirdDayTemperature');
  const fahrenheitButton = document.querySelector('#fahrenheitButton');
  const celsiusButton = document.querySelector('#celsiusButton');

  fahrenheitButton.addEventListener('click', () => {
    if (fahrenheitButton.className === 'button control-block__button_fahrenheit inactive') {
      fahrenheitButton.classList.remove('inactive');
      celsiusButton.classList.add('inactive');
      temperatureFirstDayElement.innerHTML = `${cToF(
        parseInt(temperatureFirstDayElement.innerHTML, 10),
      )}&#176;`;
      temperatureSecondDayElement.innerHTML = `${cToF(
        parseInt(temperatureSecondDayElement.innerHTML, 10),
      )}&#176;`;
      temperatureThirdDayElement.innerHTML = `${cToF(
        parseInt(temperatureThirdDayElement.innerHTML, 10),
      )}&#176;`;
      appTempSpan.innerHTML = `${cToF(parseInt(appTempSpan.innerHTML, 10))}&#176;`;
      temperature.innerHTML = `${cToF(parseInt(temperature.innerHTML, 10))}&#176;`;
    }
    temperatureUnits = 'fahrenheit';
    localStorage.setItem('temperatureUnits', temperatureUnits);
  });

  celsiusButton.addEventListener('click', () => {
    if (celsiusButton.className === 'button control-block__button_celsius inactive') {
      celsiusButton.classList.remove('inactive');
      fahrenheitButton.classList.add('inactive');
      temperatureFirstDayElement.innerHTML = `${fToC(
        parseInt(temperatureFirstDayElement.innerHTML, 10),
      )}&#176;`;
      temperatureSecondDayElement.innerHTML = `${fToC(
        parseInt(temperatureSecondDayElement.innerHTML, 10),
      )}&#176;`;
      temperatureThirdDayElement.innerHTML = `${fToC(
        parseInt(temperatureThirdDayElement.innerHTML, 10),
      )}&#176;`;
      appTempSpan.innerHTML = `${fToC(parseInt(appTempSpan.innerHTML, 10))}&#176;`;
      temperature.innerHTML = `${fToC(parseInt(temperature.innerHTML, 10))}&#176;`;
    }
    temperatureUnits = 'celsius';
    localStorage.setItem('temperatureUnits', temperatureUnits);
  });
}

changeTemperatureUnits();
