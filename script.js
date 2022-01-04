// 1. li 불러오기 및 저장, 이벤트 확인, 함수 실행
liClick()

// 2. input ID 불러오기 및 저장, 이벤트 확인, 함수 실행
const textInput = document.querySelector(`.add`)
const button = document.querySelector(`.addButton`)
const ulList = document.querySelector(`ul`)
button.addEventListener('click', function () {
    if (textInput.value == ``) {
        inputCheck()
    } else {
        ulList.innerHTML +=`<li><input type="checkbox" name="" id="">${textInput.value}<button>삭제</button></li>`
        liClick()
        textInput.value = ``
    }
    
})
//3. li 목록에 삭제 버튼 추가하기, 삭제 버튼 클릭시 몇번째 li인지 alret하기

const buttonLi = document.querySelectorAll(`li button`)
for (let i = 0; i < buttonLi.length; i++) {
    buttonLi[i].addEventListener(`click`, function () {
        alert(`${i + 1}번째`)
    })
    
}

function liClick() {
    const listLi = document.querySelectorAll(`li`)
    for (let i = 0; i < listLi.length; i++) {
        listLi[i].addEventListener(`click`, function () {
            alert()
        })
    }
}

function removeButton() {
    const buttonLi = document.querySelectorAll (`li button`)
    for (let i = 0; i < buttonLi.length; i++) {
        buttonLi[i].addEventListener(`click`, function () {
            alert(`${i + 1}번째`)
        })
        
    }
}

function inputCheck() {
    alert(`값을 입력하세요.`)
}

// 숙제
// input에 입력한 값이 없는 상태에서 버튼 클릭하면 '값을 입력하세요' 경고창 출력

// 체크버튼 클릭하면 li의 글자색을 회색으로 변경. 체크 해제하면 다시 검은색으로 변경 