const multiplyValue = (value: number, multiplier?: number): number => {
  if (typeof multiplier === "number") {
    return value * multiplier;
  }

  return value * 2;
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};
