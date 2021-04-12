//Ceci est la liste de départ:
var townList = ['Londres', 'Paris', 'Madrid', 'Pekin'];

//Je fais une fonction pour ajouter des éléments nouveaux à ma liste
function addTown(){
//  Je récupère la valeur de mon imput (où il y aura les ajouts d'élements)
  var input = document.getElementById('input').value;
  //"unshift" permet d'ajouter les nouveaux éléments à la liste de départ et
  //de mettre l'élément nouveau en début de liste"
  townList.unshift(input);
  //une alerte affiche les élements nouveaux
    alert(input);
}
function displayArray(){
  //cette alerte affiche les éléments nouveaux ajoutés à la liste de départ
  alert(townList);
}




/*
var newTown = document.getElementById("imput").value;
var addTown = capitales.unshift("newTown");document.getElementById("imput").innerHTML = capitales;
function displayNewTown(){
  alert("addTown");
}
*



let arr = [4, 5, 6]

capitales.unshift()
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]


function displayNewTown(){
  var newTown = document.getElementById("imput").value;
  var addTown = capitales.unshift("newTown");
  document.getElementById("imput").innerHTML = capitales;

  alert("addTown");
}
/*


const array = ["Londres", "Paris", "Madrid", "Pekin", "Washington", "Dakar", "Lima"];

function displayArray(){
alert(["Londres", "Paris", "Madrid", "Pekin", "Washington", "Dakar", "Lima"]);
}


function displayNewTown(){
var newTown = document.getElementById("imput").value;
console.log(array.unshift(newTown))
var result = array.unshift(newTown);
alert(result);
}

/*
const array1 = ["Londres", "Paris", "Madrid", "Pekin", "Washington", "Dakar", "Lima"];
function displayArray1(){
  alert(["Londres", "Paris", "Madrid", "Pekin", "Washington", "Dakar", "Lima"]);
}

function displayNewTown(){
  var newTown = document.getElementById("imput").value;
  var addTown = capitales.unshift("newTown");
  document.getElementById("imput").innerHTML = capitales;

  alert("addTown");
}
/*

//function myFunction() {
//  fruits.unshift("Lemon", "Pineapple");
//  document.getElementById("demo").innerHTML = fruits;
}

//var arr = [4, 5, 6];

//arr.unshift(1, 2, 3);
//console.table(arr);
// [1, 2, 3, 4, 5, 6]
*/
