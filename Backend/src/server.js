import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import path from "path"

dotenv.config();

const app =  express();
const __dirname = path.resolve();

const PORT = process.env.PORT 

app.use("/api/auth" , authRoutes )
app.use("/api/messages" , messageRoutes )

//  make ready for deployment

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "../Frontend/dist")))
    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname, "../Frontend","dist","index.html"))
    })
}

app.listen(PORT, () => console.log("Listening at port: " + PORT))