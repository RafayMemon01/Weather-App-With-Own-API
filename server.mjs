console.log("Server Was Working");
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!' + new Date())
});
app.get('/weather', (req, res) => {
  res.send(
    {
        city: 'karachi',
        temp: 30,
        minTemp: 25,
        humidity: 100,
        pressure: 100,
        maxTemp: 40
    }
  )
});
app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT, () => {
  console.log(`Example Server listening on port ${PORT}`)
})