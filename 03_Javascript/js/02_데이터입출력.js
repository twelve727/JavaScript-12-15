// innerHTMl로 읽어오기 ( 태그 속성 내용 전체포함)
// document = f12 콘솔창에 쳐서 나왔던것 , get으로-> test1을 찾겠다.
function getInnerHTML1() {
    console.log(document.getElementById("test1").innerHTML);
}





// innerHTMl로 변경하기( 태그 속성 해석됨 )
// const = 상수 /  t1 = 변수명
//  "<> 안은 홑따옴표, 밖은 쌍따"
function setInnerHTML1() {
    const t1 = document.getElementById("test1");

    t1.innerHTML = "<b class='red'>변경된 <br><br> 내용입니다.</b>";

}




//  innerHTML 응용
function add() {
    // 1) id 속성값이 "area1"인 [요소를 얻어와서 변수에 저장] 
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 [새로운 내용을 누적]
    // (박스 html에서 그대로 받아오기)
    area1.innerHTML += "<div class='area1-box'></div>"
}






//  innerText 로 읽어오기
const t2 = document.getElementById("test2");

function getInnerText1() {
    console.log(t2.Innertext);
}




// innerText로 변경하기
function setInnerText1() {
    t2.innerText = "<b class='yellow'>변경된<br><br> 내용입니다.</b>";
}

// confirm
// ex) 정말 삭제하시겠습니까? 에 사용되는것
function fnConfirm() {
    window.confirm("넌 KH 학생이니?");
}

// conform 예시 추가
function fnConfirm() {
    const qes = confirm("배경색을 분홍색으로 바꾸시겠습니까?");

    if( qes ) {
        document.getElementById("confirmTest").style.backgroundColor="pink";
    }
}

// prompt
// 
function fnPrompt() {
    const input = prompt("변경할 버튼명을 입력하세요");
    // 입력한 값 혹은 null이 결과값


    // 입력한 값을 getElement(확인하면) 바꾸겠다
    if(input != null) {
        document.getElementById("promptTest").innerTest = input;

    } else {
        alert("취소되었습니다.");
    }
}
