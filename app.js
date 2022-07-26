// make lowercase, then split into individual letters
// in array sort in Alphabetical order.  Then compare
// for a match.
function isIsogram(str) {
    let myStr = str.toLowerCase();
    let myArr = myStr.split("").sort();
    for (let i = 0; i < str.length; i++) {
        if (myArr[i] == myArr[i + 1]) {
            return false;
        }
    }
    return true;
}


console.log(isIsogram("Dermatoglyphics")); // True
console.log(isIsogram("isogram")); // True
console.log(isIsogram("aba")); // False
console.log(isIsogram("moOse")); // False