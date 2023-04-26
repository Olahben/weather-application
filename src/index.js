import weather from './modules/weather';

const searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click', () => {
  const inputText = document.querySelector('#location').value;
  weather.getWeather(`${inputText}`);
});
// weather.getWeather('Oslo');
