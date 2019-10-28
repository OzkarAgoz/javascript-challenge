//  the data file is data.js
var givenData = data;
var tbody = d3.select('tbody');
var button = d3.select("#filter-btn");
// *Alternate method for appending table*
//function maketable([row, key, value]) {
//  row.append('td').text(value);
//};
givenData.forEach(function(ufos) {
  var row = tbody.append('tr');
  Object.entries(ufos).forEach(([key, value]) => {
    var cell = row.append('td');
    cell.text(value);
  });
});
//button function defined
button.on("click", function() {
  //first empty the object contents
  tbody.text("");
  var SearchDate = d3.select("#datetime");
  var SearchValue = SearchDate.property("value");
  //define menu item to search
  var filter4date = givenData => givenData.datetime === SearchValue;
  //search and get results
  var searchresult = givenData.filter(filter4date);
  // add new found objects to table
  searchresult.forEach((searchedData) => {
    var row =tbody.append('tr');
    Object.entries(searchedData).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });
});
//