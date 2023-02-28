//  window.setTimeout(함수, 지연시간(ms))
//  3초 동안 빛 혼자 변하게 할것

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    // 0초
    this.style.background = 'red';

    // 3초 후 orange 변경
    // window.setTimeout() 에서 this == window 객체
    window.setTimeout(function() {
    btn1.style.backgroundColor = 'orange';
    }, 3000);

    console.log("중간에 출력");

    //  6초 후 yellow로 변경
    window.setTimeout(function() {
    btn1.style.backgroundColor = 'yellow';
    }, 6000);
    //  9초 후 green으로 변경

    window.setTimeout(function() {
    btn1.style.backgroundColor = 'green';
    }, 9000);
})


// currentTime : 현재 시간을 반환하는 함수
function currentTime() {
    
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 함수

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간 값이 10 미만일 경우, 앞에 0 추가
    if(hour < 10) hour = "0" + hour; 
    if(min < 10) min = "0" + min; 
    if(sec < 10) sec = "0" + sec;
    
    return( hour + " : " + min + " : " + sec)
}
    
// 페이지가 로딩 되자마자 디지털 시계(#clock)에 현재 시간 출력
// #clock에 1초마다 현재 시간을 출력하도록 하는 코드를 작성

const clock = document.getElementById("clock");
clock.innerText = currentTime();
    

// set interval?로 처리해서 시분초가 자동으로 가게 해보자

// setInterval + stop 버튼구문
// stop 하려고 const interval 추가해줬음
const interval = window.setInterval(function () {
    clock.innerText = currentTime();
},1000);

document.getElementById("stop").addEventListener("click", function() {
    window.clearInterval(interval);
})

// 팝업창 열기 (09_배열.html)
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");


openPopup1.addEventListener("click", function() {
    // 새 탭에서 열기
    window.open("09_배열.html")
})

openPopup2.addEventListener("click",function() {
    // 최소한의 팝업 형태로 열기
    window.open("09_배열.html", "_blank", "popup") 
})

openPopup3.addEventListener("click",function() {
    // 옵션이 지정된 팝업창
    // 얘는 조금 다르게, "K=V, K=V, K=V" 한 쌍따옴표 안에 다 들어오게끔
    // 크기 단위 작성은 X ( pixel 고정임 ) 

    const options = "width=400, height=500, top=50, left=400";

    window.open("09_배열.html", "popupWindow", options);
})

// 팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function() {
    const options = "width=300, height=300, top=50, left=700";
    window.open("팝업.html", "popupWindow", options);
})