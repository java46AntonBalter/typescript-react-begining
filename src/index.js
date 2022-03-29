/*****************************************HW #32 ***********/
function intersection(set1, set2) {
    //TODO write function returning array of common numbers between two sets
    //that is the numbers existing in both sets
    const ar1 = Array.from(set1);
    const ar2 = Array.from(set2);
    let ar3 = [];
    ar1.forEach(n => {
        if (ar2.indexOf(n) !== -1) {
            ar3.push(n);
        }
    });
    return ar3;
}
const set1 = new Set([1, 33, 46, 1, 1326, 22, 1, 45, 1]);
const set2 = new Set([27, 5, 33, 465, 21, 1, 78, 8, 1, 22]);
const resAr = intersection(set1, set2);
console.log(resAr);
function sbtract(set1, set2) {
    //TODO write function returning array of numbers from set1 that don't exist in the 
    //set2
    const ar1 = Array.from(set1);
    const ar2 = Array.from(set2);
    let ar3 = [];
    ar1.forEach(n => {
        if (ar2.indexOf(n) === -1) {
            ar3.push(n);
        }
    });
    return ar3;
}
const resAr1 = sbtract(set1, set2);
console.log(resAr1);
function getSortedOccurrences(array) {
    //TODO
    //write function returning array of occurrences 
    //each occurrency contains a string from the given array and how many times it occures in the array
    // a result array should be sorted in the descending order of the occurrences and ascending order of the strings
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result: [{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count:1}, {str: 'ab', count:1}]
    //implementation notes: to use Map<string, number>
    let occurencyMap = new Map();
    array.forEach(n => occurencyMap.has(n) ? occurencyMap.set(n, occurencyMap.get(n) + 1) : occurencyMap.set(n, 1));
    let occurrencyArr = [];
    occurencyMap.forEach((value, key) => occurrencyArr.push({ str: key, count: value }));
    occurrencyArr.sort((a, b) => a.count - b.count ? b.count - a.count : a.str.localeCompare(b.str));
    return occurrencyArr;
}
const strAr = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
const foo = getSortedOccurrences(strAr);
console.log(foo);
