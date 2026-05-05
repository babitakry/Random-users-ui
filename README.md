# Random Users UI

A responsive and beautifully designed React application that fetches and displays random user profiles. 

## Live Demo

🚀 **[View Live Project Here](https://random-users-ui-zeta.vercel.app/)**

## Overview

This project was built using **React**, **Vite**, and **Tailwind CSS**. It connects to the [FreeAPI Random Users endpoint](https://api.freeapi.app/api/v1/public/randomusers) to retrieve a list of randomly generated user data. 

The application parses the JSON response and dynamically renders the data into a clean, modern grid of `UserCard` components.

## Features

- **Data Fetching:** Utilizes React's `useEffect` and the native `fetch` API to retrieve data on component mount.
- **Component-Based Architecture:** Separates the layout logic (App) from the display logic (`UserCard`).
- **Responsive Design:** Uses Tailwind CSS Grid to automatically adjust the number of columns based on the screen size (mobile, tablet, and desktop).
- **Beautiful UI:** Incorporates modern design practices including soft shadows, rounded borders, hover micro-animations, and clean typography.
- **State Management:** Handles loading states with animated spinners and gracefully catches API errors.

## Technologies Used

- React 19
- Vite
- Tailwind CSS v4

## How to Run Locally

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open your browser to the local server URL provided by Vite.
