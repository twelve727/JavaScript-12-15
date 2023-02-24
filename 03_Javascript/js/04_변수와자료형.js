// var str(string) 이니까, "안에 String형태"
var str = "JS 코드는 함수가 아닌"
            + "JS 파일 또는 script태그 내부에 바로 작성하면"
            + "HTML 랜더링 시 바로 수행된다.";

console.log(str);

// 변수 선언 위치에 따른 구분

var num1 = 100; // 전역변수
num2 = 200; // 전역변수

console.log("num1 : " + num1 );
console.log("num2 : " + num2 );

function test() { // test 함수 정의
    var num3 = 300; // 지역변수 ( function 안에 있는 var 이기 떄문에)
    num4 = 400; // 전역변수(var 안붙어서)

    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if(true) {
        var num5 = 500; // 지역변수
        num6 = 600; // 전역변수
    }

    // if문 안에서 만든 지역변수인데도 밖에서 찍히는 것 확인
    console.log("if문 종료 후 num5 : " + num5);
    console.log("if문 종료 후 num6 : " + num6);
}

test(); // 함수 호출

// console.log("함수 외부 num3 : " + num3); // num3 is not definded
// 함수 종료 후 에는 사용이 불가함


// script 언어는 중간에 에러가 발생하면, 해석을 멈춘다.
// 얘는 전역변수 이기 때문에 에러 없이 바로 해석 가능

console.log("함수 외부 num4 : " + num4);
// 함수 종료 후 에는 사용이 가넝

//console.log("함수 외부 num5 : " + num5);
// 지역변수라 undefind 뜸

console.log("함수 외부 num6 : " + num6);
// 전역변수라 바로 해석됨

// var 변수명 중복 확인
var num1 = 999;
console.log("var num1 중복 확인 : " + num1);

// 자료형 확인 (+ 변수 선언 방법)
// let은? 중복이 XXX
function typeTest() {

    let temp1 = 100;
    // let temp1 = 200; // 둘 다 쓰면 안됨, 중복 XX

    if(true) {
        // 블록 범위 확인
        let temp2 = 200;
        const temp3 = 300;
        //temp3 = 400; //  Assignment to constant variable.
                        // 상수형 변수에 값을 할당할 수 없다.
    }

    console.log(temp1);
    // console.log(temp2); // error
    // console.log(temp3); 

    // --------------------------------------------------------------------------

    // 자료형 확인 @@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const typeBox = document.getElementById("typeBox");
    typeBox.innerHTML = ""; // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라
                            // == 내부 내용 삭제

    // const name2; // 상수는 선언과 동시에 초기화가 필수이다

    let name; // undefined
    typeBox.innerHTML += "name :" + name + " / " + typeof name; 
                        // name : undefined / undefined


    // typeof 변수명 : 해당 변수의 자료형을 반환하는 연산자 
    name = "홍길동";
    typeBox.innerHTML += "<br><br>name :" + name + " / " + typeof name; 
                            // name : 홍길동 / string

    // number @@@@@@@@@@@
    const age = 20;
    const height = 178.9;
    typeBox.innerHTML += "<br><br>age :" + age + " / " + typeof age;
    typeBox.innerHTML += "<br><br>height :" + height + " / " + typeof height;
    // 결과값은
    // age : 20 / number
    // height : 178.9 / number



    // boolean @@@@@@@@@@@@@@
    const isTrue = true;
    typeBox.innerHTML += "<br><br>isTrue :" + isTrue + " / " + typeof isTrue;
    // 결과값
    // isTrue :true / boolean



    // object(배열,js객체) @@@@@@@@@@@@@@
    //  배열 선언과 동시에 초기화
    // (Java)
    //  int[] arr = {10, 20, 30, 40, 50};

    // JS ( {} 이 아닌, 배열이니까 [] 사용)
    const arr = [10, 20, 30, 40, 50];

    typeBox.innerHTML += "<br><br>arr :" + arr + " / " + typeof arr;

    // 결과값
    // arr :10,20,30,40,50 / object

    for(let i = 0; i < arr.length; i++) {
        typeBox.innerHTML += "<br><br>arr[" + i + "] : " + arr[i]; + " / " + typeof arr[i];
    }

    // for문꺼 결과값
    // arr[0] : 10 / arr[1] : 20 / arr[2] : 30 / arr[3] : 40  / arr[4] : 50


    // ** JS 객체 ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // K:V 쌍으로 이루어짐(Map 형식)
    // Key는 무조건 String
    // 리터럴 표기법 : {}

    // ex) const user = { "K" : V , "K" : V };

    const user = { "id" : "user01" , "pw" : "pass01" , "num" : 123, "a" : arr};

    typeBox.innerHTML += "<br><br>user :" + user + " / " + typeof user;
    console.log("user");

    // 객체에 저장된 값 출력 @@@@@@@@@@@@@@@@@@@@@@@@@@@@
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.pw : " + user.pw;
    typeBox.innerHTML += "<br>user.num : " + user.num;
    typeBox.innerHTML += "<br>user.a : " + user.a;
    typeBox.innerHTML += "<br>user.a[2] : " + user.a[2];
    
    // 배열의 특성 : 맨 앞 0부터 시작해서 0,1,2 결과값은 30




    // function
    //  1) fnSum(변수명) == 함수명(function)

    // 익명함수 @@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // function 자체를 const에 담아줌

    // 함수명만 작성하는 경우 => 함수에 작성된 코드 자체가 반환됨
    // 그래서 return n1 + n2 인것

    const fnSum = function(n1, n2) {
        return n1 + n2;
    }

    // 함수에 작성된 코드 자체가 나왔음
    // 호출을 해줘야 정상적으로 출력됨
    typeBox.innerHTML += "<br><br>fnSum : " + fnSum + " / " + typeof fnSum;

    // 함수명(매개변수) == 함수호출 ( 함수 코드가 수행되는 구문 )
    typeBox.innerHTML += "<br><br>fnSum(1,2) : " + fnSum(1,2);    

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

    //  2) 함수를 매개변수로 전달하는 형태

        // num = number
        // fn : function

    function plusFn(num, fn) {
   
        return num + fn();
    }

    // const result에 담고
    // num fn 값 넣어보기

    const result = plusFn(100, function() {return 30 - 10;} )

    typeBox.innerHTML += "<br>,br>result : " + result;












}