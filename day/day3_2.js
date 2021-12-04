import {day3_1} from "./day3_1.js";

export const day3_2 = new class {
    async log(){
        const data = await global.functions.loadData('./data/day3_2.txt');
        const results = new Array(Math.max(...data.map(value => value.length))).fill(data);
        const result = results.reduce((acc, value, index) => {
            return this.oxygen_generator_rating(acc, index, data);
        }, [...results]);
        console.log(`day3_2: `);
    }

    oxygen_generator_rating(acc, index, data) {
        const _accIndex = acc[index - 1] || [...data]; //get remaining numbers
        const translate = _accIndex
            .map(value => value.split(''))
            .reduce(day3_1.translate); //translate to get most used bit
        const mostCommonBit = day3_1.mostCommonBit(translate[index]);
        const filtered = _accIndex.filter(obj => obj.charAt(index) == mostCommonBit); //determine the most common value (0 or 1) in the current bit position
        acc[index] = filtered;
        return acc;
    }

    CO2scrubber_rating(acc, index, data) {
        const _accIndex = acc[index - 1] || [...data]; //get remaining numbers
        const translate = _accIndex
            .map(value => value.split(''))
            .reduce(day3_1.translate); //translate to get most used bit
        const mostCommonBit = day3_1.mostCommonBit(translate[index]);
        const filtered = _accIndex.filter(obj => obj.charAt(index) == mostCommonBit); //determine the most common value (0 or 1) in the current bit position
        acc[index] = filtered;
        return acc;
    }

    filterByBitCriteria(data, bitCriteria, index){
        return data
            .filter(value => value.charAt(index) == bitCriteria);
    }
}

/*
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
*/