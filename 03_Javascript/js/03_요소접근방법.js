// id로 접근하기 @@@@@@@@@@@@@@@@@
function fnTest1() { 

    //  1. id가 "div1"인 요소를 얻어와 div1 이라는 변수에 저장
    const div = document.getElementById("div1");

    // 2. 접근한 요소의 / 배경색을 얻어와 / 변수에 저장
   const bgColor = div1.style.backgroundColor;

    // 빨간 <-> 노란색 왔다갔다 할것임
    // 옐로부터 시작하는 이유 == bgcolor red 먼저 써서
    // 왜 빨강부터? backgroundColor가 if문 red부터 시작해서
    if(bgColor == 'red') {
        div1.style.backgroundColor = "yellow"
    
    } else {
        div1.style.backgroundColor = "red"
    }
}

// class로 변경하기 @@@@@@@@@@@@@@@
function fnTest2() {

    // 요소 여러개를 한 번에 접근하는 경우 배열 형태로 반환됨
    const arr = document.getElementsByClassName("div2");

    // 배열 인식
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    // 색깔 인식
    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";


    // 숫자+문자열 같이 인식
    for(let i = 0; i<arr.length; i++) {
        arr[i].innerText = i + "번 째 요소입니다.";
    }
}

// 태그명으로 접근하기 @@@@@@@@@@@@@@@@@@@@@
function fnTest3() {

    // 문서 내 존재하는모든 li 요소를 얻어와서 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText;
        arr[i].style.backgroundColor = "rgb(100," + num + ",130)";
    }
}

// input 태그값(value) 얻어오기 / 변경하기 @@@@@@@@@@@@@@@@@@@@@@
function fnTest4() {

    // input 요소 접근하기
    const input = document.getElementById("inputTest");

    // input 관련 태그에 작성된 값을 나타내는 속성

    // input 요소에 작성된 값을 얻어와 alert 출력
    alert(input.value);

    // input 요소에 ""(빈 문자열) 대입하면 값을 삭제
    // 해석 ==> 빈 문자열 대입하면, 입력된 값 확인하고 빈 칸 바로 지워짐!!
    input.value = "";
}

// name 속성으로 접근하기 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function fnTest5() {

    // name 속성 값이 "hobby"인 요소를 모두 얻어와 배열 형식으로 반환
    const hobby = document.getElementsByName("hobby");

    // console.log(hobby);

    let str = ""; // 체크 된 체크박스의 값을 누적할 변수를 만들어보자

    let count = 0; // 개수 count , 선택한 요소에 넣을 값

    for(let i = 0; i<hobby.length; i++) {

        // .checked 속성
        // 해당 요소가 체크 되어 있다면 true / 아니면 false
        // checkbox, radio 전용 속성

        if(hobby[i].checked) { // 체크된 경우
            str += hobby[i].value + " ";
            count++; 
        }
    }


    const result5 = document.getElementById("result5");

    //  체크가 된 경우 == str에 값이 있냐 없냐로 따지면 됨
    if(str != "") {
        result5.innerText = str;
        result5.innerHTML += "<br><br> 선택된 개수 : " + count;
    } else {
        result5.innerText = "선택된 취미가 없습니다.";
    }
}

// CSS 선택자로 접근하기 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function fnTest6() {
    document.querySelector("#cssTest").style.border = "3px solid green";

    document.querySelector("#cssTest > div").style.backgroundColor = "gold";

    // 폰트크기 바꿀껀데 const arr에 담아주자
    const arr = document.querySelectorAll("#cssTest > div");

    // 폰트 크기 커진것 확인
    for(let i = 0; i < arr.length; i++) {
        arr[i].style.fontSize = "30px";
    }
}

// 카톡 만들기 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // 입력된 값을 읽어들여 채팅창에 출력
function readValue() {

        // 채팅과 관련된 요소 모두 얻어와 저장하기
        const bg = document.getElementById("chatting-bg");
        // 쿼리셀렉터는 항상 # 선택자 사용해야함
        const input = document.querySelector("#chattingInput")

        // 채팅이 정상적으로 입력된 경우에만 출력
        // trim : 문자열 좌 우 공백만 제거 
        // ex) 카톡 스페이스로 보냈을 때 안보내지도록
        if(input.value.trim().length > 0) {

            // 채팅창 입력된 값으로 채팅 추가
            bg.innerHTML += "<p><span>" + input.value + "</span></p>";


            // 스크롤 제일 밑으로 내리기
            // 요소.scrollTop : 요소 내부 현재 스크롤의 위치
            // 요소.scrollTop = 위치     :       스크롤을 특정 위치(긁은곳)로 옮김
            // 요소.scrollHeigth : 스크롤의 전체 높이
            bg.scrollTop = bg.scrollHeight;
        } else {
            alert("채팅 내용을 입력해주세요.");
        }
        
        // 입력한 내용 삭제
        input.value = "";
    }

// 카톡 엔터키가 입력되었을 때의 과정 @@@@@@@@@@@@@@@@@@@@@@@@@@@

function inputEnter() {
    // 키보드 입력 과정
    //  - 유저가 키를 누름 -> keydown 이벤트 발생 
    //    -> input 태그에 입력 -> keypress -> (손떼고) keyup

    // keydown : 모든 키가 눌렸을 때
    // keypress : 영어,숫자,특수문자,띄어쓰기 가 눌러지고 있을 때
    // 꾹누르고 있을 경우 연속으로 함수가 호출되는 문제 발생



    // 우리는 keyup 사용 ( 1회만 인식!!!! )
    if(window.event.key == "Enter") {
        readValue(); 
    }

}
