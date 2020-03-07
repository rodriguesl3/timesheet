Badges:
![CI](https://github.com/rodriguesl3/timesheet/workflows/CI/badge.svg?branch=develop)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Introduction
This project is an application where get stock market information and compile in multiple views, in this first version, we are doing a dashboard where is possible?

* Last 30 days value
* Current price 
* Candle stick chart
* News related of companies searched
* Top trend companies
* Current position (Wallet value)

## Technology Used
### Front end:
* ReactJS ***hooks and functional components***
* TypeScript
* React Redux 
* Redux Saga
* React Router
* APEX Chart

### Development:
* Git Hooks:
  
  * Using husky when a developer add a new commit before to complete it, husky will run test and build typescript code, to make sure that everything is ok.

* Commit Message:
  
  * Following [commitlint](https://github.com/conventional-changelog/commitlint) all commits need to follow this standard.


## Some useful scripts:

Runs `npm install` to install locally all project dependencies.

Runs `npm start` to run locally in your browser through [http://localhost:3000](http://localhost:3000).

Runs `npm test` to run all test written using Jest and Enzyme.


---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
