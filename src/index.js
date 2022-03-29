// let str:string;
// str = "10";
// function fun(op1: number, op2: number): number {
//     return op1 * op2;
// }
// let a = fun(2, 2);
// a = 10;
// let b = 10;
// let d = b - +"10";
// if(str) {
//     console.log(str);
// }
// function fun1(s:string): boolean {
//     return !!s;
// }
// let vf: (n1:number, n2: number)=>string;
// function fun4(op1: number, op2:number):string {
//  return op1 + op2 + "";
// }
// vf = fun4;
// console.log(vf(2, 2))
function sum(ar) {
    return ar.reduce((res, cur) => res + cur);
}
// let ar: Array<number> = [1 ,2 ,3, 10];
// ar.push(12);
// console.log(sum(ar));
//let set = new Set<number>([1,1,1,2,2,3,3]);
//console.log(set)
//set.forEach(e => console.log(e));
// set.add(10);
// const ar1 = Array.from(set);
// console.log(set.has(10));
// console.log(sum(ar1))
/*****************************************HW #32 */
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
/**************************************************************************** */
// const mapMonths = new Map<number, string>([
//     [1, "Januar"], [2, "Februar"], [3,'March']
// ]);
// mapMonths.set(4, 'April');
// mapMonths.set(1, "Jan");
// // console.log(mapMonths);
// // console.log(mapMonths.get(5));
// console.log(mapMonths.has(5));
// const arEntries = Array.from(mapMonths); //array of entries
// console.log(arEntries);
// const arKeys = Array.from(mapMonths.keys()); //array of kyes
// arEntries.push([6, 'hhhh']);
// arKeys.push(10);
// console.log(arKeys);
// const arValues = Array.from(mapMonths.values());
// console.log(arValues);
// arValues.push("10");
// type Person = {
//     id:number,
//     name: string,
//     age?: number,
//     city?: string
// }
// function createPerson(id: number, name: string): Person {
//     return {id, name};
// }
// console.log(createPerson(123, "Vasya"))
// let person: Person = {id: 100, name: "Moshe", age: 20, city: 'Lod'}
// let persons: Person[] = []
// persons.push(person);
// function strLength(str:string): number {
//     return str.length;
// }
// console.log(strLength(person.city));
