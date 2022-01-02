// 1. li 불러오기 및 저장, 이벤트 확인, 함수 실행
// const clickLi = document.querySelectorAll(`li`)
// for (let i = 0; i < clickLi.length; i++) {
//     clickLi[i].addEventListener(`click`, function () {
//         alert()
//     })
    
// }
// 2. input ID 불러오기 및 저장, 이벤트 확인, 함수 실행
const textInput = document.querySelector(`.add`)
const button = document.querySelector(`.addButton`)
button.addEventListener('click', function () {
    alert(textInput.value)
})
//3. li 목록에 삭제 버튼 추가하기, 삭제 버튼 클릭시 몇번째 li인지 alret하기
const listLi = document.querySelectorAll(`li`)
const liButton = document.querySelectorAll(`listLi.Button`)
for (let l = 0; l < listLi.length; l++) {
    
    
}