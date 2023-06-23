import express from 'express';
import cors from 'cors';
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/weather', (req, res) => {
    res.send({
        city: 'Karachi',
        temp: 30,
        minTemp:25,
        maxTemp: 45,
        humidity: 56,
        pressure: 100,
        feelsLike:35
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})