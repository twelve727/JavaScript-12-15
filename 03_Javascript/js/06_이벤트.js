// 인라인 이벤트 모델 확인하기

function fnTest1(btn) {
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}

// 고전 이벤트 모델 확인하기
// btn1 을 getElementById로 받아와서, 함수로 연결

document.getElementById("btn1").onclick = function () {
    alert('버튼 클릭됨')
}

// 고전 이벤트 모델 장점
// => 이벤트 제거 가능

// 요소의 속성 중 on 이벤트명 속성에 함수(function()) 대신 null을 대입하여
// 이벤트를 삭제(변수에 값을 새로 대입하여 덮어쓰기)



// 마우스가 요소 위로 올라왔을 때
document.getElementById("btn1").onmouseover = function () {
    document.getElementById("btn1").style.backgroundColor = 'red';
}

// 마우스가 요소 밖으로 나갔을 때
document.getElementById("btn1").onmouseout = function () {
    document.getElementById("btn1").style.backgroundColor = 'yellow';
}



// 고전 이벤트 모델의 단점
// 한 요소에 동일한 이벤트 (리스너)에 대한
// 다수의 이벤트 (핸들러)를 작성할 수 없다.

// = 즉, 함수가 여러개 연결이 안되고 마지막에 대입된 (핸들러)만 적용
// 해결 방법 : 표준 이벤트 모델




// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");

//  - btn2.addEventListener("이벤트명",함수);
//  - this 는 btn2 버튼 자체를 말함

btn2.addEventListener("click", function () {

    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소
    console.log(this);

    this.style.backgroundColor = 'pink';
    this.style.border = '3px solid red';
    this.style.padding = "10px";
    this.style.display = "block";
})

// 고전 이벤트 모델의 단점 보완 확인하기
// 이처럼 하나의 이벤트에 여러가지 요소 적용이 가능 
btn2.addEventListener("click", function () {
    this.style.fontSize = "20px";
    this.style.color = "red";
    this.style.fontWeight = "bold";
})

// 배경색이 입력한 값으로 변하는 박스 ( red )
document.getElementById("input1").addEventListener("keyup", function () {
    // 박스 요소 선택하기
    const div1 = document.getElementById("div1");
    // this.value = red 이외의 정해진 value 값 다 적용가능
    div1.style.backgroundColor = this.value;
})




