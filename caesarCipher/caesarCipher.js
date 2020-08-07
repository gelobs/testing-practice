const caesarEncrypt = (message, shiftKey) => {
    if (shiftKey < 0) throw new Error('Given negative cipher.');
    let splittedMessage = message.split('');
    for (let i = 0; i < splittedMessage.length; i++) {
        if (splittedMessage[i].charCodeAt() >= 97 && splittedMessage[i].charCodeAt() <= 122) {
            let letterCode = (splittedMessage[i].charCodeAt() - 97 + shiftKey) % 26 + 97;
            splittedMessage[i] = String.fromCharCode(letterCode);
        } else if (splittedMessage[i].charCodeAt() >= 65 && splittedMessage[i].charCodeAt() <= 90) {
            let letterCode = (splittedMessage[i].charCodeAt() - 65 + shiftKey) % 26 + 65;
            splittedMessage[i] = String.fromCharCode(letterCode);
        } 
    }
    return splittedMessage.join('');
}
module.exports = caesarEncrypt;