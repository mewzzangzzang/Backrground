//태그 선택 querySelector는 (css)객체임, getElementById (id)
//
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')


//색입력color1과 color2의 색을 선택했을때 두 색을 섞어서 표시하는(body에)함수:
function shuffle() {
    const c1 = color1.value; //선택한 색
    const c2 = color2.value; //선택한 색
    //자바스크립트 문자열안에 변수 넣기 ````벡틱 따옴표
    body.style.background = `linear-gradient(to right, ${c1} , ${c2})`;
    css.innerText = body.style.background + ";"
}
color1.addEventListener('change', shuffle)
color2.addEventListener('change', shuffle)

// //이벤트 리스너 사용 두가지 파라미터 (이벤트 종류,함수이름)
// body.addEventListener('click', click);


// function click() {
//     alert('클릭');
// }


