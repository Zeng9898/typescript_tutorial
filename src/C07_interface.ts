// interface 可以用來定義物件需要的屬性，或是函數中的回傳值
interface Person {
    name: string;
    age: number;
    sayHello(): void;
}

let john:Person={
    name:"john",
    age:20,
    sayHello():void{
        console.log('he');
    }
}

john.sayHello();