// 전역 변수
// 요소 추적O, 값, 속성 추적 X
    const num1 = document.getElementById("num1"); 
    const num2 = document.getElementById("num2"); 
    const result = document.getElementById("result");


// 함수의 흐름 op + op 매개변수 형태로 둘 다 넣어줬음
// op에는 + - * / % 중 하나가 전달됨

// 3.js에서는 op가 아닌 btn, 왜 btn??
    function calc(btn) {    

// 함수 호출때 내부 코드가 해석되며 수행

    console.log(btn);

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    const op = btn.innerText; // 클릭된 버튼에 작성 내용을 얻어옴 
                          // + * - / %




// eval("코드 형식의 문자열")
// 매개 변수의 문자열을 js 코드로 해석/수행하는 함수
//  속도느림 + 보안 이슈 ==> 사용XXXXXXXXXXXXX

//result.innerText = eval(n1 + op + n2);   <-- XXXXXXXXXXXXXXX




// new Function() 사용
// 소괄호 ()() 2개인것 유의, 
// new Function() 사용 시 switch(op)문 사용 할 필요 없음

    result.innerText = new Function("return " + n1 + op + n2)();
}