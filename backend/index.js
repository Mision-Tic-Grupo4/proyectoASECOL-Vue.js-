const express = require('express');
var morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/index');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 
// conexion DB
const urlDB = 'mongodb+srv://estefaniaurro:3st3f4n1aUrr0@cluster0.gryjc.mongodb.net/Portafolio?retryWrites=true&w=majority'
mongoose.Promise = global.Promise;
mongoose.connect(urlDB)
.then(mongoose => console.log("DB conectada en el puerto 27017"))
.catch(err=>console.log(err))

app.use('/api',apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'),() =>{
    console.log(`Runing on http://localhost:${app.get('PORT')}`)
})
