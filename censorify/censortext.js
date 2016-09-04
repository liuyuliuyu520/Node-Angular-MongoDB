var censoredWords = ["sad", "bad", "mad" ];
var customerCensoredWords = [];

function censor(inStr) {
    for (indx in censoredWords) {
        inStr = inStr.replace(censoredWords[indx], "******");
    }
    for (indx in customerCensoredWords) {
        inStr = inStr.replace(customerCensoredWords[indx], "%%%%");
    }
    return inStr;
}

function addCensorWord(word) {
    customerCensoredWords.push(word);
}

function getCensorWords() {
    return censoredWords.concat(customerCensoredWords);
}

exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensorWords = getCensorWords;