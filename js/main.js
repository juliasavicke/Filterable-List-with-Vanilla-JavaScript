"use strict";
console.log("main.js");

// get input element
let filterInput = document.getElementById("filterInput");

// add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // get values of input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  console.log("filterValue ===", filterValue);

  // get names ul
  let ul = document.getElementById("names");
  // get items
  let li = ul.querySelectorAll("li.collection-item");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    // if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
