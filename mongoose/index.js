const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();
const cors = require('cors');
const jsonParser = express.json();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions))

const cardScheme = new Schema({
    id: Number,
    h1: String,
    price: String,
    img: String
});
const Card = mongoose.model('Card', cardScheme);

mongoose.connect('mongodb://0.0.0.0:27017/cardsdb', {useUnifiedTopology: true, useNewUrlParser: true}, (err)=>{
    if(err) return console.log(err);
    app.listen(3001, () => {console.log('express wait connection...');})
});

app.get('/api/cards', function(request, response){
    Card.find({}, {_id: 0, __v: 0}, function(er, card){
        if(er) return console.log(er);
        response.send(card)
    });
})



/////////////////////////////////////////////////////////////////////

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const cardScheme = new Schema({
//     id: Number,
//     h1: String,
//     price: String,
//     img: String
// });

// mongoose.connect('mongodb://0.0.0.0:27017/cardsdb', {useUnifiedTopology: true, useNewUrlParser: true});

// const Card = mongoose.model('Card', cardScheme);

// Card.find({}, {_id:0, __v:0}, async (err, doc)=>{
//     mongoose.disconnect();
//     if (err) return console.log(err);
//     console.log('here', doc);
// })


// const card = new Card({
//     id: 5,
//     h1: 'titlemongoose2',
//     price: '5400',
//     img: 'https://i.ibb.co/2WspKMj/Rectangle-20.png'
// });

// card.save()
// .then((doc) => {
//     console.log('saved', doc);
//     mongoose.disconnect();
// })
// .catch(console.err)