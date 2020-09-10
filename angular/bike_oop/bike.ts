class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo() {
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Miles: " + this.miles);
    }

    ride() {
        console.log("Riding...");
        this.miles += 10;
        return this;
    }

    reverse() {
        console.log("Take it back now...");
        if (this.miles <= 5) {
            console.log("Need more miles");
            this.miles = 0;
            return this;
        } else {
            this.miles -= 5;
            return this;
        }
}

}

let bike1 = new Bike(200, "30mph");
let bike2 = new Bike(4000, "50mph");
let bike3 = new Bike(1000, "10mph");

bike1.ride().ride().reverse();
bike1.displayInfo();
console.log('==================================')
bike2.ride().ride().ride()
bike2.displayInfo();
console.log('==================================')
bike3.reverse()
bike3.displayInfo();