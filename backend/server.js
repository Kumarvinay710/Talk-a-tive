const express=require('express');
const dotenv=require("dotenv");
const connectDB = require('./config/db.js');
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app=express();
app.use(express.json());

dotenv.config({path:__dirname+'/.env'});

connectDB();

app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler)

const PORT=process.env.PORT;

app.listen(PORT,console.log(`Server started on port ${PORT}`.yellow.bold));


