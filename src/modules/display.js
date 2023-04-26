const display = (() => {
  function displayWeather(infoObj) {
    const location = document.querySelector('h2');
    location.textContent += `${infoObj.country}, ${infoObj.city}`;
    const condition = document.querySelector('.condition');
    condition.textContent += `${infoObj.condition}`;
    const feelsLikeTemp = document.querySelector('.feels-like');
    feelsLikeTemp.textContent += `${infoObj.feelsLikeC}C°`;
    const lastUpdated = document.querySelector('.last-updated');
    lastUpdated.textContent += `${infoObj.lastUpdated}`;
    const temp = document.querySelector('.temp');
    temp.textContent += `${infoObj.tempC}C°`;
  }

  return { displayWeather };
})();

export default display;
