import React from "react";
import cloud from '../assets/cloud.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
const WeatherInfoDisplay = ({ weatherData }) => {
  return (
    <div>
      <div>
        <div>{weatherData.name}</div>
        <img
          src={`https://flagcdn.com/144x108/${weatherData?.sys?.country.toLowerCase()}.png`}
          alt="country icon"
        />
      </div>
      <div>{weatherData?.weather?.[0]?.description}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`}
          alt="weather-icon"
        />
      </div>
      <div>{`${weatherData?.main?.temp} ℃`}</div>
      <div className="flex flex-row">
        <div>
          <img src={wind} alt="" />
          <div>{`${weatherData?.wind?.speed} m/s`}</div>
        </div>
        <div>
          <img src={humidity} alt="" />
          <div>{`${weatherData?.main?.humidity}%`}</div>
        </div>
        <div>
          <img src={cloud} alt="" />
          <div>{`${weatherData?.clouds?.all}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfoDisplay;
