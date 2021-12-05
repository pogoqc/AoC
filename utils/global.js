window.global = {
    functions: {
        loadData: async (filename, split = /\r?\n/) => {
            let response = await fetch(filename);
            response = await response.text();
            return response
                .split(split)
                .filter(Boolean)
        },
        carriageReturnSplitter(obj){
            return obj.split(/\r?\n/);
        }
    }
}