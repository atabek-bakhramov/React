import { useState } from "react";
import "./city-weather.css";

const Search = ({ setCityNameOnButton }) => {
  const [cityNameFromInput, setCityNameFromInput] = useState("");
  return (
    <div className="search-container">
      <input
        placeholder="Search City"
        type="text"
        value={cityNameFromInput}
        onChange={(e) => setCityNameFromInput(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setCityNameOnButton(cityNameFromInput)}
      >
        Get Weather
      </button>
    </div>
  );
};

export default Search;
