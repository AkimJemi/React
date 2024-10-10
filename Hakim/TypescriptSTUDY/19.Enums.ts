import { Person } from './TypeModule';

enum ResourceEnum { IDX0, INDX1, INDX2, INDX3 }

interface Resource<T> {
    uid: number,
    resourceType: ResourceEnum,
    data: T,
}
const enumOne: Resource<Person> = {
    uid: 1,
    resourceType: ResourceEnum.INDX1,
    data: { name: '', address: "早稲田" },
}
const enumThree: Resource<Person> = {
    uid: 1,
    resourceType: ResourceEnum.INDX3,
    data: { name: '', address: "早稲田" },
}
console.log(enumOne);
console.log(enumThree);