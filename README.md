# Reactjs-Redux-Tutorial
Simple explanation of adding redux to your
current project


1. Clone this repo
2. Run `npm install`
3. Run `npm start`


# Why Redux?
	-Useful for sharing data between containers
	-Predictable state management using the 3 principles

# The 3 principles:
	-Single source of truth
	-State is read only/ Immutable
	-Changes using pure functions
# Notes    
    Action -> Reducer -> Store -> Make Changes
    Action goes to a pure function that receives an input (The action), then
    creates an output. Which is the state of the app (store). Then React makes changes to the view layers

    Middle-Ware in redux listens for actions and a tunnel that actions go through to the reducer. Triggers, something happens before hitting the reducer.

# Redux-Thunk 
    - Allows you to handle actions asynchronously
    -Shown in this project on handle asycnhronous requests.