import express ,{ Application ,Request,Response} from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db";
import Router from "./routes/todo";
dotenv.config();

const app : Application = express();

app.use(cors({origin : "*"}))
app.use(express.json());


app.use("/api",Router);

app.use("/",(req : Request,res: Response)=>{
    res.send({
        "success" : true,
        "message" : "backend is live"
    })
})

const port : string | undefined = process.env.PORT ;
app.listen(port, async () : Promise<void> =>{
    await connectDb();
    console.log(`server is running in http://localhost:${port}`)
})