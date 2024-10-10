import { Person } from './TypeModule';


interface ResourceType<T> {
    uid: number,
    name: string,
    data: T,
}

const typeOne: ResourceType<string> = {
    uid: 1,
    name: "test",
    data: "data",
}

const typeTwo: ResourceType<Person> = {
    uid: 1,
    name: "test",
    data: { name: '', address: "早稲田" },
}
typeTwo.data.name = typeTwo.name;
console.log(typeTwo);