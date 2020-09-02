// Use ES6 classes to create the ninjas
// Ninja class should have sayName(), showStats(), and drinkSake() as methods 
// Default stats should be health: 100, strength: 3, speed: 3

class Ninja {

    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My ninja name is, ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank some sake and gained 10 health`)
        return this
    }

}

// Part 2 create a second class called the sensei class
// Sensei should have an a new attribute speakWisdom()
// Sensei should have default stats of health: 200, strength: 10, speed: 10

class Sensei extends Ninja {

    constructor(name) {

        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }

    speakWisdom() {

        super.drinkSake();
        console.log("Code is like humor. When you explain it, it's bad")

    }

}

ninja1 = new Ninja("Naruto")
ninja2 = new Ninja("Sasuke")

console.log("============================================================")
ninja1.showStats()
ninja2.showStats()
console.log("============================================================")

supersensei = new Sensei("Master Jiraiya")

console.log("============================================================")
supersensei.speakWisdom()
supersensei.showStats()
console.log("============================================================")
