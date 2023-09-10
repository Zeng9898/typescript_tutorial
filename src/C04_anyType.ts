// 沒有宣告型別，又沒給初始值時就會是 any type
// 謹慎使用 any type，因為會失去 typescript 的好處
let department;
department = '網學所';
department = 1;

// 在把 javascript code 轉成 typescript code 的情境
// function render(document) {
//     console.log(document);
// }