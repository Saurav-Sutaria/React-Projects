import React, { useState } from "react";
import MyWeather from "./components/MyWeather";
import SearchWeather from "./components/SearchWeather";
const App = () => {
  const [currWeatherTab, setCurrWeatherTab] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="flex flex-col items-center rounded-lg border-black bg-red-500 shadow-2xl shadow-black p-4">
        <div>WEATHER APP</div>
        <div>
          <button
            onClick={() => {
              setCurrWeatherTab(true);
            }}
          >
            Your Weather
          </button>
          <button
            onClick={() => {
              setCurrWeatherTab(false);
            }}
          >
            Search Weather
          </button>
        </div>
        <div>
          {currWeatherTab && <MyWeather />}
          {!currWeatherTab && <SearchWeather />}
        </div>
      </div>
    </div>
  );
};

export default App;
