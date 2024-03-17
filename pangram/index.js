import PANGRAM from "./src/consts/index.js";
import { isPangram } from "./src/pangram.js";

const main = () => {
    const result = [];
    PANGRAM.forEach(({ sentence }) => {
        result.isPanagram = isPangram(sentence);
        
        result.push({
            isPanagram: result.isPanagram,
            sentence,
        });
    });

    console.log('RESULT', result, result.length);
}

main();