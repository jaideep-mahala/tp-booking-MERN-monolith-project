import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5050;


const app = express();

app.get("/home" , (req,res) => res.send("homepage is working sucessfully"));
app.get("/", (req, res) => res.send("backend is working successfully"));

app.listen(port , () => console.log(`the server is running at : ${port}`));