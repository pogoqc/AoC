export const day1_1 = new class {
    async log(){
        this.data = await global.functions.loadData('./data/day1.txt');
        this.result = this.data.split('\n').reduce(this.reducer, 1);
        console.log(`day1_1: ${this.result}`);
    }

    reducer(previousValue, currentValue, currentIndex, array) {
        return previousValue + (currentValue > array[currentIndex - 1]);
    }
}