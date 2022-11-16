const express = require('express');
const mongoose = require('mongoose')
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

////
// app.set("view engine", "hbs");
// app.use(express.urlencoded({ extended: false }));
////


app.use('/users', userRouter);
app.use('/', homeRouter);


app.use(function(request, response, next){
    response.status(404).send('that page not found');
});

mongoose.connect('mongodb://0.0.0.0:27017/Usersdb', { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(3001);
});






////////////////////////




// const userRouter = express.Router();
// const homeRouter = express.Router();


// userRouter.use('/create', userController.addUser);
// userRouter.use('/', userController.getUser);
// app.use('/users', userRouter);

// homeRouter.use('/about', homeController.about);
// homeRouter.use('/', homeController.index);
// app.use('/', homeRouter);

// app.use(function(request, response, next){
//     response.status(404).send('that page not found');
// });

// app.listen(3001);



////////////////////////////////

// userRouter.use('/create', function(request, response){
//     response.send('adding user');
// });
// userRouter.use('/', function(request, response){
//     response.send('users list');
// });
// app.use('/users', userRouter);

// app.get('/about', function(request, response){
//     response.send('about web');   
// });

// app.use(function(request, response, next){
//     response.status(404).send('not found');
// });

// app.listen(3001);