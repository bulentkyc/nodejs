const express = require('express');
const auth = require('./router/auth');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/auth', auth);
app.use('/api/products', auth);

app.listen(port, () => console.log(`Server started to run on port: ${port}`));

/* 
app.get('/about', (req,res) => {
    res.send("I'm a developer :)");
});

app.get('/', (req,res) => {
    res.send('Hello World :)');
});

app.get('/index', (req,res) => {
    res.sendFile('index.html', {root: __dirname });
}); */