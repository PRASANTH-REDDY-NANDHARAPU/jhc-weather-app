import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect,useState } from "react";
const WeatherApp = () => {
  const [place,setplace]=useState('')
  const [speed,setspeed]=useState('')
  const [longitude,setlongitude]=useState('')
  const [latitude,setlatitude]=useState('')
  const [status,setstatus]=useState('')
  const [min,setmin]=useState('')
  const [max,setmax]=useState('')
  const [humidity,sethumidity]=useState('')
  const [pressure,setpressure]=useState('')
  const [sunrise,setsunrise]=useState('')
  const [sunset,setsunset]=useState('')
  const [temp,settemp]=useState('')
  const [search,setSeacrh]=useState('goa')
    const urlFirst="https://api.openweathermap.org/data/2.5/weather?q="
    const urlLast="&appid=bfb12dd01a60ae5bd8c4e6c3e73af357"
    const urlMiddle=search
    const url=urlFirst+urlMiddle+urlLast
 console.log('this is day to 200 lines')
  return (
    <div className="weather-container">
      <div className="search-container">
        <input type="text" value={search} placeholder="Ex:bengaluru,goa.." onChange={(x)=>{
          setSeacrh(x.target.value)
        }}></input>
        <button onClick={()=>{
            async function weather(){
              const data=await fetch(url)
              const weatherData= await data.json()
              console.log(url)
              const temp=Math.floor(weatherData.main.temp)-273
              const place=weatherData.name
              const longitude=weatherData.coord.lon
              const latitude=weatherData.coord.lat
              const status=weatherData.weather[0].main
              const speed=weatherData.wind.speed
              const min=weatherData.main.temp_min
              const max=weatherData.main.temp_max
              const pressure=weatherData.main.pressure
              const humidity=weatherData.main.humidity
              const timestamp=weatherData.sys.sunrise
              const date = new Date(timestamp * 1000);
              const sunrise = date.toISOString();
              const sunset=weatherData.sys.sunset
console.log('ist just insertion')
              sethumidity(humidity)
              setlatitude(latitude)
              setlongitude(longitude)
              setmax(max)
              setmin(min)
              setsunrise(sunrise)
              setsunset(sunset)
              setplace(place)
              setspeed(speed)
              setstatus(status)
              setpressure(pressure)
              settemp(temp)
            
            }
              weather()
              setSeacrh('')

        }}>search</button>
      </div>
      <div className="degrees">
        <i class="bi bi-cloud-sun-fill"></i>
        <h1>{place}</h1>
        <h1>{temp}°C degrees</h1>
      </div>

      <div className="all-data-container">
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-globe2"></i></h1>
            <h1>longitude</h1>
          </div>
          <h1>{longitude}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-globe-americas"></i></h1>
            <h1>latitude</h1>
          </div>
          <h1>{latitude}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-cloud-lightning-rain"></i></h1>
            <h1>Min temperature</h1>
          </div>
          <h1>{min}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-brightness-high"></i></h1>
            <h1>Max temperature</h1>
          </div>
          <h1>{max}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-wind"></i></h1>
            <h1>pressure</h1>
          </div>
          <h1>{pressure}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-cloud-fog2"></i></h1>
            <h1>Humidity</h1>
          </div>
          <h1>{humidity}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-speedometer"></i></h1>
            <h1>wind speed</h1>
          </div>
          <h1>{speed}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-cloud-sun"></i></h1>
            <h1>sunrise</h1>
          </div>
          <h1>{sunrise}</h1>
        </div>
        <div className="data">
          <div className="icon-flex">
            <h1 className="icon"><i class="bi bi-cloud-moon"></i></h1>
            <h1>sunset</h1>
          </div>
          <h1>{sunset}</h1>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WeatherApp />);
