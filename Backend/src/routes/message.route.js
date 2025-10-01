import express from "express";
import { Router } from "express";

const router = express.Router();

router.get("/send" , (req,res) => {
    res.send("send Endpoint")
})

export default router