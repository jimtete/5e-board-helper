// Function to generate the table
function generateTable() {
    var rows = 40; // Number of rows
    var cols = 4; // Number of columns

    var table = document.getElementById("myTable");

    for (var i = 0; i < rows; i++) {
        var row = table.insertRow();
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell();

        }
    }
}

// Call the function to generate the table when the page loads
generateTable();
