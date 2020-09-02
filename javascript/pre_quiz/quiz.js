class Foo {

    constructor(name) {
        this.name = name;
    }
    greet = function(){
        console.log(this.name);
    }
}

class Child extends Foo {

    constructor(name) {
        super(name)
        
    }
    cry = function(){
        console.log("boo hoo")
    }

}

console.log("==================================================================")
const joe = new Foo('joe');
const emmy = new Child('emmy');
console.log(emmy.__proto__.__proto__)
console.log("==================================================================")