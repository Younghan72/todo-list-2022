const data = [{id:1,title:`a`, completed:"checked"},{id:2,title:`b`, completed: ""},{id:3,title:`c`, completed: ""}] // ctrl d
// 1. li 불러오기 및 저장, 이벤트 확인, 함수 실행
addLi()



// 2. input ID 불러오기 및 저장, 이벤트 확인, 함수 실행
const textInput = document.querySelector(`.add`)
const button = document.querySelector(`.addButton`)
const ulList = document.querySelector(`ul`)
button.addEventListener('click', function () {
    if (textInput.value == ``) {
        alert(`값을 입력하세요.`)
        return
    }
    // data배열에 요소 추가
    data.push({id:1,title:textInput.value, completed:""}) 
    // addLi
    addLi()
    textInput.value = ``
})

//3. li 목록에 삭제 버튼 추가하기, 삭제 버튼 클릭시 몇번째 li인지 alret하기

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

function checkboxClick() {
    const checkbox = document.querySelectorAll(`ul li`)
    // console.log(checkbox)
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener(`click`, function () {
            checkbox[i].classList.add(`grey`)
            data[i].completed = "checked"
        })
        
        
    }
}

function addLi() {
    const ul = document.querySelector(`ul`)
    ul.innerHTML = ``
    for (let i = 0; i < data.length; i++) {
        ul.innerHTML += `<li><input type="checkbox" ${data[i].completed} >${data[i].title}<button>삭제</button></li>`
        
    }
    liClick()
    removeButton()
    checkboxClick()
}

// 숙제
// 삭제 버튼 클릭 시 배열에서 요소 삭제(실패, 인터넷의 내용이 너무 광대함)
// 체크박스 클릭 시 배열의 completed 값 변경 V(부분)
// addLi 호출 시 completed가 true이면 체크 된 상태로 표시  V