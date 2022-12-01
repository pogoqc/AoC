export const day3_1 = new class {
    async log(){
        const data = await global.functions.loadData('./data/day3.txt');
        const result = this.gammaRate(data);
        const resultBaseTen = parseInt(result, 2);
        console.log(`day3_1: ${resultBaseTen * parseInt(this.xor(result), 2)}`)
    }

    gammaRate(data){
        return data
            .map(value => value.split(''))
            .reduce(this.translate)
            .map(this.mostCommonBit)
            .map(Number)
            .join('');
    }

    translate(acc, value){
        return value.map((item, i) => (acc[i] || []).concat(value[i]), [])
    }

    mostCommonBit(value){
        return value.split('1').length >= value.split('0').length
    }

    xor(binaryValue){
        const maxBase16 = new Array(binaryValue.length+1).join('1');
        return (parseInt(binaryValue, 2) ^ parseInt(maxBase16,2)).toString(2);
    }
}