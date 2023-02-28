import { validateDetails, validateSubject } from "./validator";

const text =
  "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. " +
  "React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be " +
  "broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components." +
  "React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you " +
  "can sprinkle with markup. Components can be as small as a button, or as large as an entire page.";

test("validateSubject", () => {
    expect(validateSubject("")).not.toBe(undefined);
    expect(validateSubject("abcd")).not.toBe(undefined);

    // valid
    expect(validateSubject("abcde")).toBe(undefined);
    expect(validateSubject("abcdef")).toBe(undefined);
    expect(validateSubject("the quick brown fox jumps over the lazy dog again")).toBe(undefined);
    expect(validateSubject("the quick brown fox jumps over the lazy dogs again")).toBe(undefined);
    // end valid

    expect(validateSubject("the quick brown fox jumps over the lazy dog again and again")).not.toBe(undefined);
});

test("validateDetails", () => {
    expect(validateDetails("")).not.toBe(undefined);
    expect(validateDetails("abcd")).not.toBe(undefined);

    // valid
    expect(validateDetails("abcde")).toBe(undefined);
    expect(validateDetails("abcdef")).toBe(undefined);
    expect(validateDetails("the quick brown fox jumps over the lazy dog")).toBe(undefined);

    let str = text.substring(0, 199);
    expect(validateDetails(str)).toBe(undefined);

    str = text.substring(0, 200);
    expect(validateDetails(str)).toBe(undefined);
    // end valid

    str = text.substring(0, 201);
    expect(validateDetails(str)).not.toBe(undefined);

    expect(validateDetails(text)).not.toBe(undefined);
});

