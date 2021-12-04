export const day1_1 = new class {
    async log(){
        this.data = await global.functions.loadData('./data/day1.txt');
        this.result = this.data
            .map(element => parseInt(element))
            .reduce(this.reducer, 0);
        console.log(`day1_1: ${this.result}`);
    }

    reducer(acc, value, currentIndex, array) {
        return acc + (value > array[currentIndex - 1]);
    }
}