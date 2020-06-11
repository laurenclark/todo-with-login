[![Netlify Status](https://api.netlify.com/api/v1/badges/2387ac3b-a3b0-42ec-869d-e02ab0768a30/deploy-status)](https://app.netlify.com/sites/react-todo-with-login/deploys)

# React Hooks Todo List 📝 

This uses the following:-
- 💡React Hooks (Functional > OOP)
- 💡Context API (As an alternative for Redux - for small things like this Redux is a bit overkill)
- 👩‍🎤Emotion Styled Components (for scoped CSS in JS & Nesting)
    - I've used a few different combinations to show how it can be used, likely would do it differently in production.
- 💡UUID for creating ID's to map
- 💡ES2015+ (No need for Lodash, Ramda etc for something this small)
- 📅 React nice-dates - for datepicker plugin (really good UI and API)
- 📅 React date-fns (prefer over Moment.js as its more functional)
- 💄 Prettier (For formatting)
- 💬 Babel 
- ❄️ Snowpack (makes dev a bit quicker but uses webpack for production)
- React Router 5.1 
- Netlify and Netlify _redirects

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode. Open http://localhost:8080 to view it in
the browser.

The page will reload if you make edits. You will also see any lint errors in the
console.

### npm test

Launches the test runner in the interactive watch mode. See the section about
running tests for more information.

### npm run build

Builds a static copy of your site to the `build/` folder. Your app is ready to
be deployed!

**For the best production performance:** Add a build bundler plugin like
"@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your
`snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
