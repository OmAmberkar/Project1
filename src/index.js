import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env",
});

connectDB()
.then(
    app.listen(process.nextTick.PORT || 8000,() =>{
        console.log(`Mongo DB connection is on PORT : ${process.env.PORT}`)
    })
)
.catch(
    (err) => console.log("Mongo DB connection failed",err)
);
