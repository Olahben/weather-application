/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      DOMImg.style.objectFit = 'cover';
      infoDiv.style.backgroundImage = `url(${imgUrl})`;
      infoDiv.style.backgroundSize = 'cover';
      infoDiv.style.backgroundSize = '100% 100%';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/modules/display.js");


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
      };

      _display__WEBPACK_IMPORTED_MODULE_0__["default"].displayWeather(weatherInfo);
      return { weatherInfo };
    } catch (err) {
      errorHandler(err);
    }
  }

  return { getWeather };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");


const searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click', () => {
  const inputText = document.querySelector('#location').value;
  _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(`${inputText}`);
});
// weather.getWeather('Oslo');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG1CQUFtQjtBQUN0RSw4QkFBOEIsY0FBYztBQUM1QztBQUNBLFFBQVE7QUFDUixtREFBbUQsbUJBQW1CO0FBQ3RFLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQixJQUFJLGFBQWE7QUFDL0Q7QUFDQSwwQ0FBMEMsa0JBQWtCO0FBQzVEO0FBQ0EsK0NBQStDLG1CQUFtQjtBQUNsRTtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RTOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLE1BQU07QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSwrREFBc0I7QUFDNUIsZUFBZTtBQUNmLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDMUN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxFQUFFLG1FQUFrQixJQUFJLFVBQVU7QUFDbEMsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHBsaWNhdGlvbi8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHBsaWNhdGlvbi8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHBsaWNhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcGxpY2F0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcGxpY2F0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHBsaWNhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwbGljYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGxldCBjZWxzaXVzID0gdHJ1ZTtcbiAgZnVuY3Rpb24gdG9nZ2xlQ2Vsc2l1c0ZhaHJlbmhlaXQoaW5mb09iaikge1xuICAgIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgIGNvbnN0IGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGNlbHNpdXMpIHtcbiAgICAgICAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2luZm9PYmouZmVlbHNMaWtlRn1GwrBgO1xuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aW5mb09iai50ZW1wRn1GwrBgO1xuICAgICAgICBjZWxzaXVzID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7aW5mb09iai5mZWVsc0xpa2VDfUPCsGA7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtpbmZvT2JqLnRlbXBDfUPCsGA7XG4gICAgICAgIGNlbHNpdXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGlzcGxheUNvbmRpdGlvbihpbmZvT2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zP3F1ZXJ5PSR7aW5mb09iai5jb25kaXRpb259JnBlcl9wYWdlPTIwJmNsaWVudF9pZD1KUjhoZlNnYk1LWWVfa0cxSmpZSXdJb2VSc0dXcC1GMk14QTZIamQxZ3MwYCxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBjb25zdCBpbWdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coaW1nRGF0YSk7XG4gICAgICBjb25zdCBpbWdVcmwgPSBpbWdEYXRhLnJlc3VsdHNbMF0udXJscy5yZWd1bGFyO1xuICAgICAgY29uc3QgRE9NSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBET01JbWcuc3JjID0gaW1nVXJsO1xuICAgICAgRE9NSW1nLnN0eWxlLm9iamVjdEZpdCA9ICdjb3Zlcic7XG4gICAgICBpbmZvRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWdVcmx9KWA7XG4gICAgICBpbmZvRGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgIGluZm9EaXYuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSAxMDAlJztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoaW5mb09iaikge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2luZm9PYmouY291bnRyeX0sICR7aW5mb09iai5jaXR5fWA7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpO1xuICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7aW5mb09iai5jb25kaXRpb259YDtcbiAgICBjb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbiAgICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7aW5mb09iai5mZWVsc0xpa2VDfUPCsGA7XG4gICAgY29uc3QgbGFzdFVwZGF0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdC11cGRhdGVkJyk7XG4gICAgbGFzdFVwZGF0ZWQudGV4dENvbnRlbnQgPSBgTGFzdCB1cGRhdGVkOiAke2luZm9PYmoubGFzdFVwZGF0ZWR9YDtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aW5mb09iai50ZW1wQ31DwrBgO1xuICAgIHRvZ2dsZUNlbHNpdXNGYWhyZW5oZWl0KGluZm9PYmopO1xuICAgIGRpc3BsYXlDb25kaXRpb24oaW5mb09iaik7XG4gIH1cblxuICByZXR1cm4geyBkaXNwbGF5V2VhdGhlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyKSB7XG4gICAgaWYgKGVyci5lcnJvci5tZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIuZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihwbGFjZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9N2VmZmZmOTk3ZGEwNGY5NTk1ODYzNTA2MjMyMDA0JnE9JHtwbGFjZX1gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgICAgICBlcnJvckhhbmRsZXIod2VhdGhlckRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSB7XG4gICAgICAgIGNvdW50cnk6IGF3YWl0IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgIGNpdHk6IGF3YWl0IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIGNvbmRpdGlvbjogYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgZmVlbHNMaWtlQzogYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgZmVlbHNMaWtlRjogYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IGF3YWl0IHdlYXRoZXJEYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLFxuICAgICAgICB0ZW1wQzogYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgICAgIHRlbXBGOiBhd2FpdCB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgIH07XG5cbiAgICAgIGRpc3BsYXkuZGlzcGxheVdlYXRoZXIod2VhdGhlckluZm8pO1xuICAgICAgcmV0dXJuIHsgd2VhdGhlckluZm8gfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVycm9ySGFuZGxlcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGdldFdlYXRoZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyJztcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKS52YWx1ZTtcbiAgd2VhdGhlci5nZXRXZWF0aGVyKGAke2lucHV0VGV4dH1gKTtcbn0pO1xuLy8gd2VhdGhlci5nZXRXZWF0aGVyKCdPc2xvJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=