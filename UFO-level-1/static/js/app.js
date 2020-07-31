var tableData = data;
var tbody = d3.select("tbody");
console.log(tableData);

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var button4 = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);



function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((sighting2) => {
        var row2 = tbody.append("tr");
        Object.entries(sighting2).forEach(([key2, value2]) => {
            var cell2 = row2.append("td");
            cell2.text(value2);
        });
    });
};

var mySound = document.getElementById("sound");
function xfiles() {
    mySound.play();
};
console.log("d3 button: ", button);
var soundbutton = document.getElementById("filter-btn");
console.log("soundbutton: ", soundbutton);
soundbutton.addEventListener("click", xfiles);

button.on("mouseover", function() {
    d3.select(".meme").html("<img src='static/images/alens.jpg' alt='aliens'/>");
});

// button.on("click", function() {
//     d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
//   });
  
// console.log("d3 button: ", button);
// var soundbutton = document.getElementById("filter-btn");
// console.log("soundbutton: ", soundbutton);
// soundbutton.addEventListener("click", xfiles);