const collection = [2, 67, 5, 18, 33];

// Multiply each element by 2 and log it
const doubledCollection = collection.map(element => element * 2);
console.log("Doubled Collection:", doubledCollection);

// root element
const root = document.getElementById("root");

// Heading for fav movies
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

// // Display results
// checkResults.map((result, index) => {
//     const p = document.createElement("p");
//     p.innerText = `${result}`;
//     root.appendChild(p);
// });

// Heading for numbers bigger than five...
const headBigFive = document.createElement("h1");
headBigFive.innerText = `Elements Bigger than 5`;
root.appendChild(headBigFive);

// Filter elements > 5
const biggerThanFive = collection.filter(num => num > 5);

// Breaking each element
biggerThanFive.forEach(num => { 
    root.append(num); 
    root.append(document.createElement('br')); 
});

// Trainees
const trainee = [
    { Mpumi : 18 },
    { Siya : 31 },
    { Sabelo : 25 },
    { Msizi : 16 },
    { Melo : 13 },
    { Sine : 42 }
];

// Heading for voters
const votersHeading = document.createElement("h1");
votersHeading.innerText = `Who can Vote:`;
root.appendChild(votersHeading);

// Filtered age.. >= 18
const olderThan18 = trainee.filter(person => {
  const age = Object.values(person)[0];
  return age >= 18;
});

// Who can vote??
olderThan18.forEach(person => { 
    const name = Object.keys(person)[0]; 
    const age = person[name];
    const p = document.createElement("p");
    p.innerText = `${name} (${age}) ✅`;
    root.appendChild(p);
});
