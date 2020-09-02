var tigger = {character: "Tigger"};
var pooh = {character: "Winnie the Pooh"};
var bees = {character: "Bees"};
var piglet = {character: "Piglet"};
var owl = {character: "Owl"};
var chris = {character: "Christopher Robin"};
var gopher = {character: "Gopher"};
var rabbit = {character: "Rabbit"};
var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var heffal = {character: "Heffalumps"};

tigger.north = pooh;
pooh.south = tigger;


// points to Winnie the Pooh
piglet.east = tigger.north; 

//Points to Piglet
tigger.north.west = piglet ;

//points to the Bees
tigger.north.east = bees;

//points back to Winne the Pooh
bees.west = tigger.north;

//points to owl
piglet.north = owl;

//points back to piglet
owl.south = tigger.north.west

//points to chris from owl
piglet.north.east = chris

//points back to owl
chris.west = piglet.north 

//points to chris from pooh
tigger.north








