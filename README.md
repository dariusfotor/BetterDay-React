# Better Day™ Health React Coding Assessment

## Overview

Please write a simple React application.

The purpose of this assessment is to assess your skills and approach to composing a simple web app given an API feed.

Please contact us, if you have any questions.

## What to do?

Your goal is to implement a simple React application, where users will be able to view a list of patients, view profiles, and edit patient information.
You have to create a minimalistic layout, but the UX/UI is totally up to you. The only requirement is to use the `material-ui` package.

If you see, that something can be improved in this initial react application, you can do that. 

Also, create a new `.md` file and add very short info for the following:

- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

Once you complete implementation, please send us the link to the hosted repository (e.g. Github, Bitbucket...). Alternatively, you may submit your code as a ZIP file too.

## How should the application work?

The user of this react application should be able to view profiles and modify their data.
The application should have the following workflow:

1. Choose a patient from the list.
2. Preview all patient profile data.
3. Press edit to load the form with patient data.
4. Provide a "Save" button that updates the data to the `api/data.json` file.

## Requirements

- All code must be written using [TypeScript](http://typescriptlang.org/) (interfaces, types, etc.).
- If you install additional packages, ensure that every package has TypeScript types.
- Use [formik](https://formik.org/) package for forms.
- Use [material-ui](https://material-ui.com/) package for design.
- Use [react-router](https://reactrouter.com/web) package for routing.

## How to start?

First of all, you will need to run `yarn install` once you starting working on the project to install dependencies.

Then, there are two main commands:

```txt
// Start compilation
> yarn start

// Start API
> yarn run start-api
```

## API Usage

API can be launched using `yarn run start-api`.

All API requests are defined in `src/utils/api/api.ts`.

| Endpoint                | Result                       |
| ----------------------- | ---------------------------- |
| `/patients`             | List all available patients. |
| `/patientsDetails/{id}` | Get patient details.         |

More info about API usage can be found at the [json-server repo](https://github.com/typicode/json-server).
