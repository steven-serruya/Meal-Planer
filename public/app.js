document
  .getElementById("userDetailsForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Retrieve the input values
    const formData = {
      age: document.getElementById("age").value,
      height: document.getElementById("height").value,
      weight: document.getElementById("weight").value,
      gender: document.getElementById("gender").value,
      activityLevel: document.getElementById("activityLevel").value,
      allergies: document.getElementById("allergies").value,
      preferredFoods: document.getElementById("preferredFoods").value,
      dislikedFoods: document.getElementById("dislikedFoods").value,
      mealsPerDay: document.getElementById("mealsPerDay").value,
      primaryObjective: document.getElementById("primaryObjective").value,
    };

    // Make the request to your backend
    try {
      const response = await fetch("/generate-meal-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      const resultText = document.getElementById("resultText");

      if (data.success) {
        resultText.innerText = data.mealPlan;
      } else {
        resultText.innerText = "No response received.";
      }
    } catch (error) {
      console.log(error);
      resultText.innerText = "Error occurred while generating.";
    }
  });
