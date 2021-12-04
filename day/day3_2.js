import {day3_1} from "./day3_1.js";

export const day3_2 = new class {
    async log(){
        const data = await global.functions.loadData('./data/day3.txt');
        const results = new Array(Math.max(...data.map(value => value.length))).fill(data);
        const oxygen_generator_ratings = results.reduce((acc, value, index) => {
            return this.oxygen_generator_rating(acc, index, data);
        }, [...results]);
        const CO2scrubber_ratings = results.reduce((acc, value, index) => {
            return this.CO2scrubber_rating(acc, index, data);
        }, [...results]);
        const oxygen_generator_rating = oxygen_generator_ratings.find(obj => obj.length == 1).find(Boolean);
        const CO2scrubber_rating = CO2scrubber_ratings.find(obj => obj.length == 1).find(Boolean);
        console.log(`day3_2: ${parseInt(CO2scrubber_rating, 2)  * parseInt(oxygen_generator_rating, 2)}`);
    }

    oxygen_generator_rating(acc, index, data) {
        return this.getRating(acc, index, data, this.filterByMostUsedBit);
    }

    CO2scrubber_rating(acc, index, data) {
        return this.getRating(acc, index, data, this.filterByNotMostUsedBit);
    }

    getRating(acc, index, data, filter) {
        const _accIndex = acc[index - 1] || [...data]; //get remaining numbers
        if(_accIndex.length){
            const translate = _accIndex
                .map(value => value.split(''))
                .reduce(day3_1.translate); //translate to get most used bit
            const mostCommonBit = day3_1.mostCommonBit(translate[index]);
            const filtered = _accIndex.filter(obj => filter(obj, index, mostCommonBit)); //determine the most common value (0 or 1) in the current bit position
            acc[index] = filtered;
        }
        else {
            acc[index] = [];
        }
        return acc;
    }

    filterByMostUsedBit(obj, index, mostCommonBit) {
        return obj.charAt(index) == mostCommonBit;
    }

    filterByNotMostUsedBit(obj, index, mostCommonBit) {
        return obj.charAt(index) != mostCommonBit;
    }
}