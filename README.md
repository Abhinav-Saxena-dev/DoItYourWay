# Do-It-Your-Way

[Visit](https://main--doityourway.netlify.app/)

## Description

DoItYourWay is a task management application designed to help you organize and manage your tasks effortlessly. Built with React and React-Redux, it offers a seamless user experience and robust performance.

## Features

### Centralized State Management with React-Redux
DoItYourWay uses React-Redux for centralized state management. This ensures that the state is consistent across all components, making it easier to manage global state variables like user authentication, task lists, and settings.

### Immutable State Updates
By adhering to the principles of immutability, DoItYourWay ensures that state updates are predictable. This is particularly useful for debugging and for understanding the flow of data within the application.

## Future Tasks

### If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed.
- This can be accomplished by providing the user with the option to create their own boards, delete existing ones, and allowed to edit existing ones. When a board is being created, users can be provided with a checkbox which can determine if the users wish to keep the default board template, that is, Open - In Progress - Done. If the users opts it, this template can be displayed to them and they can also edit it to their liking. If a user doesn't opt it, user can create their own stages.

### If users can comment on tasks
- This can be accomplished in a way FIGMA does it. Users can commend on a particular task by clicking on an icon option provided to them on the task itself. This comment will be available to other authorized users who can view it by hovering over the task.

### How will you do error handling?
- This can be accomplished by multiple ways :
-- Utilizing Try/Catch properly, on steps prone to throw error.
-- Creating a global middleware which will act as our Error Handler which will use our customErrorHandler to determine the type of error and what status code to use.
-- Creating a customErrorHandler Service class which will extend Error. This class will be responsible for returning a type of error instance and status code that will be used by the global middleware, such as notFound, unAuthorized, badRequest, etc.
