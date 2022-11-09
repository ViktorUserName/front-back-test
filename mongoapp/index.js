const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://0.0.0.0:27017/"
const mongoClient = new MongoClient(url);
mongoClient.connect(function(err, client) {
    if (err){return console.log(err)};
    // client.close();
    const db = client.db("admin");
     
    db.command({ping: 1}, function(err, result){
        if(!err){
            console.log("Подключение с сервером успешно установлено");
            console.log(result);
        }
    client.close()
    console.log('close')
    })
})

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
  
// // Подключаемся к серверу
// mongoClient.connect(function(err, client){
       
//     // обращаемся к базе данных admin
//     const db = client.db("admin");
     
//     db.command({ping: 1}, function(err, result){
//         if(!err){
//             console.log("Подключение с сервером успешно установлено");
//             console.log(result);
//         }
//         // Закрываем подключение
//         client.close();
//         console.log("Подключение закрыто");
//     });
// });