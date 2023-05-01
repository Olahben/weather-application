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

  async function displayCondition(infoObj) {
    try {
      const infoDiv = document.querySelector('.info');
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${infoObj.condition}&per_page=20&client_id=JR8hfSgbMKYe_kG1JjYIwIoeRsGWp-F2MxA6Hjd1gs0`,
        {
          mode: 'cors',
        },
      );
      const imgData = await response.json();
      console.log(imgData);
      const imgUrl = imgData.results[0].urls.regular;
      const DOMImg = document.createElement('img');
      DOMImg.src = imgUrl;
      infoDiv.style.backgroundImage = `url(${imgUrl})`;
      infoDiv.appendChild(DOMImg);
    } catch (err) {
      console.log(err);
    }
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
    displayCondition(infoObj);
  }

  return { displayWeather };
})();

export default display;
