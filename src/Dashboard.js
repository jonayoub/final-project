import React, {  useState } from 'react';
import axios from 'axios';
import "./Dashboard.css";


function Dashboard() {

  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  function showWeather(response) {
    setWeather(response.data);
    console.log(weather);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  function displayTemperature(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=318a474343ba36dee83bd4f5c9fe6ee3&units=imperial`
    axios.get(url).then(showWeather);
  }
  let form = (
    <div>
      <form onSubmit={displayTemperature}>
        <input type="text" onChange={handleChange} />
        <input type="submit" class="btn btn-primary"value="Search" />
      </form>
    </div>
  );
  return (
    <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <h3 class="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
          {form}
          <div class="mb-4 pb-2">
          </div>
          {weather && (
            <div class="card shadow-0 border">
              <div class="card-body p-4">
                <h4 class="mb-1 sfw-normal">{weather.name}, {weather.sys.country}</h4>
                <p class="mb-2">Current temperature: <strong>{weather.main.temp}°F</strong></p>
                <p>Feels like: <strong>{weather.main.feels_like}°F</strong></p>
                <p>Max: <strong>{weather.main.temp_max}°F</strong>, Min: <strong>{weather.main.temp_min}°F</strong></p>
                <div class="d-flex flex-row align-items-center">
                  <p class="mb-0 me-4">{weather.weather[0].description}</p>
                  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Dashboard;
