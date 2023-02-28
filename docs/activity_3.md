# Activity 3 - Confess (or Just Say Hi)

## Confession Page

Here's the design for this page:

![Confess To Us](./images/confess.png 'Sketched confession page')

Well, that's pretty surprising.

## Form Elements

It looks like they want a form with three elements.

-   A subject line for the confession.

-   A dropdown for the reason for the confession. This could be either a type of misdemeanour, or "I just want to talk"

-   A text box for details

## Form Behaviour - on the Client

Let's start by building this form for the _client_ only.

In other words, users should be able to fill in these details, but the `Confess` button won't actually do anything... yet.

**We'll look at what happens when the Confess button is pressed later**

👉 First criteria: **When the form is filled in with valid data, THEN the confess button becomes enabled.**

Hmm. 🤔 What does "filled in with valid data" mean, exactly?

Well... it's up to you! Perhaps the subject line is required, and the details must be a certain length, and a dropdown option must be selected? Or maybe you think other requirements make more sense?

👉 Choose some sensible rules for your form data that will **enable** or **disable** the Confess button!

👉 Build a form that obeys those rules, showing UI to the user that demonstrates if the form is valid or not.

💡 Perhaps you want to make the border of invalid textboxes `red`, and valid ones `green`. Perhaps you want to show a little message explaining what is valid or isn't?

💡 Don't worry about making this validation code re-useable. Making generic validation code that can be reused across multiple forms is a tough problem - for now we can just make sure that each `<input>` is valid.

👉 Try to keep your commits for this activity small and isolated - each of these bullet points is a good candidate for its own commit... or even multiple small commits per bullet point!

👉 This might be a good candidate for some testing. (If you haven't been testing all your components already... you have, right?!) Add a `{filename}.test.tsx` file to check your button is enabled/disabled correctly, and that validation is working properly, given the right props to the form component.

## Pressing Confess - Send to the Server

👉 When submitting a form, the data should be POSTed to the server with the following format:

```JSON
{
	"subject": "subject line",
	"reason": "", // either a MisdemeanourKind OR the string `just-talk`
	"details": "details here"
}
```

You must POST the above form data to the endpoint:

`{sameBaseUrl}/api/confess`

👉 The endpoint will respond with:

```TypeScript
// JSON
{
	"success": boolean, // true for success; false for an error
	"justTalked": boolean; // true if this was just wanting to talk, false for a real confession. Not present if success is false.
	"message": string; // a message
}
```

👉 When your app receives the response to the POST, your app must:

1️⃣ Display an error message from `message` if `success` is `false`

2️⃣ If `success` is `true` and `justTalked` is `false`, i.e. it's a real confession, you should add the confession data to your list of misdemeanours so this new crime is visible on the misdemeanours page. (NB: the server does not save this data so if you hit F5 it will be lost. That's okay!)

🤔 You may notice that the returned data isn't _quite_ the same data type as the result from GETting misdemeanours. It's up to you how you handle this little inconsistency while meeting the requirements.

3️⃣ If `justTalked` is `true`, you don't have to do anything.

👉 Hold on! Have you been writing quality, valid, [accessible HTML](https://reactjs.org/docs/accessibility.html#semantic-html)? Maybe now is a good time to run your generated HTML through a validator and see! To do this, you can open your app in the browser and copy/paste the HTML from dev tools into a validator. 🙌

## The Next Level 🔥

If you're feeling up to it, [activity 4](./activity_4.md) has some suggestions for taking your app to new heights - including deploying it live on the internet! 🤩
