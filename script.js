// 0: 미완료, 1: 완료
const data = [{id:1,title:`a`, completed:1},{id:2,title:`b`, completed: 0},{id:3,title:`c`, completed: 0}] // ctrl d
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
    data.push({id:data[data.length-1].id+1,title:textInput.value, completed:0})
    
    // addLi
    addLi()
    textInput.value = ``
})

//3. li 목록에 삭제 버튼 추가하기, 삭제 버튼 클릭시 몇번째 li인지 alret하기

// function liClick() {
//     const listLi = document.querySelectorAll(`li`)
//     for (let i = 0; i < listLi.length; i++) {
//         listLi[i].addEventListener(`click`, function () {
//             alert()
//         })
//     }
// }

function removeButton() {
    const buttonLi = document.querySelectorAll (`li button`)
    for (let i = 0; i < buttonLi.length; i++) {
        buttonLi[i].addEventListener(`click`, function () {
            data.splice(i,1)
            addLi()
        })
        
    }
}

function checkboxClick() {
    // TODO: 삭제버튼 클릭 시 complete가 변경됨
    const checkbox = document.querySelectorAll(`li input`) // li 로 변수명 수정
    // console.log(checkbox)
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener(`click`, function () {
            if (data[i].completed == 1) {
                checkbox[i].parentNode.classList.remove(`grey`)
                data[i].completed = 0
                return
            } 
            checkbox[i].parentNode.classList.add(`grey`)
            data[i].completed = 1
        })
        
    }
}

function addLi() {
    const ul = document.querySelector(`ul`)
    let htmlString = ``
    for (let i = 0; i < data.length; i++) {
        htmlString += `<li class="${data[i].completed == 1 ? "grey" : ''}">
            <input type="checkbox" ${data[i].completed == 1 ? "checked" : ''}>${data[i].title}<button>삭제</button>
        </li>`
    }
    ul.innerHTML = htmlString
    
    // liClick()
    removeButton()
    checkboxClick()
}

// 숙제: 이벤트 위임으로 변경

