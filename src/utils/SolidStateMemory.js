
let instance = null;

export class SolidStateMemory {

    constructor(){
        if(!instance) {
            instance = this;
        }

        return instance;
    }

    getChoices() {
        return this.choicesMemory;
    }

    pushChoice(choice) {
        this.choicesMemory.push(choice);
    }

    clearChoices() {
        this.choicesMemory = [];
    }

}