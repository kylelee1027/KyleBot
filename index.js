import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();
const app = express();

// Initializing Gemini Model
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// Middleware for parsing body request
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Hello world");
});

app.get("/chat", async (request, response) => {
    try {
        const prompt = request.query.prompt;
        const result = await model.generateContent(prompt);
        const resp = await result.response;
        const text = resp.text();
        console.log(text);
        return response.status(201).send({result: text});
    }
    catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});