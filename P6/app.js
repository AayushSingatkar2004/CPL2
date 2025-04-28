const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-03-22&sortBy=publishedAt&apiKey=706555380abd48d0ba7344a7f0ecab87';
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': '706555380abd48d0ba7344a7f0ecab87'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.render('index', { articles: data });
    } catch (error) {
        console.error(error);
        res.send("Error fetching news");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
