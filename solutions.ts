const multiplyValue = (value: number, multiplier?: number): number => {
  if (typeof multiplier === "number") {
    return value * multiplier;
  }

  return value * 2;
};
