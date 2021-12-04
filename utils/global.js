window.global = {
    functions: {
        loadData: async (filename) => {
            let response = await fetch(filename);
            response = await response.text();
            return response
                .split('\n')
                .filter(Boolean)
        },
    }
}