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
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

d3.event.preventDefault();

var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

var filteredData = tableData.filter(date => date.datetime === inputValue);

console.log(filteredData);

