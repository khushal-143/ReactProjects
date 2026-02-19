import { useState } from 'react';
import './App.css';
import assets from './assets/assets';

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const API_KEY = 'd59e4a3a2602f5d071c88f6365c51669';
    const getWeather = async () => {
        if (!city.trim()) return;

        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );
        const geoData = await geoRes.json();

        if (!geoData.results) {
            alert("City not found");
            return;
        }

        const foreCastresponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
        );
        const wData = await foreCastresponse.json();
        console.log(wData);
        
        setWeather({
            city: wData.name,
            country: wData.sys.country,
            temp: ((wData.main.temp-32)*5/9).toFixed(2),
            feels: ((wData.main.feels_like-32)*5/9).toFixed(2),
            wind: wData.wind.speed,
            humidity: wData.main.humidity,
            visibility: wData.visibility/1000,
            pressure: wData.main.pressure,
            grndLevel: wData.main.grnd_level,
            wInfo:wData.weather[0].description
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getWeather();
        }
    };

    return (
        <>
            <div className="forecastContainer">
                <div className="forecastHeading">
                    <h2 className="heading">Weather forecast</h2>
                </div>
                <div className="cityContainer">
                    <div className="cityNameContainer">
                        <img src={assets.location} alt="" />
                        <p>
                            {weather ? `${weather.city}, ${weather.country}` : "Search City"}
                        </p>
                    </div>

                    <div className="searchContainer">
                        <img src={assets.search} alt="" />
                        <input
                            type="text"
                            placeholder="Search city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
            </div>

            {weather && (
                <div className="weatherContainer">
                    <div className="weatherCard">
                        <div className="skyContainer">
                            <img src={assets.cloud} alt="" />
                            <div className="infoContainer">
                                <div className="timeContainer">
                                    {new Date().toLocaleTimeString()}
                                </div>
                                <div className="tempContainer">
                                    <p className="temp">{weather.temp}°C</p>
                                    <div className="aboutSky">
                                        <p className="skyInfo">{weather.wInfo}</p>
                                        <p className="feelsLike">
                                            Feels Like {weather.feels}°C
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutWetherContainer">
                            <div className="wind">
                                <span className="aboutInfo">Wind</span>
                                <span className="units">{weather.wind} km/h</span>
                            </div>
                            <div className="humidity">
                                <span className="aboutInfo">Humidity</span>
                                <span className="units">{weather.humidity}%</span>
                            </div>
                            <div className="visibility">
                                <span className="aboutInfo">Visibility</span>
                                <span className="units">{weather.visibility}km</span>
                            </div>
                            <div className="pressure">
                                <span className="aboutInfo">Pressure</span>
                                <span className="units">{weather.pressure}hPa</span>
                            </div>
                            <div className="grndLevel">
                                <span className="aboutInfo">Ground Level</span>
                                <span className="units">{weather.grndLevel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;