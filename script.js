/**
 * Array
 */ 0;
const array = ["Eric", 26, true, ["Mike", "Jayson"]]; // nested arrays

/**
 * Creearea unui obiect
 */
const person = {
  name: "Eric",
  age: 26,
  isDeveloper: true,
  friends: [
    // { name: "Mike", age: 29 },
    // { name: "Jayson", age: 32 }
    "Mike",
    "Jayson"
  ]
};

console.log("Object:", person);
console.log("Din array:", array[0]);
console.log("Din obiect:", person.name);

const test = "My string";
const firstName = "Eric";
const lastName = "Puskas";

const obj = {
  firstName,
  lastName: lastName,
  age: 26
};

console.log(obj);

/**
 * Cum accesam valori dintr-un obiect
 */
console.log("Metoda 1:", person.name);

const personNameKey = "name";
console.log("Metoda 2:", person[personNameKey]);

/**
 * const person = {
  name: "Eric",
  age: 26,
  isDeveloper: true,
  friends: [ "Mike", "Jayson" ]
};
 */
for (let property in person) {
  console.log(`Property: ${property} - ${person[property]}`);
}

const myArray = [4, 5, 6];

const objArray = {
  0: 4,
  1: 5,
  2: 6
};

for (let i in myArray) {
  console.log("for let in:", i);
}

for (let i of myArray) {
  console.log("for let of:", i);
}

const human = person;

/**
 * Typeof object
 */
console.log(typeof {});
console.log(typeof []);
console.log({} === []);
console.log(human === person);

human.age = 40;
console.log({ person, human });

/**
 * Shallow copy
 */
const a = { age: 14, prop2: { name: "John" } };
console.log("Stringified:", JSON.stringify(a));

/**
 * Deep copy
 */
// const b = JSON.parse(JSON.stringify(a));

/**
 * Shallow copy
 */
const b = Object.assign({}, a, person);

console.log({ a, b });

// b.age = 32;
b.prop2.name = "Mary";

console.log({ a, b });

const personKeys = Object.keys(person);

for (let property in myArray) {
  console.log(`My ARRAY: Property: ${property} - ${myArray[property]}`);
}

for (let key of personKeys) {
  console.log("Keyy:", key);
}

console.log(Object.values(person));
console.log(Object.entries(person));

for (let entry of Object.entries(person)) {
  const key = entry[0];
  const value = entry[1];
  console.log("Entry1:", { entry, key, value });
}

for (let [key, value] of Object.entries(person)) {
  console.log("Entry2:", { key, value });
}

/**
 * Stergerea unei proprietati dintr-un obiect
 */
const combinedObj = { ...a, ...b };
console.log("combinedObj:", combinedObj);

delete combinedObj.age;
console.log("combinedObj 2:", combinedObj);

const c = undefined;
const d = null;

/**
 * Operator ?.
 */
const variabila = undefined;
console.log(variabila?.name);

/**
 * Nullish operator ??
 */
console.log(variabila?.name ?? "Valoare implicita (default)");

/**
 * || -> Checks for falsy value (ORI sau OR)
 */
console.log(variabila?.name || "Valoare implicita (default)");

/**
 * Falsy -> 0, "", null, undefined, false
 * Truthy -> 1, true
 */

/**
 * Ternary operator
 */
const temp = variabila?.name ? variabila.name : "Val. implicita";

/**
 * Se traducere
 */
// if(variabila && variabila.name){
//   return variabila.name;
// } else {
//   return "Val. implicita";
// }

const isDivisibleBy10 = (number) => number % 10 === 0;

console.log("TEMP:", temp);

/**
 * Destructuring objects
 */
const { name, age, ...rest } = person;

console.log("Test:", name, age, rest);

// props
// const { menuItems } = props;
/**
 * <HeaderMenu menuItems={menuItems} />
 */

/**
 * Initializam score board-ul
 */
const highScoreBoard = {};

/**
 * 1. Create a new high score board
 */
const createScoreBoard = () => {
  //  "The Best Ever": 1000000

  // hardcoded -> scriem efectiv valori
  highScoreBoard["The Best Ever"] = 1000000;

  //  const name = "The Best Ever";
  //  highScoreBoard[name]

  console.log({ highScoreBoard });

  return highScoreBoard;
};

createScoreBoard();

/**
 * 2. Add players to a score board
 */
const addPlayer = (scoreBoard, playerName, score) => {
  scoreBoard[playerName] = score;
  console.log({ scoreBoard });
  return scoreBoard;
};

addPlayer(highScoreBoard, "Jose Valim", 6959);
addPlayer(highScoreBoard, "John Doe", 1);
addPlayer(highScoreBoard, "Mary Doe", 2);
addPlayer(highScoreBoard, "Dave Thomas", 1);

/**
 * 3. Remove players from a score board
 */
const removePlayer = (scoreBoard, playerName) => {
  delete scoreBoard[playerName];

  console.log({ scoreBoard });

  return scoreBoard;
};

removePlayer(highScoreBoard, "John Doe");
removePlayer(highScoreBoard, "Michael Jackson");

/**
 * 4. Increase a player's score
 * {
 *      playerName(property/key)        score(value)
 *    "The Best Player": 5
 *  }
 */
const updateScore = (scoreBoard, playerName, newScore) => {
  const oldScore = scoreBoard[playerName]; // score
  const updatedScore = oldScore + newScore;

  scoreBoard[playerName] = updatedScore;

  console.log({ scoreBoard });

  return scoreBoard;
};

updateScore(highScoreBoard, "Dave Thomas", 69);

/**
 * 5. Apply Monday bonus points
 */
const applyMondayBonus = (scoreBoard) => {
  for (let playerName in scoreBoard) {
    console.log(`playerName: ${playerName} - ${scoreBoard[playerName]}`);

    updateScore(scoreBoard, playerName, 100);
  }
};

applyMondayBonus(highScoreBoard);
console.log({ highScoreBoard });

/**
 * Normalizes the score
 */
const normalizeFunction = (score) => {
  return 2 * score + 10;
};

/**
 * 6. Normalize a high score
 */
const normalizeScore = (params) => {
  const { score, normalizeFunction } = params;

  return normalizeFunction(score);
};

const result = normalizeScore({ score: 400, normalizeFunction });
console.log("RESULT:", result);

/**
 * 7. Scrieți o funcție care creează un obiect pentru a păstra informații despre filmul tau preferat
 */
const myFavoriteMovie = (title, genre, actors) => {
  const movie = {
    title,
    genre,
    actors
  };

  console.log("Titlu:", movie.title);
  console.log("Genre:", movie.genre);
  console.log("Actors:", movie["actors"]);
  console.log({ movie });

  return movie;
};

myFavoriteMovie("Interstellar", "Sci-Fi", ["Matthew", "Brian"]);

const books = [
  { title: "Ceva titlu 1", author: "Ceva nume 1", esteCitita: false },
  { title: "Ceva titlu 2", author: "Ceva nume 2", esteCitita: false },
  { title: "Ceva titlu 3", author: "Ceva nume 3", esteCitita: false },
  { title: "Ceva titlu 4", author: "Ceva nume 4", esteCitita: true }
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  if (book.esteCitita) {
    console.log("ESTE CITITA", { book });
  } else {
    console.log("NU ESTE", { book });
  }
}
