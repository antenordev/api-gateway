const cors = require('cors');
const  express = require('express');
const app = express();
const axios = require('axios');

app.use(cors());
app.use(express());

app.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        return res.json(data);
    } catch (error) {
        console.log(error);
    }
});

app.listen('4567');
