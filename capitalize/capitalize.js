function capitalize(str){
    let str1 = str[0].toUpperCase()
    let str2 = str.slice(1, str.length)
    return  str1.concat(str2);
}
module.exports = capitalize;