// Get references to the form and table elements
const dataForm = document.getElementById('dataForm');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

let rowIndex = 1;

// Event listener for form submission
dataForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create a new row and add it to the table
    const newRow = dataTable.insertRow();

    newRow.innerHTML = `
        <td>${rowIndex++}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
    `;

    // Reset form fields
    dataForm.reset();
});

// Event listener for deleting rows
dataTable.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove(); // Remove the row
        rowIndex--; // Decrease row index to maintain numbering
    }
});
