const string = 'Hello ban, tui ten Teo, ban cung ten Teo luon a';
let words = string.replace(/,/gi, "").split(" ");
console.log(words);
const result = countWords(words);
console.log(result);

function countWords(words) {
    const word_object = {};
    for (let i = 0; i < words.length; i++) {
        if (!word_object[words[i]]) {
            word_object[words[i]]=1;
        } else {
            word_object[words[i]] = word_object[words[i]] + 1;
        }
    }
    return word_object;
};

