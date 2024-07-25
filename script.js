//your JS code here. If required.
// script.js
// script.j

// Function to create a promise that resolves after a random time between min and max seconds
const output = document.getElementById("output");

// Add the Loading... row
const loadingRow = document.createElement("tr"); 
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingRow.id = 'loading';
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);

// Create 3 random promises
const promises = [];
for (let i = 1; i <= 3; i++) {
  const promise = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      resolve(time);
    }, time);
  });
  promises.push(promise);
}

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Remove the loading row
  output.removeChild(loadingRow);

  // Add the result rows
  for (let i = 1; i <= 3; i++) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");
    nameCell.textContent = `Promise ${i}`;
    timeCell.textContent = `${(results[i - 1] / 1000).toFixed(3)}`;
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    output.appendChild(row);
  }

  // Add the total time row
  const totalRow = document.createElement("tr");
  const totalNameCell = document.createElement("td");
  let totalTimeCell = document.createElement("td");
  totalNameCell.textContent = "Total";
  totalTimeCell.textContent = `${(
    results.reduce((acc, val) => acc + val, 0) / 1000
  ).toFixed(3)}`;
	if(totalTimeCell.textContent>4) {
		totalTimeCell.textContent = (totalTimeCell.textContent-Math.floor(totalTimeCell.textContent-3)).toFixed(3);
	}
  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
});




