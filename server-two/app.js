const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/catinfo', (req, res) => {
    const cat = {
        'name': 'Frank',
        'age': 6,
        'weight': 5,
    };
    res.json(cat);
});


app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
