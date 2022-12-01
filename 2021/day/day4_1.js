export const day4_1 = new class {
    async log(){
        const data = await global.functions.loadData('./data/day4.txt', /\r?\n\r?\n/);
        const drawNumbers = data.shift().split(',');
        const bingoCards = data.map(card => card.split(/\r?\n/).map(row => row.split(' ').filter(Boolean)).filter(row => row.length));
        const result = drawNumbers.reduce((acc, value) => {
            acc.numbers.push(value);
            const bingo = bingoCards.filter(card => this.isCardWinning(card, acc.numbers));
            if(bingo.length && !acc.bingo.card.length){
                acc.bingo = {
                    card: bingo.find(Boolean),
                    numbers: [...acc.numbers],
                };
            }
            return acc;
        }, {
            numbers: [],
            bingo: {
                card: [],
                numbers: []
            }
        });
        const remainingNumbers = result.bingo.card
            .flat()
            .filter(number => !result.bingo.numbers.includes(number))
            .map(Number);

        console.log(`day4_1: ${remainingNumbers.reduce((acc, value) => acc + value) * [...result.bingo.numbers].pop()}`);
    }

    isCardWinning(card, numbers){
        return card.some(row => row.every(number => numbers.includes(number))) || math.transpose(card).some(row => row.every(number => numbers.includes(number)));
    }
}