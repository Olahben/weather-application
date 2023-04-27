const display = (() => {
  let celsius = true;
  function toggleCelsiusFahrenheit(infoObj) {
    const feelsLikeTemp = document.querySelector('.feels-like');
    const temp = document.querySelector('.temp');
    const intervalID = window.setInterval(() => {
      if (celsius) {
        feelsLikeTemp.textContent = `Feels like: ${infoObj.feelsLikeF}F°`;
        temp.textContent = `${infoObj.tempF}F°`;
        celsius = false;
      } else {
        feelsLikeTemp.textContent = `Feels like: ${infoObj.feelsLikeC}C°`;
        temp.textContent = `${infoObj.tempC}C°`;
        celsius = true;
      }
    }, 5000);
  }

  function displayWeather(infoObj) {
    const location = document.querySelector('h2');
    location.textContent = `${infoObj.country}, ${infoObj.city}`;
    const condition = document.querySelector('.condition');
    condition.textContent = `Condition: ${infoObj.condition}`;
    const feelsLikeTemp = document.querySelector('.feels-like');
    feelsLikeTemp.textContent = `Feels like: ${infoObj.feelsLikeC}C°`;
    const lastUpdated = document.querySelector('.last-updated');
    lastUpdated.textContent = `Last updated: ${infoObj.lastUpdated}`;
    const temp = document.querySelector('.temp');
    temp.textContent = `${infoObj.tempC}C°`;
    toggleCelsiusFahrenheit(infoObj);
  }

  return { displayWeather };
})();

export default display;
