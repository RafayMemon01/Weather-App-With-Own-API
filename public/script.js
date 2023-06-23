window.getWeather = function () {
    let r1 = "";
    let cityName = document.querySelector("#cityName").value;
    console.log(cityName);
    r1 = document.querySelector(".no-display");
  
    axios.get(`http://localhost:3000/weather`)
      .then(function (response) {
        console.log(response.data);
        let heading = document.querySelector(".modalHeading").innerHTML = `Climate Of ${response.data.city}`;
        let temp = document.querySelector("#temp").innerHTML = `${response.data.temperature}`;
        let minTemp = document.querySelector("#minTemp").innerHTML = `${response.data.min}`;
        let maxTemp = document.querySelector("#maxTemp").innerHTML = `${response.data.max}`;
        let humidity = document.querySelector("#humidity").innerHTML = `${response.data.humidity}`;
        let pressure = document.querySelector("#pressure").innerHTML = `${response.data.pressure}`;
      })
      .catch(function (error) {
        console.log(error);
        let errorResult = document.querySelector("#result").innerHTML = `${cityName} is not a city name`;
        r1 = document.querySelector('.no-display').classList.toggle('no-display');
      });
  }
  