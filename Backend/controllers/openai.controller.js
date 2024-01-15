import { OpenAI, toFile } from "openai";
import getOpenAiInstance from "../utils/openai.js";
import fs from "fs";

export const analyzeImage = async (req, res) => {
    
    try {
        const image = req.file.path 
        const userQuestion = req.body.question  || "Can you help me identify this food?"

        const openai = getOpenAiInstance();
        console.log('openai:', openai);
   
        const response = await openai.chat.completions.create({
            model: "gpt-4-vision-preview",
            max_tokens: 250,
            temperature: 1.5,
            
            messages: [
                { "role": "system", "content": "You are a professional chef with expertise in identifying cuisines. Your goal is to analyze the provided food image and determine its cuisine, color, recipe, and country of origin." },
                {
                    "role": "user",
                    "content": [
                        { "type": "text", "text": userQuestion },
                        { "type": "image_url", "image_url": { "url": image } },
                    ],
                },
            ],
            
        });
            console.log(response.choices[0].message.content);
        res.json(response.choices[0].message.content);
    } catch (e) { }
};