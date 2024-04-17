/**
 * Inheritance♻
 */

// Parent class
class Laptop {
    constructor(ram, processor, generation) {
        this.ram= ram;
        this.processor= processor;
        this.generation= generation;
    }
}

// Child class - sub class
class hp extends Laptop {
    constructor(ram, processor, generation) {
        super(ram, processor, generation);
        this.modelName= "hp";
        this.price= "45k";
    }
    displayMssg() {
        console.log(`Laptop Sepcification: RAM-${this.ram} Processor-${this.processor} Generation-${this.generation} Model Name-${this.modelName} Pric-${this.price}`);
    }
}

const hp1 = new hp(8, "intel", "i5");
console.log(hp1.displayMssg());