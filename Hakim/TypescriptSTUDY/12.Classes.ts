// 
class invoice {
    client: string;
    details: string;
    amount: number;

    constructor(a: string, b: string, c: number) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.client} and ${this.amount} and ${this.details}`
    }

}
let value: [string, string, number] = ['test', 'app', 200]
let doc = new invoice(...value);
console.log(doc.format())


