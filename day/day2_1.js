export const day2_1 = new class {
    constructor() {
        this.position = {
            horizontal: 0,
            depth: 0,
        }
        this.mapping = {
            forward: (value) => {
                this.position.horizontal += this.getNumber(value);
            },
            down: (value) => {
                this.position.depth += this.getNumber(value);
            },
            up: (value) => {
                this.position.depth -= this.getNumber(value);
            },
        }

    }

    async log(){
        this.data = await global.functions.loadData('./data/day2.txt');
        this.data
            .forEach(value => day2_1.mapping[day2_1.getString(value)](value));
        console.log(`day2_1: ${day2_1.position.depth * day2_1.position.horizontal}`);
    }

    getNumber(string){
        return parseInt(string.split(' ')[1]) || 0;
    }

    getString(string){
        return string.split(' ')[0] || '';
    }
}