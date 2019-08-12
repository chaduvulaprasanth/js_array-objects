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
console.log(penguins[0]);
var secondPenguin = penguins[1]
console.log(penguins[2].name);
var myPenguin = {
name : "Whiteblack",
origin : "Whiteblack the Penguin Sees the World",
author : "H.A.Rey and Margret Rey",
notes : "Children's book about a travelling penguin"
}
penguins.push(myPenguin);
console.log(penguins.length);
penguins[0].canFly = true;
penguins[0].sayHello()
for (var i=0; i<= penguins.length; i++) {
  console.log(penguins[i].name);
}
for (var i=0; i<=penguins.length; i++) {
  console.log(penguins[i].sayHello());
}
for (var i=0; i<= penguins.length; i++) {
  penguins[i].numberOfFeet = 2;
}
for (var i=0; i<=penguins.length; i++) {
  if(penguins[i].canFly===true) {
    console.log(`${penguins[i].name} can fly!`);
  }
}
