window.getWheather = function () {
    let r1 = "";
    let cityName = document.querySelector("#cityName").value;
    console.log(cityName)
    r1 = document.querySelector(".no-display")
  
    // const axios = require('axios');
    // let API_Key = 'cf50cf7a63427b9fa8bdbc1c639b7461';
  
    // Make a request for a user with a given ID
    axios.get(`http://localhost:3000/weather`)
      .then(function (response) {
        
        // handle success
        console.log(response.data);
        let heading = document.querySelector(".modalHeading").innerHTML = `Climate Of ${response.data.city}`;
        let temp = document.querySelector("#temp").innerHTML = `${response.data.temp}`;
  
        // let feelsLike = document.querySelector(".feelsLike").innerHTML = `${response.data.main.feels_like}`;
        let minTemp = document.querySelector("#minTemp").innerHTML = `${response.data.minTemp}`;
        let maxTemp = document.querySelector("#maxTemp").innerHTML = `${response.data.maxTemp}`;
        let humidity = document.querySelector("#humidity").innerHTML = `${response.data.humidity}`;
        let pressure = document.querySelector("#pressure").innerHTML = `${response.data.pressure}`;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        let errorResult = document.querySelector("#result").innerHTML=`${cityName} is not a city Name `
        r1 = document.querySelector('.no-display').classList.toggle('no-display');  
      });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
window