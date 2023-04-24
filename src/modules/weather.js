const weather = (() => {
  async function getWeather(place) {
    try {
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=7effff997da04f9595863506232004&q=${place}`,
      );
      const weatherData = await weatherResponse.json();
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  }

  return { getWeather };
})();

export default weather;
