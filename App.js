const collection = [2, 67, 5, 18, 33];

// Multiply each element by 2 and log it
const doubledCollection = collection.map(element => element * 2);
console.log("Doubled Collection:", doubledCollection);

//root element exists
const root = document.getElementById("root");

// Heading
const heading = document.createElement("h1");
heading.innerText = "My Favourite Movies";
root.appendChild(heading);

// Favorite movies 
const favMovies = ["Superman", "Spiderverse", "Bourne Collection"];
favMovies.forEach(movie => {
    const p = document.createElement("p");
    p.innerText = movie;
    root.appendChild(p);
});

// Check if numbers are bigger than 5...
collection.map(element => {
    if (element > 5) {
        console.log(`${element} is bigger than 5`);
    } else {
        console.log(`${element} is not bigger than 5`);
    }
});



// Use map to create a new array of t/f
const checkResults = collection.map(number => number > 5);

// Display results
checkResults.map((result, index) => {
    const p = document.createElement("p");
    root.appendChild(p);
});


// // Display results
// checkResults.filter((result, index) => {
//     const p = document.createElement("p");
//     p.innerText = ` ${collection}`;
//     root.appendChild(p);
// });
 


const biggerThanFive = collection.filter(function (currentValue) {
  return currentValue > 5;
});

biggerThanFive.forEach(biggerThanFive => { 
    root.append(biggerThanFive); 
    root.append(document.createElement('br')) })


