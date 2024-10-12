let arr = ['ryuz', 25, true]
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi']
let tup: [string, number, boolean] = ['st', 25, true];

tup[0] = 'ken'
tup[1] = 30;

class Invoice {
    constructor(bool: boolean, str1: string, str2: string, num: number) {
        console.log('constructor : ', str1, str2, num)
    }
}

let values: [boolean, string, string, number] = [true, 'st', 'st', 12];
let classVlalue = new Invoice(...values);
console.log(values)

