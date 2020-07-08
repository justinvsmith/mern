class Card {
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card {
    constructor (name, cost, power, res){
        super(name, cost),
        this.power = power;
        this.res = res;
    }

    attack(target){
        //reduce target res by power
        target.res -= this.power;
        console.log(`${this.name} was played, it cost ${target.name} ${this.power} power points`);
    }

    showStats(){
        console.log(`name: ${this.name}, cost: ${this.cost}, power: ${this.power}, resilience: ${this.res}`);
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude){
        super(name, cost),
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    hardAlgorithm(target){
        target.res += this.magnitude;
        console.log(`Hard Algorithm has been played, it adds 3 points to ${target.name}'s resilience`);

    }

    unhandledPromiseRejection(target){
        target.res += this.magnitude;
        console.log(`Unhandled Promise Rejection has been played, it takes 2 points from ${target.name}'s resilience. `);
    }

    pairProgramming(target){
        target.power += this.magnitude;
        console.log(`Pair Programming has been played, it adds 2 points to ${target.name}'s power.`);
    }
}

const redNinja = new Unit("red belt ninja", 3, 3, 4);
const blackNinja = new Unit("black belt ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm",2, "increase target's resilience by 3", "resilience", +3);
const unhandledRejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming",3,"increase target's power by 2", "power", 2);


hardAlgorithm.hardAlgorithm(redNinja);
unhandledRejection.unhandledPromiseRejection(redNinja);
pairProgramming.pairProgramming(redNinja);
redNinja.attack(blackNinja);

redNinja.showStats();
blackNinja.showStats();