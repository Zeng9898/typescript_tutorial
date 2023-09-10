
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