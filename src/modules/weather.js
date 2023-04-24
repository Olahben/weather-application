const weather = (() => {
  function errorHandler(err) {
    if (err.error.message) {
      console.log(err.error.message);
    } else {
      console.log(err);
    }
  }

  async function getWeather(place) {
    try {
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=7effff997da04f9595863506232004&q=${place}`,
      );
      const weatherData = await weatherResponse.json();
      if (weatherData.error) {
        errorHandler(weatherData);
      }
    } catch (err) {
      errorHandler(err);
    }
  }

  return { getWeather };
})();

export default weather;
