import {day1_1} from "./day1_1.js";

export const day1_2 = new class {
    async log(){
        this.data = await global.functions.loadData('./data/day1.txt');
        this.result = this.data
            .map(element => parseInt(element))
            .map(this.mapper)
            .reduce(day1_1.reducer, 0);
        console.log(`day1_2: ${this.result}`);
    }

    mapper(element, index, array){
        return array[index] + array[index + 1] + array[index + 2]
    }
}