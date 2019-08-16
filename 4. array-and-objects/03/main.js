var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};
var penguins = [gunter, ramon, fred]
var outfitproperties = {
	hat:"baseball cap",
	shirt:"Hawaiian shirt",
	pants:"cargo shorts",
	shoes:"flip-flops"
}
for (let key in penguins) {
penguins[key].outfit = outfitproperties;
var penguinHatType = penguins[key].outfit.hat;
penguins[key].outfit.accessory = "pocket watch";
penguins[key].outfit.hat = "top hat";
console.log(penguins[key].outfit);
}
