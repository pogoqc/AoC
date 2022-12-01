import {day3_1} from "./day3_1.js";
import {day4_1} from "./day4_1.js";

export const day4_2 = new class {
    async log(){
        const data = await global.functions.loadData('./data/day4.txt', /\r?\n\r?\n/);
        const drawNumbers = data.shift().split(',');
        const bingoCards = data.map(card => card.split(/\r?\n/).map(row => row.split(' ').filter(Boolean)).filter(row => row.length));
        const result = drawNumbers.reduce((acc, value) => {
            acc.numbers.push(value);
            acc.cards = acc.cards.filter(card => !day4_1.isCardWinning(card, acc.numbers));
            if(acc.cards.length == 1 && !acc.bingo.card.length){
                acc.bingo.card = acc.cards.find(Boolean);
            }
            if(acc.cards.length == 0 && !acc.bingo.numbers.length){
                acc.bingo.numbers = [...acc.numbers];
            }
            return acc;
        }, {
            numbers: [],
            cards: bingoCards,
            bingo: {
                card: [],
                numbers: []
            }
        });
        const remainingNumbers = [...result.bingo.card]
            .flat()
            .filter(number => !result.bingo.numbers.includes(number))
            .map(Number);

        console.log(`day4_2: ${remainingNumbers.reduce((acc, value) => acc + value) * [...result.bingo.numbers].pop()}`);
    }
}