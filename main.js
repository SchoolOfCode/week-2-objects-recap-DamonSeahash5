const myHouse = {
    stories: 2,
    parking: null,
    bedrooms: 2,
    garden: true,
    energyEfficiencyRating: "D",
}

console.log(myHouse)

const myCar = {
    colour: "red",
    powersteering: true,
    seats: 2,
    mpg: 20,
}

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: 2008,
    leadActor: "Christian Bale",
    }


    let person = {
        name: "Ben",
        likesChocolate: false,
      };

console.log(`Does ${person.name} like chocolate? ${person.likesChocolate}`)
console.log(Object.keys(person)) 

if (person.likesChocolate === true) {console.log("Ben loves chocolate")} else {console.log("Ben hates chocolate")}

// Task 3
let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases['smallTalk']);

bensPhrases['smallTalk'] = 'aup'

console.log(bensPhrases['smallTalk'])