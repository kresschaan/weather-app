import { useState } from "react";

const WeatherButton = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        className="w-full rounded border p-2"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="mt-10 h-12 rounded-[14px] bg-sky-900 px-16 text-white"
        onClick={handleSearch}
      >
        Display Weather
      </button>
    </div>
  );
};

export default WeatherButton;
