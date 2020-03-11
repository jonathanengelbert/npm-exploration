module.exports = function jon(input){
    if (typeof input !== "string") {
        throw new TypeError('Jon wants a string!');
    }
    const output = `Jon says ${input}`;
    console.log(output);

    return output;
};

