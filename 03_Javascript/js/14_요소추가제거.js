// 추가 버튼 클릭 시 동작
// add버튼에 이벤트+쭉 줄것임
document.getElementById("add").addEventListener("click", function() {
    // div 요소 생성
    const div = document.createElement("div");
    
    // div에 row class추가
    div.classList.add("row");

    //---------------------------------------------------------------

    // input 요소 생성
    const input = document.createElement("input");

    // input에 in class 추가
    input.classList.add("in");

    // 요소에 속성을 추가하거나 변경할 때 사용하는 함수
    // 요소.setAttribute("속성명","속성값")
    // = 요소.setAttribute(type,number) 의 개념임
    // <-> 요소.removeAttribute("속성명") : 속성 제거

    // input 에 type="number" 추가
    input.setAttribute("type","number");

    //---------------------------------------------------------------

    // span 요소 생성
    const span = document.createElement("span");

    // span에 remove class 추가
    span.classList.add("remove");

    // span에 &times; 추가
    span.innerHTML = "&times;"

    // span에 clickEvent 동작 추가 ( 동적 요소에 이벤트 추가 )
    span.addEventListener("click", function() {

        // 클릭 된 X 버튼의 누구를 삭제하는가?
        // X 버튼(div 안에 있는 remove)의 부모 요소를 삭제
        // == 즉 <div></div> 라는 부모를 없애야함

        // 요소.remove() : 해당 요소를 제거
        this.parentElement.remove();
    })    

    //---------------------------------------------------------------

    // div > input, span 조립
    div.append(input, span);

    // .container에 div를 마지막 자식으로 추가
    // querySelector 개념 다시 숙지해보기

    // Document.querySelector() Document.querySelector() 는 제공한 선택자 
    // 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element 를 반환합니다.
    // 일치하는 요소가 없으면 null 을 반환합니다.

    document.querySelector(".container").append(div);

    input.focus(); // 화면에 추가된 input에 포커스
})

// 계산 버튼 클릭되었을 때
// input 요소에 작성된 값을 모두 얻어와 합한 후 출력

document.getElementById("calc").addEventListener("click", function() {
    const inputList = document.getElementsByClassName("in");

    let sum = 0;

    for(let input of inputList) {
        sum += Number(input.value); // input 요소에 작성된 값 누적
    }

    // 경고창(alert) 구문 출력
    // 계산 누르는 시점 = 정적 / X버튼은 = 동적 (즉, 동적으로 걸려야 하는 것들은 동적)
    alert("합계 : " + sum);

    
})

