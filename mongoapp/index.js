const express = require('express');
const {MongoClient} = require('mongodb');
const {ObjectId} = require('mongodb');
const cors = require('cors');

const app = express();
const jsonParser = express.json();

const client = new MongoClient('mongodb://0.0.0.0:27017/')
const dbname = 'cardsdb';

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

(async () => {
    await client.connect();
    console.log('connect db successfull');
    app.locals.collection = client.db(dbname).collection('card');
    app.listen(3001);
    console.log("Сервер ожидает подключения...");
})().catch(console.error);

app.get('/api/cards', async(request, response)=>{
    const collection = request.app.locals.collection;
    const cards = await collection.find({}).project({_id:0}).toArray();
    response.send(cards)
});

process.on('SIGINT', async() => {
    await client.close();
    console.log('app close work');
    process.exit();
})