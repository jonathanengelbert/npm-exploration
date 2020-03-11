module.exports = {
    jon: (input) => {
        if (typeof input !== "string") {
            throw new TypeError('Jon wants a string godammit!');
        }
        return `Jon says ${input}`;
    },
    mary: 'Mary',
    yo: () => 'Yo Brooo',
    add: (a, b) => a + b,
};

