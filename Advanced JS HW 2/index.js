let body = document.getElementsByTagName("body")[0];
let button = document.getElementById("btn1");
let table = document.createElement("table");
table.style.borderCollapse = "collapse";
let theader = table.createTHead();
let tbody = table.createTBody();
let row = theader.insertRow(0);

let div1 = document.getElementById("first");

let titleHeader = ["Planet Name", "Population", "Climate", "Gravity"];

for (i = 0; i < 4; i++) {
  let cell = row.insertCell(i);
  cell.innerText += titleHeader[i];
  cell.style.border = "3px solid black";
  cell.style.textAlign = "center";
  cell.style.width = "180px";
  row.appendChild(cell);
}
table.appendChild(theader);
div1.appendChild(table);
let planets = [];
let url = "https://swapi.dev/api/planets/?page=1";

//GET DATA FROM URL
async function getPlanets(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    planets = data.results;
    //console.log(data.results);
    return data.results;
  } catch (error) {
    console.log("There is a delay. Please try again");
  }
}

//getPlanets(url)

function printPlanets(arrayplanets) {
  for (j = 0; j < arrayplanets.length; j++) {
    let newRow = tbody.insertRow(j);
    let newCell1 = newRow.insertCell(0);
    newCell1.innerText = arrayplanets[j].name;
    let newCell2 = newRow.insertCell(1);
    newCell2.innerText = arrayplanets[j].population;
    let newCell3 = newRow.insertCell(2);
    newCell3.innerText = arrayplanets[j].climate;
    let newCell4 = newRow.insertCell(3);
    newCell4.innerText = arrayplanets[j].gravity;
    for (k = 0; k < 4; k++) {
      newRow.children[k].style.border = "3px solid black";
      newRow.children[k].style.width = "180px";
    }
    tbody.appendChild(newRow);
  }
  table.appendChild(tbody);
  div1.appendChild(table);
}

/// buttons NEXT and PREVIUS
let div2 = document.getElementById("second");
let button2 = document.createElement("button");
button2.innerText = "NEXT 10";
button2.style.display = "none";
div2.appendChild(button2);
let button3 = document.createElement("button");
button3.innerText = "PREVIUS 10";
button3.style.display = "none";
div2.appendChild(button3);

//functions called inside eventlistener

let url2 = "https://swapi.dev/api/planets/?page=2";

button.addEventListener("click", function () {
  tbody.innerHTML = "";
  getPlanets(url).then(function () {
    printPlanets(planets);
  });
  button2.style.display = "inline";
  button3.style.display = "none"
  //button2 eventlistener
  
  
});

button2.addEventListener("click", function () {
  tbody.innerHTML = "";
  table.appendChild(tbody);
  getPlanets(url2).then(function () {
    printPlanets(planets);
  });
  button2.style.display = "none";
  button3.style.display = "inline";
});

button3.addEventListener("click", function () {
  tbody.innerHTML = "";
  table.appendChild(tbody);
  getPlanets(url).then(function () {
    printPlanets(planets);
  });
  button3.style.display = "none";
  button2.style.display = "inline";
});