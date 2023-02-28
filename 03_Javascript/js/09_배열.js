// 배열확인
document.getElementById("btn1").addEventListener("click", function() {
    const arr1 = new Array();  
    const arr2 = new Array(3);  
    const arr3 = [];  
    const arr4 = ['사과','딸기','바나나'];
    
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)

    //  배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 길이 증가
    arr1[0] = "김밥";
    arr1[1] = 5000;
    arr1[2] = true;

    // 중간 인덱스 건너뛰면, 건너 뛴 부분은 empty로 남음
    arr1[5] = 111; // 추가 가능
    console.log(arr1)

    // for문으로 배열 요소 반복 접근

    // 1. 일반 for문 - 배열, 컬렉션
    // for(let i=0; i<arr4.length; i++) {
    // console.log(arr4[i]);
    // }

    // 2. 배열.forEach( function(item, index) {반복수행 코드} ) - 배열
    //  item : 현재 접근중인 요소
    //  index : 현재 인덱스

    //  * 여러 요소를 얻어온 경우는 배열이 아니므로, forEach()문을 쓸 수 없다.
    //arr4.forEach( function (a, i) {
    //    console.log(i + " : " + a)
    // })

    // 3. for( item of 배열 또는 컬렉션 ) {} - 배열, 컬렉션
    // (Symbol.iterator 가 존재하는 객체에 사용이 가능)
    
    // == Java의 향상된 for문과 비슷함

    for(let item of arr4) {
        console.log(item)
    }

    // 누적 더하기 == <li></li> 태그의 값 얻어와 합 구하기

    // forEach()문 사용 불가 XXX 향상된 for문만 사용 가능
    //const list1 = document.getElementsByTagName("li"); // HTMlCollection
    const list2 = document.querySelector("#test > li"); // NodeList

    // console.log(list1)
    // console.log(list2)

    let sum = 0;
    for(let item of list2) {
        sum += Number(item.innerText)
    }

    console.log("sum : " + sum)

    // 4. for (let key in 객체) - JS 객체용 for문

})

// 배열 관련 함수 확인

document.getElementById("btn2").addEventListener("click", function() {
    //   비어 있는 배열 생성
    const arr = [];

    arr.push("최");
    arr.push("정");
    arr.push("오");
    arr.push("짱");
    arr.push("짱");

    //  결과 여러 콘솔로 확인해보기
    console.log(arr.toString());


    const temp = arr.pop();
    console.log(temp);
    
    // 인덱스 번호도 출력
    console.log(arr.indexOf('오'));
    console.log(arr.indexOf('짱'));

    // 가나다라마 순 sort
    console.log(arr.sort())

    // 1, 10, 2, 3, 5
    const numArr = [5,3,2,10,1];

    // [1, 2, 3, 5, 10]
    console.log( numArr.sort(function (a,b) { return a - b; } ) )

    // [10, 5, 3, 2, 1]
    console.log( numArr.sort(function (b,a) { return a-b; } ) )

    //  sort() 함수는 원본 배열의 순서를 정렬함
    // -> 원본 훼손 발생 ( 깊은 복사를 이용해 해결 )
    console.log(numArr)
})

