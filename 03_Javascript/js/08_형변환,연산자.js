// 형변환 확인하기
const btn1 = document.getElementsByClassName("btn1")[0];

// const btn1 = document.querySelector(".btn");
btn1.addEventListener("click", function() {
    console.log("parseInt('123') : " + parseInt('123'));
    console.log(typeof parseInt('123'))
    console.log("parseInt('3.14') : " + parseInt('3.14'));
    console.log("================================")

    console.log("parseFloat('123') : " + parseFloat('123'));
    console.log("parseFloat('123') : " + parseFloat('3.14'));
    console.log("================================")




    // Math.random()
    document.getElementById("btn4").addEventListener("click", function() {

    // rgb 색상 랜덤 대입
    const r = Math.floor(math.random() * 256); // 0 <=ran < 256
    const g = Math.floor(math.random() * 256); 
    const b = Math.floor(math.random() * 256); 

    document.querySelector("body").style.backgroundColor
    = "rgb(" + r + "," + g + "," + b + ")";
})