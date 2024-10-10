let strOrNum: string | number = 123;
let strArray: string[] = ["a", "b"];
let obj: { name: string } = { name: "kim" };
let obj2: { name?: string } = {};


type TsType = string | number;

function txFuc(x: number): number {
    return x * 2
}

type Member = [number, boolean];
let john: Member = [123, true];


type Member2 = {
    name: string,
    age: number,
    isMarried: boolean
};
type Member3 = {
    [key: string]: string,
};

let jem2: Member2 = { name: "kim", age: 2, isMarried: true };
let jem3: Member3 = { name: "kim", age: "2", isMarried: "true" };
console.log(jem2)
console.log(jem3)

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}