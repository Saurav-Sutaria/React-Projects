import React, { useEffect, useState } from 'react'
import locationImg from '../assets/location.png'
import WeatherInfoDisplay from './WeatherInfoDisplay'
import FetchWeatherData from './FetchWeatherData'
const MyWeather = () => {
  const [coordinates,setCoordinates] = useState([]);
  const [hasCoordinates,setHasCoordinates] = useState(false);
  const [weatherData,setWeatherData] = useState([]);
  useEffect(()=>{
    const localCoordinates = sessionStorage.getItem("coordinates");
    if(localCoordinates){
      setCoordinates(JSON.parse(localCoordinates));
      setHasCoordinates(true);
    }
  },[]);
 
  function getCoordinates(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("geolocation not supported")
    }
  }
  function showPosition(position) {
    const userCoordinates = {
      lat : position.coords.latitude,
      lon : position.coords.longitude
    }
    sessionStorage.setItem("coordinates",JSON.stringify(userCoordinates));
    setHasCoordinates(true)
    setCoordinates(userCoordinates)
    FetchWeatherData({ setWeatherData, coordinates })
  }
  return (
    <div>
      <div>
        {
          !hasCoordinates && 
          <div>
            <img src={locationImg} width='50px'/>
            <p>Grant Location Access</p>
            <p>Allow Access To Get Weather Information</p>
            <button onClick={getCoordinates}>GRANT ACCESS</button>
          </div>
          
        }
        {
          hasCoordinates && 
          <div>
            <WeatherInfoDisplay weatherData={weatherData} />
          </div>
          
        }        
      </div>
    </div>
  )
}

export default MyWeather
