// Writing the code....
const body = document.body; // body 태그 불러오기
setInterval(snowFall, 100); // snowFall함수 100ms 마다 반복.

function snowFall() {
    const cloneSnow = document.createElement('div'); // div태그 생성
    const randomNumber = Math.random() * 10 + 10 + 'px'; // 0 ~ 1 사이의 난수 * 10 + 10의 숫자 생성
    cloneSnow.style.width = randomNumber; // div 태그의 너비를 무작위로 설정
    cloneSnow.style.height = randomNumber; // div 태그의 높이를 무작위로 설정
    cloneSnow.classList.add('styleSnow'); // 스타일을 적용하기 위한 클래스 지정
    cloneSnow.style.borderRadius = 50 + '%'; // 동그랗게 설정
    cloneSnow.style.background = '#fff'; // background색을 흰색으로 설정
    cloneSnow.style.left = Math.random() * window.innerWidth + 'px'; // 좌우 생성위치 좌우무작위로 설정
    cloneSnow.style.animationDuration = Math.random() * 3 + 2 + 's'; // 떨어지는 속도를 무작위으로 설정
    document.body.appendChild(cloneSnow); // body태그 안에 div태그 복제
        
    setTimeout(() => {
        cloneSnow.remove(); // 생성 5초후 제거
    }, 5000);
}