import React from "react";
const API_KEY = "af1d3e1a6ae7d7d9c50c8d9c00ec8260";
const FetchWeatherData = ({ setWeatherData, city, coordinates}) => {
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?`
  if(city) {
    API_URL += `q=${city}&appid=${API_KEY}&units=metric`;
  }else{
    API_URL += `lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`;
  }
  async function fetchData(){
    const response = await fetch(API_URL);
    const data = await response.json();
    setWeatherData(data);
  }
  fetchData();
  return;
};

export default FetchWeatherData;
