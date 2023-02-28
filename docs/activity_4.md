# Activity 4 - Extensions & Deployment

There are many, many improvements we could make - even to a small app like this. If you use it, you'll notice plenty of ways where it's a bit rough around the edges.

Here are some ideas for extensions - feel free to implement your own ideas too!

👉 You may have noticed the 0.75s wait when you call `generateMisdemeanours`. If not, try increasing the sleep(750) in `generateMisdemeanours` until it becomes annoying when you reload. Can you show a nice "loading" message while the fake API is loading?

(Hint: One way to do this could be to add an `isLoading` boolean to state, and using this to conditionally display a loading icon, for example.)

👉 The home page could be more exciting. Maybe you could add some statistics, like "total misdemeanours" or "number of confessions today"?

👉 The Confessions page allows users to add details of their confessions, but that data isn't currently being used anywhere. Maybe you could show it on the misdemeanours page if it is present?

👉 How about showing self-confessed misdemeanours in a different colour on the misdemeanours page?

## Deployment

It would be really cool to see the full site live on the internet. Github offer free hosting for simple sites like this via a service called `Github Pages`.

There's an `npm` package called `gh-pages` which makes this super simple:

💡 NB this was correct at the time of writing but if in doubt look up the documentation for `gh-pages` in case things have changed!

👉 `npm install gh-pages --save-dev`

👉 Add a `homepage` property at the top of your `package.json`, so it looks like this:

```JavaScript
{
  "name": "your-react-app-name",
  "version": "0.1.0",
  "homepage": "http://{username}.github.io/{repo-name}"
  // where {username} is your GitHub username, and {repo-name} is the name of your GitHub repository for this app
    // ... rest of package.json follows here...

```

👉 Alter the scripts in `package.json` by adding a predeploy step and changing the deploy step to push your project to github pages

```JavaScript
// ... package.json scripts section...
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

👉 Run the command `npm run deploy`

This will build and deploy the app to GitHub pages at the URL you specified in `homepage` above.

## GitHub Pages Settings

❗ It takes a few minutes for the site to be live! In the meantime, let's go look at what `gh-pages` has done. ❗

👉 Go to your github repository for this project, and click `Settings` to view the repo settings. Find the `GitHub Pages` section.

(The settings for GitHub Pages can be found at `github.com/{yourUserName}/{repoName}/settings/pages)

If `gh-pages` worked, then it will have configured these settings for you.

At the top is a notification of the URL that your app will be published at. At first this notification is BLUE - meaning GitHub is still processing your app. If you wait a few minutes and hit refresh it should be GREEN, and then you can navigate to the URL and view your app.

While we're waiting, let's look at the other settings:

First, a new branch has been created, named `gh-pages` by default. This contains the production build of your app - i.e. the actual HTML/JavaScript/CSS combo that we want to send down to users of your app.

Look at the `Source` section. You should be able to see that the repo settings have been automatically set to use the `gh-pages` branch as a source for the page.

Lastly, you can set up a custom domain, so if you own your own domain name then you can publish pages there using GitHub Pages!

## But Wait..!

Once the app is live you might find there are some problems, depending on how your GitHub Pages interacts with React Router.

When you navigate directly to a subpage of your GitHub Page, your browser makes a request to the GitHub Pages server, asking for `/your-app/your-subpage`. But GitHub Pages doesn't know anything about that! As far as it knows, there's just one app, at `/your-app`.

If you were in full control of the hosting server you could configure it to send the same app to every request that starts with `your-app`. But since we're NOT in full control, we have to change the way routing works.

There are several ways to do this, but the easiest (or, at least, laziest 😅) is to change our `<BrowserRouter>` component to a `<HashRouter>`. This changes the URLs for our router to use `#` rather than `/` to separate subpages - so from the server's point of view they're all part of the same page. Our URLs look a bit uglier, but at least it works with our free GitHub Pages hosting!

## Hooray! 🥳

You've done it! You've modernised the extremely unusual justice system of Fakelandia, and hopefully had some fun and got to experiment a little in the process.

Have a well-deserved rest and look forward to using all these skills to make some extremely cool apps!
