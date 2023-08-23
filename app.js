import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());



const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});