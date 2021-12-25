# ShowSurfer - A UI Design Case Study.

ShowSurfer is a simple React App which enables users to search for and discover movies across the world. The purpose of this project is primarily to explore best design practices and patterns useful to achieve a user-friendly and performant application.

## Data Source:

ShowSurfer uses the [TMDB](https://www.themoviedb.org/) API for its data source. It is a free to use API for information on movies and other related information.

## Dependencies:

`react`: Component based JavaScript UI Library. This application uses all hooks based components.

`axios`: HTTP client for communicating with the API.
`react-query`: Fetching, caching, synchronizing server data in the application. Used along side axios to provide a hook-based state management of server-side data.

`bootstrap`: CSS Component Library for a responsive and elegant User Interface.
`react-bootstrap`: React bindings for **bootstrap**, allowing for a simpler implementation of interactive components.
`react-tippy`: Lightweight react-binding for **tippy.js**, for building interactive popovers and tooltips.
`fontawesome`: Icons Library.
`node-sass`: SCSS Preprocessor Library for compiling and bundling SCSS stylesheets.

`formik`: State Management library for forms used in the application. Validation, Error Handling and submission.

`redux`: Client-side global state management library.
`react-redux`: React bindings for **Redux**.

## Running Locally.

- Make sure `node v16+` and `npm v8+` is installed in your local machine. Download and install from [nodejs.org](https://nodejs.org/)
- Clone the repository.
- In the project directory, run `npm install`. This will install all the required dependencies.
- Once dependencies are installed, run `npm start` to run the application. This will start the development server at `localhost:3000`.
- The Application would not be able to communicate directly with the API, since an API key is required to authenticate the requests. `REACT_APP_API_KEY` and `REACT_APP_API_URL` environment variables are required to be present in a **.env**/**.env.local** file. Find the steps to acquire an API key at [TMDB Developers Documentation](https://developers.themoviedb.org/3/getting-started)
