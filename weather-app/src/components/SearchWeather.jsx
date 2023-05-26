import React, { useState } from 'react'
import searchBtn from '../assets/search.png'
import WeatherInfoDisplay from './WeatherInfoDisplay'
import FetchWeatherData from './FetchWeatherData'

const SearchWeather = () => {

  const [city,setCity] = useState('');
  const [weatherData,setWeatherData] = useState(null);
  function changeCityHandler(e){
    setCity(e.target.value)
  }

  function fetchWeatherData(){
    FetchWeatherData({ setWeatherData, city });
  }
  
  return (
    <div>
      <div className='flex flex-row'>
        <input value={city} onChange={changeCityHandler} className='bg-red-300' type='text' />
        <button onClick={fetchWeatherData}>
          <img className='bg-black' src={searchBtn} width='50px'/>
        </button>
      </div>
      <div>
        {
          weatherData !== null && 
          <div>
            <WeatherInfoDisplay weatherData={weatherData} />
          </div>
          
        }
      </div>
    </div>
  )
}

export default SearchWeather
