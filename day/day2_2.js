export const day2_2 = new class {
    constructor() {
        this.position = {
            horizontal: 0,
            depth: 0,
            aim: 0,
        }
        this.mapping = {
            forward: (value) => {
                value = this.getNumber(value);
                this.position.horizontal += value;
                this.position.depth += this.position.aim * value;
            },
            down: (value) => {
                this.position.aim += this.getNumber(value);
            },
            up: (value) => {
                this.position.aim -= this.getNumber(value);
            },
        }
    }

    async log(){
        this.data = await global.functions.loadData('./data/day2.txt');
        this.data
            .forEach(value => day2_2.mapping[day2_2.getString(value)](value));
        console.log(`day2_2: ${day2_2.position.depth * day2_2.position.horizontal}`);
    }

    getNumber(string){
        return parseInt(string.split(' ')[1]) || 0;
    }

    getString(string){
        return string.split(' ')[0] || '';
    }
}