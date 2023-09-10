// 1. 預設回傳值是 void
// 2. 有回傳值，但沒 anootation 一樣會自動偵測，但不建議，
//    盡量讓參數和回傳值都有 annotation，別人和自己才看得懂，好處是忘記回傳，和回傳錯會有提醒
// 3. noUnusedParameter
// 4. 使用 if 時，有時會缺少回傳值，預設回傳是 undefined，noImplicitReturn 避免我們忘記回傳 function
// 5. noUnusedLocals 避免沒使用的區域變數
// 6. 呼叫 function 時需要給正確的數量
function calculatePass(score: number): boolean {
    if(score >= 70)
        return true;
    return false;
}

calculatePass(99);