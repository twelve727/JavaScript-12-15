// 전역 변수
// 요소 추적O, 값, 속성 추적 X
const num1 = document.getElementById("num1"); 
const num2 = document.getElementById("num2"); 
const result = document.getElementById("result"); 

function plus() {

    // 함수 호출때 내부 코드가 해석되며 수행
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    result.innerText = n1 + n2;
}

function minus() {
    result.innerText = Number(num1.value) - Number(num2.value);
}
function multi() {
    result.innerText = Number(num1.value) * Number(num2.value);
}
function div() {
    result.innerText = Number(num1.value) / Number(num2.value);
}
function mod() {
    result.innerText = Number(num1.value) % Number(num2.value);
}