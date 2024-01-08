import { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import WeatherButton from "../Components/WeatherButton";
import Weather from "./Weather";

function Home({ user }) {
  let githubUrlWithNickname;
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  if (user) {
    githubUrlWithNickname = `https://github.com/${user.nickname || ""}`;
  }

  console.log("test");

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const handleWeatherSearch = async (city) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPEN_APIKEY
        }`,
      );

      if (response.status === 200) {
        const data = response.data;

        const formattedData = {
          date: new Date().toLocaleDateString(),
          temp: `${Math.round(data.main.temp - 273.15)}°C`,
          description: data.weather[0].description,
          main: data.weather[0].main,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
        };

        setWeatherData([formattedData]);
      } else {
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    user && (
      <div className="bg-background-1 flex h-screen flex-col items-center justify-center pb-[150px]">
        <Navigation></Navigation>
        <div className="flex h-screen flex-col items-center justify-center">
          {weatherData.length === 0 && (
            <>
              <h3 className="mb-4 text-lg">{user.name}</h3>

              <div className="mb-4">
                <h3 className="mb-2 text-lg">{githubUrlWithNickname}</h3>
              </div>

              <WeatherButton onSearch={handleWeatherSearch} />
            </>
          )}

          {weatherData.length > 0 && <Weather weatherData={weatherData} />}
        </div>
      </div>
    )
  );
}

export default Home;
