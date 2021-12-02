window.global = {
    functions: {
        loadData: async (filename) => {
            const response = await fetch(filename);
            return await response.text();
        }
    }
}