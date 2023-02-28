
export function validateSubject(value: string): string | undefined {
  if (
    value.length < 5 ||
    value.length > 50
  ) {
    return "Subject must be between 5 and 50 characters.";
  } else {
    return undefined;
  }
}

export function validateDetails(value: string): string | undefined {
  if (value.length < 5 || value.length > 200) {
    return "Details must be between 5 and 200 characters.";
  } else {
    return undefined;
  }
}
