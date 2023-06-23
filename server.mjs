import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();
const app = express()
app.use(cors())

    // app.get('/', (req, res) => {
    //     res.send('Hello World!')
    // })
app.get('/weather/:cityName', (req, res) => {
    let weatherdata = {
        karachi: {
            
                city: 'Karachi',
                temp: 30,
                minTemp:25,
                maxTemp: 45,
                humidity: 56,
                pressure: 100,
                feelsLike:35
            
        },
        london: {
            
                city: 'London',
                temp: 20,
                minTemp:5,
                maxTemp: 25,
                humidity: 60,
                pressure: 100,
                feelsLike:15
            
        }
    }
    let userInputCityName = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherdata[userInputCityName]
    if (weatherDataToSend) {
        res.send(weatherDataToSend)
    }else{
        res.status(404).send(`There Was No Weather Data Available For ${req.params.cityName}`);
    }
});
app.use('/', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})