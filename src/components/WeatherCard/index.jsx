import "./index.css";
import weatherCloudy from "../../assets/weather-cloudy.png";

const WeatherCard = ({ weatherDetails }) => {
  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDetails.current.temp_c}
          <sup>o</sup>C
        </div>
        <div className="weather-info">
          <p className="humidity-data">💧 Humidity: {weatherDetails.current.humidity}%</p>
          <p className="cloud-data">☁ Cloud: {weatherDetails.current.cloud}%</p>
        </div>
        <div className="weather-place">
          {weatherDetails.location.name}, {weatherDetails.location.region},
          {weatherDetails.location.country}
        </div>
        <div className="weather-avatar">
          <img src={weatherCloudy} alt="weatherImg" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
