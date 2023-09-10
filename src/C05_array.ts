// js 中的 array
// let classes = [1, 2, '3'];

// ts 中的 array
// 定義了型別就得統一
// 下面兩種是相同的
// let classes: string[] = ['學習深論', '人工智慧', '設計思考'];
// let classes_duplicated = ['學習深論', '人工智慧', '設計思考']

// 沒有定義型別和初始值的 array 就會是 any array 每個元素都可以是不同型態
// 如果想要定義特定型別的空陣列，就要加 annotation
// let classes = [];
// classes[0] = 1;
// classes[1] = '2';