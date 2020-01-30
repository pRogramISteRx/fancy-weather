const markup = `
  <div class="wrapper">
    <header class="control-block">
      <div class="control-block__buttons">
        <button class="button control-block__button_refresh" id="refreshButton"></button>
        <select class="button control-block__button_lang">
          <option value="en">en</option>
          <option value="ru">ru</option>
          <option value="be">be</option>
        </select>
        <div class="control-block__buttons_temperature-units">
          <button class="button control-block__button_fahrenheit inactive" id="fahrenheitButton">&#176;F</button>
          <button class="button control-block__button_celsius" id="celsiusButton">&#176;C</button>
        </div>
      </div>
      <div class="control-block__search">
        <input class="control-block__search_input" type="text" id="searchInput">
        <button class="control-block__search_voice" id="voiceButton"></button>
        <button class="button control-block__search_button" id="searchButton">Search</button>
      </div>
    </header>
    <main class="main">
      <div class="weather">
        <section class="weather-today-block">
          <div class="weather-today-block__place">
            <h1 class="weather-today-block__place_city"></h1>
          </div>
          <div class="weather-today-block__datetime">
            <p></p>
          </div>
          <div class="weather-today-block__info">
            <p class="weather-today-block__info_temperature"></p>
            <div class="weather-today-block__info_forecast">
              <div class="weather-today-block__info_icon"></div>
              <div class="weather-today-block__info_list">
                <p class="weather-today-block__info_summary">overcast</p>
                <p class="weather-today-block__info_apparent-temperature"> <span></span> <span></span></p>
                <p class="weather-today-block__info_wind"> <span></span> <span></span> <span></span> </p>
                <p class="weather-today-block__info_humidity"> <span></span> <span></span> </p>
              </div>
            </div>  
          </div>
        </section>
        <section class="weather-forecast-block">
          <div class="weather-forecast-block__info">
            <p class="weather-forecast-block__info_day">tuesday</p>
            <div class="weather-forecast-block__info_forecast">
              <p class="weather-forecast-block__info_temperature" id="firstDayTemperature"></p>
              <div class="weather-forecast-block__info_icon" id="firstDayIcon"></div>
            </div>
          </div>
          <div class="weather-forecast-block__info">
            <p class="weather-forecast-block__info_day">wednesday</p>
            <div class="weather-forecast-block__info_forecast">
              <p class="weather-forecast-block__info_temperature" id="secondDayTemperature"></p>
              <div class="weather-forecast-block__info_icon" id="secondDayIcon"></div>
            </div>
          </div>
          <div class="weather-forecast-block__info">
            <p class="weather-forecast-block__info_day">thursday</p>
            <div class="weather-forecast-block__info_forecast">
              <p class="weather-forecast-block__info_temperature" id="thirdDayTemperature"></p>
              <div class="weather-forecast-block__info_icon" id="thirdDayIcon"></div>
            </div>
          </div>
        </section>
      </div>
      <section class="geolocation-data-block">
        <div id="map" class="geolocation-data-block__map"></div>
        <div class="geolocation-data-block__coordinates">
          <p class="geolocation-data-block__coordinates_latitude"> <span></span> <span id="latValue"></span> </p>
          <p class="geolocation-data-block__coordinates_longtitude"> <span></span> <span id="lonValue"></span> </p>
        </div>
      </section>
    </main>
  </div>  
`;

document.body.innerHTML = markup;
