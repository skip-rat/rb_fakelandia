# Justice for Fakelandia ⚖️

## Introduction 🧑‍⚖️

The faraway country of Fakelandia has decided to modernise their justice system with a fancy new technology: "websites".

Fakelandia is a happy place with a low crime rate, but it's important to each citizen that justice is seen to be served, so they'd like a website to keep abreast of the latest justice developments - and they've specifically asked for YOU to help out.

Your job is to create a _React app_ which meets their requirements.

_This lab won't lead you step-by-step through each line of code_, but it will lead you through all of the stages of building the app.

You're going to be building the app entirely from scratch, so you'll get to use your own creativity to decide what a good solution looks like as you bring the designs to life.

This is your chance to show off everything you've learned about building React applications, so feel free to be creative and have some fun.

Remember the importance of:

-   Writing tests for your components
-   Using BEM/OOCSS to write scalable, reusable CSS
-   Keeping your components small and refactoring them into sub-components where necessary
-   Using hooks to store state, make API calls, and pass data down to sub-components through contexts

## Crimes and Misdemeanours

The Fakelandians have asked for a site that lets them browse lists of crimes committed today, and also for functionality that helps citizens confess to their own crimes.

As a non-citizen, you might not be aware that there are only four possible crimes in Fakelandia:

-   Mild Public Rudeness
-   Speaking in a Lift
-   Not Eating Your Vegetables
-   Supporting Manchester United

Despite the clear severity of some of these awful crimes, the Fakelandians refer to them all as "misdemeanours".

## Project Structure

Generally our frontend apps contact servers (via their APIs) which run on other peoples machines. However, it's common in frontend development to run a server locally (on our development machines) to provide a backend for us to call.

The Fakelandians have provided you with a functioning web server which you can call to get details of any recent crimes.

Let's test that out first.

👉 Run `npm install` and then `npm run start-server`

⚠️ NOTE: The command is `npm run start-server` NOT `npm start`

The server will start up. You should see a little welcome message in your terminal:

![Server Welcome](./docs/images/server_welcome.jpg 'Server welcome message')

It seems you can access the server by browsing to various URLs.

👉 In your browser, navigate to the health check route `http://localhost:8080/health`

You should see a message:

"👍 Okay! The server is responding! 🙌"

👉 In your browser, navigate to the API route `http://localhost:8080/misdemeanours/3`

You should see a JSON object being returned from the GET request to that route. Try changing the parameter at the end to another number, or to a random string.

Okay, so that's the server our React app is going to be interacting with.

💡 Now's a good time to have a nose 🐽 around at how the server works and get familiar with the `routes.ts` file, `services` folder and `misdemeanours.types.ts` file.

⚠️ You don't need to touch anything inside the server, so this exploration is just for curiosity and learning!

Now, we're going to need a React app.

## Creating your React application ✨

There are different ways to create a React application.

1️⃣ `Create React App` - CRA is what we've been using so far in the programme to make our React apps.

2️⃣ `Vite` - [Vite](https://vitejs.dev/guide/) is a popular alternative to Create React App, with faster build times and more flexibility than create-react-app.

👉 Choose one of the above approaches - you will be more familiar with CRA, but you might enjoy exploring Vite - it's only a _little_ bit different, and many people prefer the Vite developer experience.

👉 Instructions for both methods are below - read them both and choose one!

### Option One: The "Create React App" way

One way is with Create React App (CRA).

To create your application with CRA, run the following command in the root folder:

```
npx create-react-app@latest ./client --template typescript
```

This will setup a fresh React app for you in a subfolder called `/client`, with TypeScript already enabled.

### Option Two: The Vite way

Here's the command to setup your React app using Vite:

```bash
# 💡 This is NOT a typo, the extra "--" IS needed! 😮

npm create vite@latest client -- --template react-ts
```

👉 Run the above command, then `cd client` and then `npm install` as instructed by the terminal.

👉 In your ROOT `package.json` (i.e. the one in the root folder NOT the one in the client folder), edit the existing "start-client" script to:

`"start-client": "cd client && npm run dev",`

👉 Now run `cd ..` to return your terminal to your root folder. You should be able to run `npm run start-client` in your root folder to run your React app.

💡 Optionally, you can now change the `client/package.json` to open your browser automatically when you start the app, by changing the `dev` script like this:

`"dev": "vite --open"`

⚠️ If you choose to use Vite then your local port will be different, i.e. `http://localhost:XXXX` not `http://localhost:3000` so make sure your port matches what shows up in your terminal when you run `npm run start-client`.

### Running client and server together

⚠️ 🛑 At this point you should have a React app running using `npm run start-client` in the root folder, whether you installed it with CRA or Vite. 🛑 ⚠️

👀 Notice that in the root `package.json` there is a convenience command setup in the `scripts` section:

`"start": "concurrently -n client,server -c cyan,magenta \"npm run start-client\" \"npm run start-server\""`

This uses an `npm` package called `concurrently` to run both the client React app and the server at the same time when you run `npm start` in the root folder.

👉 Ensure your server and client are not running by pressing `Ctrl-C` in any terminal where they are running.

👉 Run `npm start` in the root folder to start up both your server and your React app.

You should then be able to access the default application by opening the browser and visiting

[http://localhost:3000](http://localhost:3000)

👉 🤚🛑⛔ STOP 🤚🛑⛔ At this point, you should be able to use `npm start` and then browse to your server at the health check, AND simultaneously in another tab you should see your starter React app.

🙌 If both the server and React app are running at the same time, then we're good to continue! If not, please get that working before you continue - ask for help if you need.

💡 Later, once you add tests to your client, you can start them by running `npm test-client` in the root folder.

## Let's get started

Once you're happy you have got the client and server running together, it's time to start building the app the Fakelandians want.

Let's start with the homepage in [activity 1](./docs/activity_1.md).
