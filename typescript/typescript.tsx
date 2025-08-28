function write(array : Array<string>):void
{
    array.forEach((value)=>console.log(value));
}

function topla(a:number,b:number):number{
    return a+b;
}

let array: Array<string> = ["ahmet","mehmet","can"];
write(array);

let isim:string="mücahit";
let yas:number=25;

let yasi:any=25;

let uniontype:string|number|boolean="deneme";

let literalType:"başarılı"|"başarısız";

let names:string[]=["1","2","3"];

let numara:Array<number>;


interface User{
    name:string,
    age:number
}
interface Kullanici{
    isim:string,
    yas?:number
}
const object1:User={
    name:"mücahit",
    age:25
}
const obj2: Partial<User>={
    name:"deneme",
}
const obj3: Required<User>={
    name:"deneme",
    age:30
}
const obj4: Readonly<User>={
    name:"deneme",
    age:40
}


const obj5: Pick<User, "name">={
    name:"deneme",
}

const obj6: Omit<User, "age">={
    name:"deneme",
}

type user2 = {
name:string,
age:number
}

function writeGeneric<T>(array : T[]):void
{
    array.forEach((value)=>console.log(value));
}

interface GenericType<T>{
    name:string
    age:number
    maas:T[]
}
const obj1:GenericType<string>={
    name:"mücahit",
    age:25,
    maas:["yirmi","40"]
}

interface OrtakAlanlar{
    name:string,
    age:number,
}

interface kurum extends OrtakAlanlar{
    kurumNo:number
}



