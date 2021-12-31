// 1. li 불러오기 및 저장, 이벤트 확인, 함수 실행
const clickLi = document.querySelectorAll(`li`)
for (let i = 0; i < clickLi.length; i++) {
    clickLi[i].addEventListener(`click`, function () {
        alert()
    })
    
}
// 2. input ID 불러오기 및 저장, 이벤트 확인, 함수 실행
const textInput = document.querySelector(`contents.value`)
