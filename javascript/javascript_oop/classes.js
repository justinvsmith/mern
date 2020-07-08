// Create a new parent class called Vehicle

class Vehicle {
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it/`);
    }

    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }

}


//Example of inheritance by creating a child class called M5, setting a new method for specs
class M5 extends Vehicle {
    constructor(color){
        super("BMW", "M5", color);
        this.hp = 616;
    }

    //simple function in the child class
    childFunction(){
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
    printSpecSummary () {
        console.log(
            `BMW M5 with a 4.4L v8 Twin Turbo engine packing ${this.hp}HP and 553 lb-ft TQ`
        );
    }
}

const m5 = new M5("Blue");
m5.childFunction();