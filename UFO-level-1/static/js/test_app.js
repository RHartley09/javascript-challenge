// from data.js
var tableData = data;
var tbody = d3.select("tbody");
console.log(tableData);
// YOUR CODE HERE!
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var form = d3.select("#form");

function runEnter() {

    button.on("click", runEnter);
    form.on("submit", runEnter);

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    list = d3.select("#ufo-table");
    list.append("th").text(filteredData);

};
// Append to <th>
// try map

// from data.js
// var tableData = data;
// var tbody = d3.select("tbody");
// console.log(tableData);
// // YOUR CODE HERE!
// tableData.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// var button = d3.select("#filter-btn");
// var form = d3.select("#form");

// function runEnter() {

//     button.on("click", runEnter);
//     form.on("submit", runEnter);

//     d3.event.preventDefault();

//     var inputElement = d3.select("#datetime");

//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredData = tableData.filter(date => date.datetime === inputValue);

//     console.log(filteredData);

//     filteredData.forEach((sighting) => {
//         var row = tbody.append("tr");
//         Object.entries(sighting).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// };

// function myFunction() {
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         // Hide the row initially.
//         // tr[i].style.display = "none";
    
//         td = tr[i].getElementsByTagName("td");
//         for (var j = 0; j < td.length; j++) {
//           cell = tr[i].getElementsByTagName("td")[j];
//           if (cell) {
//             if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
//               tr[i].style.display = "";
//               break;
//             };
//           };
//         };
//     };
// };

// function runEnter() {

//     button.on("click", runEnter);
//     form.on("submit", runEnter);

//     d3.event.preventDefault();

//     var inputElement = d3.select("#datetime");

//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredData = tableData.filter(date => date.datetime === inputValue);

//     console.log(filteredData);

//     list = d3.select("#ufo-table");
//     list.append("th").text(filteredData);

// };