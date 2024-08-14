const zrnf = {
    random(input, length) {
        const strInput = input ? input.toString() : null;

        if (!strInput || strInput.length === 0) {
            console.log("Oops! It looks like you didn’t provide any input. Please give me something to work with.");
            return;
        }

        if (length !== undefined && (typeof length !== "number" || length < 0)) {
            console.log("Hmm, it seems like the length you provided isn’t quite right. Please enter a positive number.");
            return;
        }

        const finalLength = length === undefined || length === 0 ? strInput.length : length;

        if (finalLength < 1) {
            console.log("Whoops! I need a length of at least 1. Please provide a valid length.");
            return;
        }

        if (finalLength > strInput.length) {
            console.log(`Heads up! The length you requested (${finalLength}) is greater than the input length (${strInput.length}). I’ll just use the input length instead.`);
        }

        let generated = "";
        const _length = strInput.length;
        for (let i = 0; i < Math.min(finalLength, _length); i++) {
            let index = Math.floor(Math.random() * _length);
            generated += strInput[index];
        }

        return generated;
    }
};

module.exports = zrnf;
