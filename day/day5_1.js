export const day5_1 = new class {
    async log(){
        const data = await global.functions.loadData('./data/day5.txt', /\r?\n/);
        const vectors = data.map(obj => obj.split('->').map(obj => obj.split(',').map(obj => parseInt(obj))));
        const result = vectors
            .map(vector => this.generateVector(vector))
            .flat()
            .filter(Boolean)
            .reduce((acc, value) => {
                acc[value] = acc[value] + 1 || 1;
                return acc;
            }, {});
            // .forEach(coord => {
            //     matrix.set(coord, (matrix.get(coord) || 0) + 1);
            // });
        let count = 0;
        Object.keys(result).forEach(value => {
           count += result[value] > 1
        });
        console.log(count);
    }

    generateVector(vector){
        const xy1 = [...vector][0], xy2 = [...vector][1];
        const x1 = [...xy1][0], y1 = [...xy1][1], x2 = [...xy2][0], y2 = [...xy2][1];
        const xRange = math.range(x1, x2 + 1, x1 > x2 ? -1 : 1);
        const yRange = math.range(y1, y2 + 1, y1 > y2 ? -1 : 1);
        if(x1 == x2 || y1 == y2) {
            return xRange.map(x => yRange.map(y => `x${x}y${y}`))._data.flat();
        }
    }
}