import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import router from "./presentation/routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res)=>{
  return res.send("Api V1")
});


export default app;