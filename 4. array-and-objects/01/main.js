var myPenguin = {
name : "Whiteblack",
origin : "Whiteblack the Penguin Sees the World",
author : "H.A.Rey and Margret Rey",
notes : "Children's book about a travelling penguin"
}
myPenguin.favoriteFoods = ["fish", "insects", "noch"]
console.log(myPenguin.favoriteFoods[1]);
myPenguin.firstFavFood = myPenguin.favoriteFoods[0]
myPenguin.favoriteFoods.push("smallfish");
console.log(myPenguin.favoriteFoods.length);
myPenguin.favoriteFoods[4] = "pineapples";
var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1]
for (var i =0; i<=myPenguin.favoriteFoods.length; i++) {
	console.log(myPenguin.favoriteFoods[i])
}