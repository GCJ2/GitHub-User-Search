This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# GitHub User Search

A simple web application that allows users to search for a particular GitHub user.

This application serves to show the benefit of global state management, even in smaller applications,
to avoid prop drilling and enhance scalability.

The master branch contains local state and some pretty egregious prop drilling, making the application
difficult to scale.

The Redux-Refactor branch has the application refactored to use Redux for global state management, 
allowing for greater scalability within the code base.

ContextAPI and useReducer refactors coming soon.

### Deployment

https://gcj2-github-user-search.netlify.app/
