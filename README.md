# Choose Country App
https://anastasiyasam.github.io/show-country-info/

## Description
This web app allows users to choose and get information about a chosen country.

## Excuses  
When I initially built the app, I encountered CORS issues with the restcountries.com API. Many routes were restricted except for the main one, which allowed querying with different parameters and retrieving data for all countries. To optimize performance and speed, I chose to modify the country array instead of filtering it on every country selection. This decision was made to avoid excessive API requests and enhance the user experience.

## Technologies Used
- **Vue 3.4.21**
- **TypeScript 5.2.2**
- **Pinia 3.4.21**
- **Axios 1.6.8**
- **Tailwind CSS 3.4.3**
- [restcountries.com API](https://restcountries.com)

## Technology Choices
While I typically work with the Options API and Vuex, I wanted to challenge myself and demonstrate my ability to learn new technologies. Therefore, I built this app using the Options API, incorporating a bit of Pinia for state management and partly Tailwind CSS for styling.

## Getting Started
To run the project locally, follow these steps:

1. Ensure Node.js (version 18.18.0) is installed.
2. Clone this repository.
3. Navigate to the project directory.
4. Install dependencies with `npm install`.
5. Start the development server: `npm run dev`

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
