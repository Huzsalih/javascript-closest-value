function closestTo100(num1, num2) {
  // Calculate the absolute difference from 100 for each number
  const diff1 = Math.abs(100 - num1);
  const diff2 = Math.abs(100 - num2);

  // Log the differences for debugging
  console.log(`num1: ${num1}, diff1: ${diff1}`);
  console.log(`num2: ${num2}, diff2: ${diff2}`);

  // Compare the differences and return the closer number
  if (diff1 < diff2) {
    return num1;
  } else if (diff2 < diff1) {
    return num2;
  } else {
    return "Both numbers are equally close to 100.";
  }
}

// Example usage:
console.log(closestTo100(95, 105)); // Should output: Both are equally close
console.log(closestTo100(110, 120)); // Should output: 80
console.log(closestTo100(99, 101)); // Should output: 99
console.log(closestTo100(90, 110)); // Should output: Both are equally close
