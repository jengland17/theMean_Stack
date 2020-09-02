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
        return this
    }
}


ninja1 = new Ninja("Naruto")
ninja1.sayName().showStats().drinkSake().showStats()