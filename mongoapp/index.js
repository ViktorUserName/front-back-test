const { MongoClient } = require('mongodb');

const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url, { monitorCommands:true });
const dbname = 'cardsdb';


async function main() {
    await client.connect();
    console.log('connect successfull');
    const db = client.db(dbname)
    const collection = db.collection('card')
    
    // const test = await collection.findOneAndUpdate(
    //     {id:1}, {$set: {price: '20000'}}, {returnDocument: 'after'}
    //     )
    // const test = await collection.find({}).project({id:1, _id:0}).toArray();
    // const test = await client.db(dbname).collection('card').countDocuments()
   // const ping = await db.command({ping:1});
    console.log(test);
  
    // console.log('here:', insertry);
    
    // console.log(ping);
    
}

main()
// .then(console.log)
.catch(console.error)
.finally(() => client.close())