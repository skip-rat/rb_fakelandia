import { validateDetails, validateSubject } from "./validator";

export const bigText =
  "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. " +
  "React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be " +
  "broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components." +
  "React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you " +
  "can sprinkle with markup. Components can be as small as a button, or as large as an entire page.";

export const validSubjectText = [
  "abcde",
  "abcdef",
  "the quick brown fox jumps over the lazy dog again",
  "the quick brown fox jumps over the lazy dogs again"
];

export const invalidSubjectText = [
  "a",
  "abcd",
  "the quick brown fox jumps over the lazy dog again and again"
];

export const validDetailsText = [
  "abcde",
  "abcdef",
  "the quick brown fox jumps over the lazy dog",
  bigText.substring(0, 200)
]

export const invalidDetailsText = [
  "a",
  "abcd",
  bigText.substring(0, 201)
]

test("validateSubject", () => {
  validSubjectText.forEach(str => {
    expect(validateSubject(str)).toBe(undefined);
  });

  invalidSubjectText.forEach(str => {
    expect(validateSubject(str)).not.toBe(undefined);
  });
});

test("validateDetails", () => {
  validDetailsText.forEach(str => {
    expect(validateDetails(str)).toBe(undefined);
  });

  invalidDetailsText.forEach(str => {
    expect(validateDetails(str)).not.toBe(undefined);
  });
});

