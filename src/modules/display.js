const display = (() => {
  function displayWeather(infoObj) {
    const weatherInfoArray = Object.entries(infoObj);
    weatherInfoArray.forEach((item) => {
      console.log(item[1]);
    });
  }

  return { displayWeather };
})();

export default display;
