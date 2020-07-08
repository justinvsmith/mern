class Ninja {
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`This ninja's name is ${this.name}.`);
    }

    showStats() {
        console.log(`Name: ${this.name}. Strength: ${this.strength}. Speed: ${this.speed}. Health: ${this.health}.`);
    }

    drinkSake() {
        this.health += 10;
    }
}

// const ninja1 = new Ninja("Justin");
// ninja1.sayName();
// ninja1.showStats();

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("A-B-C, easy as 1,2,3. A-B-C, simple as Do-Re-Mi. That's how easy love can be.");
    }

    
}

const superSensei = new Sensei("Johnny");
superSensei.speakWisdom();
superSensei.showStats();