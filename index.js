const express = require('express');
const fetch = require('node-fetch');


const app = express();
const PORT = process.env.PORT || 8000;

app.get('/api/data', async (req, res) => {
    try {
    const response =  await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        console.log('Data fetched from API:', data); 
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



