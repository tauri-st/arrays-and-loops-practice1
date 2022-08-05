var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//Instructions: Log out to the console each element of the stuff array with even-numbered indexes.
stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(item);
  }
});