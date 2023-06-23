window.getWeather = function () {
    let r1 = "";
    let cityName = document.querySelector("#cityName").value;
    console.log(cityName);
    // r1 = document.querySelector(".no-display");
  
    axios.get(`/weather/${cityName}`)
    .then(response => {
        const data = response.data;
        console.log(response.data);
        let heading = document.querySelector(".modalHeading").innerHTML = `Climate Of ${response.data.city}`;
        let temp = document.querySelector("#temp").innerHTML = `${response.data.temp}`;
        let feelsLike = document.querySelector(".feelsLike").innerHTML = `${response.data.feelsLike}`
        let minTemp = document.querySelector("#minTemp").innerHTML = `${response.data.minTemp}`;
        let maxTemp = document.querySelector("#maxTemp").innerHTML = `${response.data.maxTemp}`;
        let humidity = document.querySelector("#humidity").innerHTML = `${response.data.humidity}`;
        let pressure = document.querySelector("#pressure").innerHTML = `${response.data.pressure}`;
      })
      .catch(function (error) {
        console.log(error);
        let errorResult = document.querySelector("#result").innerHTML = `${cityName} weather data was not available. Try to Search Karachi or London`;
        r1 = document.querySelector('.no-display').classList.toggle('no-display');
      });
  }
  