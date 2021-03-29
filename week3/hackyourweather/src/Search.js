import { useState, useEffect } from "react";
import "./city-weather.css";

const Search = ({ setCityNameOnButton }) => {
  const [cityNameFromInput, setCityNameFromInput] = useState("");
  const [disabledStatus, setDisabledStatus] = useState(true);

  useEffect(() => {
    // if a user starts with spaces, it is not counted as an entry. The button stays disabled
    const spaceExcludedLength = cityNameFromInput.replace(/ /g, "").length;
    const conditionOfButton = spaceExcludedLength >= 1 ? false : true;
    setDisabledStatus(conditionOfButton);
  }, [cityNameFromInput]);

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
        disabled={disabledStatus}
      >
        Get Weather
      </button>
    </div>
  );
};

export default Search;
