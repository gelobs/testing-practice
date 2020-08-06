const reverseString = str => {
    const strSplitted = str.split("");
    const strReversed = strSplitted.reverse();
    const strJoined = strReversed.join(""); 
    return strJoined;
}
module.exports = reverseString;