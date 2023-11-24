# Meal Plan Generator App

This Meal Plan Generator is a web application designed to create personalized dietary plans based on user inputs. It takes into account various factors such as age, gender, height, weight, activity level, and dietary preferences to calculate a Total Daily Energy Expenditure (TDEE) and generate a meal plan.

## Features

- Personalized meal plan generation based on user inputs.
- Calculation of TDEE considering factors like age, gender, height, weight, and activity level.
- Options to specify allergies, preferred and disliked foods.
- Generation of a detailed 7-day meal plan with macro and calorie breakdowns.

## Tech Stack

- **Frontend**: HTML, Tailwind CSS
- **Backend**: Node.js, Express.js
- **API**: OpenAI's GPT-4 for generating meal plans

## Setup and Installation

1. **Clone the Repository**

2. **Navigate to the Directory**

3. **Install Dependencies**

4. **Set Up Environment Variables**

Create a `.env` file in the root directory and add the following:

OPENAI_API_KEY=your_openai_api_key_here
PORT=8000

5. **Start the Server**

The server will start running on `http://localhost:8000`.

6. **Open in Browser**

Open `http://localhost:8000` in your browser to use the application.

## Usage

1. Fill out the form on the homepage with the required details.
2. Click the "Generate Meal Plan" button.
3. View the generated meal plan in the results section.

## Screenshots

![User form to get meal plan](<public/screenshots/Screenshot 2023-11-23 at 19.32.28.png>)

![Filled up form](<public/screenshots/Screenshot 2023-11-23 at 19.32.58.png>)

![THe app gives you your TDEE and objective caloric intake](<public/screenshots/Screenshot 2023-11-23 at 19.33.32.png>)

![Meal example for day 1](<public/screenshots/Screenshot 2023-11-23 at 19.33.45.png>)

![Meal example for day 2](<public/screenshots/Screenshot 2023-11-23 at 19.34.01.png>)

## Contribution

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

[Specify License Here]

## Contact

Steven Serruya
Project Link: [https://github.com/steven-serruya/Meal-Planer]
