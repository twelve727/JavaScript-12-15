// 노드 확인하기
document.getElementById("btn1").addEventListener("click", function() {
   
    // [부모]
    // 요소.parentNode : 요소의(요소에 대한) 부모 노드를 탐색해서 반환함

    // ---------------------------------------------------------------------

    // [자식]
    // 요소.childNodes : 요소의 자식 노드를 모두 반환함(NodeList 형태) == 하나만 반환하는게 아니니까 s 
    // 요소.firstchild : 첫 번째 자식 노드를 탐색해서 반환
    // 요소.lastchild : 마지막 자식 노드를 탐색해서 반환
    // 요소.childNodes[index] : index 번 째 자식 노드를 탐색해서 반환

    // ---------------------------------------------------------------------
    
    // [형제]
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSibling : 요소의 다음 형제 노드를 반환

    // ---------------------------------------------------------------------


    //  #test의 자식 노드를 모두 얻어와서 확인
    const testNodeList = document.getElementById("test").childNodes;

    console.log(test.NodeList);

    // 노드 탐색
    // 부모노드 확인해보시오. 답 : ul#test
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode);

    // #li1의 부모 배경색을 orange로 변경
    li1.parentNode.style.backgroundColor = 'orange';

    // #li1의 부모 노드의 마지막 부분에 "ABCD"라는 text node 추가
    // 요소.append(요소 또는 노드) : 마지막 자식으로 추가
    li1.parentNode.append("ABCD");


// ------------------------예제------------------------------------

    // #test의 첫 번째 자식 노드
    const testNodeList2 = document.getElementById("test");
    console.log(test.firstchild);

    // #test의 마지막 자식노드 찾기
    const testnodeList3 = document.getElementById("test");
    console.log(test.lastchild);

    // #test의 자식 노드 중 5번째 인덱스 노드 찾기
    const testnodeList4 = document.getElementById("test");
    console.log(test.childNodes[5]);

    // #test의 자식 노드 중 5번째 인덱스 노드의 마지막 자식으로 "ZZZ" 추가하기
    // tip! = 요소.append(요소 또는 노드) : 마지막 자식으로 추가
    const testnodeList5 = document.getElementById("test");
    test.childNodes[5].append("ZZZ");

    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드
    const testnodeList6 = document.getElementById("test");
    console.log(test.childNodes[5].previousSibling);

    // #test의 자식 노드 중 5번째 인덱스의 다음 형제 노드
    const testnodeList7 = document.getElementById("test");
    console.log(test.childNodes[5].nextSibling);

    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드의 * 이전 형제 노드
    // previousSibling.previousSibling 이전+이전 이면 2번 써주기
    const testnodeList8 = document.getElementById("test");
    console.log(test.childNodes[5].previousSibling.previousSibling);

// ------------------------예제------------------------------------
})

// ------------------------------------------------------------
// [Element(요소) 탐색 확인]
document.getElementById("btn2").addEventListener("click", function() {
    
    // - children : 자식 요소만을 모두 선택
    // - parentElement : 부모 요소 선택

    // - firstElementChild : 첫 번째 자식 요소 선택
    // - lastElementChild : 마지막 자식 요소 선택

    //  - previousElementSibling : 이전 형제 요소 선택
    //- nextElementSibling : 다음 형제 요소 선택

    const test = document.getElementById("test"); // 부모요소
    const li1 = document.getElementById("li1"); // 자식요소

    // #li1의 부모 요소 탐색
    console.log(li1.parentElement);

// ------------------------Element 예제------------------------------------

    // #li1의 부모 요소의 부모요소 탐색
    console.log(li1.parentElement.parentElement);

    // #test의 모든 자식 요소 탐색
    // htmlcollection 형태로 반환 DOM ELEMENT에선 for each 불가능!!
    const list = test.children;
    console.log(test.children);

    // #test의 첫 번째 자식 요소 탐색
    console.log(test.firstElementChild);

    // #test의 마지막 자식 요소 탐색
    console.log(test.lastElementChild); 


    // 고오급예제

    // #test의 자식 요소 중 2번째 인덱스의 이전 형제 요소 클릭 시,
    // 작성된 내용을 alert로 출력
    // 해당 요소의 다음 형제의 * 다음 형제 요소 배경색을 red로 변경 

    // 1. this == 이벤트가 발생한 요소
    // 2. #test의 자식 요소 중 2번째 인덱스의 이전 형제 요소
    list[2].previousSibling.addEventListener("click", function() {
        alert(this.innerText);
    })
    this.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
})


// ------------------------Element 예제 끝------------------------------------

// innerHTML
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

// 10번만 셀 것
let count3 = 1;

btn3.addEventListener("click", function() {
    if(count3 <= 10) {
        const input = "<input type='text'>";

        div3.innerHTML += "<div>" + count3 + input + "</div>";

        count3++;
    }
})

// createElement()
// document.createElement()는 문서 안에 괄호 안에 있는 요소를 만든다는 의미를 가진다.

const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");

let count4 = 1;

btn4.addEventListener("click", function() {

    if(count4 <= 10) {
        // document.createElement("태그명");
        // 해당 태그 요소를 생성하여 반환
        // 요소가 생성될 뿐, 화면에 추가되는것은 아님

        const div = document.createElement("div");
        const input = document.createElement("input");

        // #div4 > div > input

        // div의 내용으로 count4 추가 후 1 증가
        div.innerText = count4;
        count4++;

        // input을 div의 마지막 요소로 추가
        // @ 추가는 append
        div.append(input);

        div4.append(div);
    }
})

