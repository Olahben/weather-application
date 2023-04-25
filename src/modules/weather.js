import display from './display';

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
      console.log(weatherData);
      if (weatherData.error) {
        errorHandler(weatherData);
      }
      const weatherInfo = {
        country: await weatherData.location.country,
        city: await weatherData.location.name,
        condition: await weatherData.current.condition.text,
        feelsLikeC: await weatherData.current.feelslike_c,
        feelsLikeF: await weatherData.current.feelslike_f,
        lastUpdated: await weatherData.current.last_updated,
        tempC: await weatherData.current.temp_c,
        tempF: await weatherData.current.temp_f,
        windKPH: await weatherData.current.wind_kph,
      };

      display.displayWeather(weatherInfo);
      return { weatherInfo };
    } catch (err) {
      errorHandler(err);
    }
  }

  return { getWeather };
})();

export default weather;
