/**
 * Created by Abraham on 6/12/2016.
 */

// print all number between -10 and 19
var negative = -10;

while (negative < 19) {

  console.log(negative);
  negative++;
}

// print all even numbers between 10 and 40
var evenNum = 10;

while (evenNum <= 40) {
  if (evenNum % 2 === 0) {
    console.log(evenNum);


  }

  evenNum++;
}

// print all odd number between 300 and 333
var oddNum = 300;

while (oddNum < 333) {
  if (oddNum % 3 === 0) {
    console.log(oddNum);

  }
  oddNum++;
}

// print all number divisible  5 and 3 between 5 and 50

var divisible = 5;

while (divisible < 50) {
  if (divisible % 5 === 0) {
    console.log(divisible);
  }
  if (divisible % 5 === 0) {
    console.log(divisible);
  }
  divisible++;
}



// add all the numbers in the array
function addSump(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// max item the array can store

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[1] > max) {
      max = arr[i];
    }

  }

  return max;
}


var someObject = {
     friends :  [
       {name: "Malfoy"},
       {name:"Grabble"},
       {name:"Goyle"}
     ],

     color: "Baby Blue",
     isEvil: true    
};

 console.log (someObject.friends[0].name);
 console.log (someObject.friends[1].name);
 console.log (someObject.friends[2].name);
 console.log (someObject.isEvil);

var movieDb = [
  {
    title: "In Burges",
    rating:5,
    hasWatched:true,
  },

  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false,
  },

  {
    title:"Mad Max Fury",
    rating:5,
    hasWatched:true,
  },

  {
    title: "Lee Miserables",
    rating: 3.5,
    hasWatched:false,
  }
  
]






console.log ("You have seen " + movieDb[0].title + ", " + movieDb[0].rating + " start rating ");
console.log ("You have not seen " + movieDb[1].title + ", " + movieDb[1].rating + " start rating ");
console.log ("You have seen " + movieDb[2].title + ", " + movieDb[2].rating + " start rating ");
console.log ("You have not seen " + movieDb[3].title + ", " + movieDb[3].rating + " start rating ");