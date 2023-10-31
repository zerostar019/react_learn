import express from 'express'
import cors from 'cors'
import { restaurants } from './data/mock.js';
import { comments } from './data/mock.js';
import { users } from './data/mock.js';


const port = 5320;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/restaurants', (req, res) => {
    res.status(200).json(restaurants);
});

app.get('/api/restaurants/:restarauntId', (req, res) => {
    const id = req.params.restarauntId;
    res.status(200).json(restaurants.find(({ restarauntId }) => restarauntId === id));
});

app.get('/api/reviews', (req, res) => {
    res.status(200).json(comments);
});

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
})

const startServer = () => {
    try {
        app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
    } catch (err) {
        console.log(err);
    }


}


startServer();