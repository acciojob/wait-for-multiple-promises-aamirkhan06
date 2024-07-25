//your JS code here. If required.
// script.js
// script.j

// Function to create a promise that resolves after a random time between min and max seconds
function createRandomPromise(min, max) {
  const randomTime = Math.random() * (max - min) + min;
  return new Promise((resolve) => {
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  });
}

// Create a row for the initial "Loading..." message
const loadingRow = document.createElement('tr');
loadingRow.setAttribute('id', 'loading');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', '2'); // Span 2 columns
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);

const outputTable = document.getElementById('output');
outputTable.appendChild(loadingRow);

// Create three promises
const promise1 = createRandomPromise(1, 3);
const promise2 = createRandomPromise(1, 3);
const promise3 = createRandomPromise(1, 3);

// Wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // Remove the loading row
    outputTable.removeChild(loadingRow);

    // Create rows for each promise
    results.forEach((time, index) => {
      const row = document.createElement('tr');
      const promiseName = document.createElement('td');
      const timeTaken = document.createElement('td');

      promiseName.textContent = `Promise ${index + 1}`;
      timeTaken.textContent = time.toFixed(3); // Display time with 3 decimal places

      row.appendChild(promiseName);
      row.appendChild(timeTaken);
      outputTable.appendChild(row);
    });

    // Calculate and display the total time
    const totalTime = results.reduce((sum, time) => sum + time, 0);
    const totalRow = document.createElement('tr');
    const totalName = document.createElement('td');
    const totalTimeTaken = document.createElement('td');

    totalName.textContent = 'Total';
    totalTimeTaken.textContent = totalTime.toFixed(3); // Display total time with 3 decimal places

    totalRow.appendChild(totalName);
    totalRow.appendChild(totalTimeTaken);
    outputTable.appendChild(totalRow);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
    outputTable.textContent = 'An error occurred. Please try again.';
  });
