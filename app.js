import "dotenv/config";
import express from "express";
import { limitRequest } from "./Api/V1/config/limit.js";
import TrainersApp from "./Api/V1/routes/Trainer.js"

const app = express();
app.use(express.json());
app.use(limitRequest());

app.use("/trainer",TrainersApp);



const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});