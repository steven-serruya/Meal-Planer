import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from a directory named 'public'
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.post("/generate-meal-plan", async (req, res) => {
  try {
    const {
      gender,
      age,
      height,
      weight,
      activityLevel,
      allergies,
      preferredFoods,
      dislikedFoods,
      mealsPerDay,
      primaryObjective,
    } = req.body;

    const customPrompt = `Based on the calculated TDEE and the primary objective of ${primaryObjective}, create a specific 7-day meal plan, varying each day. Please consider the following dietary preferences: preferred foods are ${preferredFoods}, disliked foods are ${dislikedFoods}, and allergies include ${allergies}. The plan should be for ${mealsPerDay} meals per day.`;
    const tdee = `Calculate the TDEE for a ${gender}, ${age} years old, with a height of ${height} cm, weight of ${weight} kg, and an activity level of ${activityLevel}/5.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "user", content: tdee },
          { role: "user", content: customPrompt },
        ],
      }),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      const generatedMealPlan = data.choices[0].message.content;
      res.json({ success: true, mealPlan: generatedMealPlan });
    } else {
      res.json({
        success: false,
        error: "No response received from OpenAI API.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error occurred while generating meal plan.",
    });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
