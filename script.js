document.getElementById("btn").addEventListener("click", () => {
  const inputValue = parseFloat(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  // Helper function to create a delayed promise
  const delayedPromise = (value, delay) => 
    new Promise((resolve) => setTimeout(() => resolve(value), delay));

  // Start the promise chain with the initial input
  delayedPromise(inputValue, 2000)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result * 2, 1000); // Step 2: Multiply by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result - 3, 1000); // Step 3: Subtract 3
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result / 2, 1000); // Step 4: Divide by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result + 10, 1000); // Step 5: Add 10
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
});
