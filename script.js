// 0: 미완료, 1: 완료
const data = [{id:1,title:`a`, completed:1},{id:2,title:`b`, completed: 0},{id:3,title:`c`, completed: 0}] // ctrl d
// 1. li 불러오기 및 저장, 이벤트 확인, 함수 실행
makeList()


// 2. input ID 불러오기 및 저장, 이벤트 확인, 함수 실행


// 1. 배열의 데이터 수정 후 li 전체를 새로 만들기 
// 2. 배열과 상관없이 요소 추가, 수정, 삭제 
const todo = document.querySelector('#todo')
todo.addEventListener('click', (e) =>{
    if (e.target.classList.contains('addButton') == true){
       todoAdd()
    }
    if (e.target.classList.contains('remove') == true){
        todoRemove(e)
    }
    if (e.target.classList.contains('checkbox') == true) {
        todoEdit(e)
    }

})

function makeList() {
    const ul = document.querySelector(`ul`)
    let htmlString = ``
    for (let i = 0; i < data.length; i++) {
        htmlString += `<li data-index="${i}" class="${data[i].completed == 1 ? "grey" : ''}">
        <input type="checkbox" class = 'checkbox' ${data[i].completed == 1 ? "checked" : ''}>${data[i].title}<button class = "remove">삭제</button>
        </li>`
    }
    ul.innerHTML = htmlString
}

function todoAdd() {
    const textInput = document.querySelector(`.add`)
    if (textInput.value == ``) {
        alert(`값을 입력하세요.`)
        return
    }
    data.push({id:data[data.length-1].id+1,title:textInput.value, completed:0})
    makeList()

    textInput.value = ``
}

function todoRemove(e) {
    data.splice(e.target.parentNode.dataset.index,1)
    makeList()
}

function todoEdit(e) {
    const index = e.target.parentNode.dataset.index
    if (data[index].completed == 1) {
        e.target.parentNode.classList.remove(`grey`)
        data[index].completed = 0
        return
    } 
    e.target.parentNode.classList.add(`grey`)
    data[index].completed = 1
}