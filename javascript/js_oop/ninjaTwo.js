function Ninja(name, health = 100) {

    this.name = name;
    this.health = health;

    var speed = 3;
    var strength = 3;


    this.sayName = function () {
        console.log(`My ninja name is, ${this.name}`);
        return this
    }

    this.showStats = function () {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
        return this
    }

    this.drinkSake = function () {
        this.health += 10;
        console.log(`${this.name} drank some sake and gained 10 health`)
        return this
    }

    this.punch = function (target) {
        if (!(target instanceof Ninja )) {
            console.log(`${this.name} did not punch anything`);
        }
        else {
            target.health = target.health - 5;
            console.log(`${target.name} was punched by ${this.name} and lost 5 health`)
        }
    }

    this.kick = function (target) {
        if (!(target instanceof Ninja )) {
            console.log(`${this.name} did not kick anything`);
        }
        else {
            target.health = target.health - 15;
            console.log(`${target.name} was kicked by ${this.name} and lost 15 health`) 
        }
    }

}


ninja1 = new Ninja("Naruto")

ninja2 = new Ninja("Sasuke")

var ninja3

console.log("==============================================================")

ninja1.punch(ninja2)
ninja2.showStats()

console.log("==============================================================")

ninja2.punch(ninja3)