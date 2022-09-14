// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const btnMax = () => {
    setTemperatureValue(temperatureValue + 1);
    if (temperatureValue+1 > 15) {
        setTemperatureColor('tempHot')
    }
  };

  const btnMin = () => {
    setTemperatureValue(temperatureValue - 1);
    if (temperatureValue-1 <= 15) {
        setTemperatureColor('tempCold')
    }
  };

  const [temperatureValue, setTemperatureValue] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState('tempCold');

  return (
    <div className="app-container">
      <div className={`temperature-display-container ${temperatureColor}` }>
        <div className="temperature-display">{temperatureValue}° C</div>
      </div>
      <div className="button-container">
        <button className="btn btnMax" onClick={btnMax}>
          +
        </button>
        <button className="btn btnMin" onClick={btnMin}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
