const express = require('express');

const app = express();

// revisar com feiem lo de app listen i PORT
app.listen(3000, ()=> console.log('Server up and running'));

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true}));

// engine configuration
app.set('view engine', 'ejs');

// GET method
app.get('/', (req,res)=> {
    res.render('todo.ejs');
});

// POST method
app.post('/', (req,res)=> {
    console.log(req.body);
})

