// 0: 미완료, 1: 완료
let todos = []; // ctrl d
function getData() {
  fetch('/todo')
    .then((data) => data.json())
    .then((data) => {
      todos = data;
      makeList();
    })
    .catch((err) => console.error(err));
}
// 1. li 불러오기 및 저장, 이벤트 확인, 함수 실행
getData(); //

// 2. input ID 불러오기 및 저장, 이벤트 확인, 함수 실행

// 1. 배열의 데이터 수정 후 li 전체를 새로 만들기
// 2. 배열과 상관없이 요소 추가, 수정, 삭제
const todo = document.querySelector('#todo');
todo.addEventListener('click', (e) => {
  if (e.target.classList.contains('addButton') == true) {
    todoAdd();
  }
  if (e.target.classList.contains('remove') == true) {
    todoRemove(e);
  }
  if (e.target.classList.contains('checkbox') == true) {
    todoEdit(e);
  }
});

function makeList() {
  console.log(todos);
  const ul = document.querySelector(`ul`);
  let htmlString = ``;
  for (let i = 0; i < todos.length; i++) {
    htmlString += `<li data-index="${i}" class="${
      todos[i].completed == 1 ? 'grey' : ''
    }">
        <input type="checkbox" class = 'checkbox' ${
          todos[i].completed == 1 ? 'checked' : ''
        }>${todos[i].title}<button class = "remove">삭제</button>
        </li>`;
  }
  ul.innerHTML = htmlString;
}

function todoAdd() {
  const textInput = document.querySelector(`.add`);
  if (textInput.value == ``) {
    alert(`값을 입력하세요.`);
    return;
  }
  fetch('/todo', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' // 바디 데이터를 json으로 보내겠다
      },
      body: JSON.stringify({title : textInput.value}) // JSON.stringify: 객체를 json형태로 변환해줌
  })
    .then((data) => data.json())
    .then((data) => {
      todos.push({
        id: todos[todos.length - 1].id + 1,
        title: textInput.value,
        completed: 0,
      });
      makeList();
    })
    .catch((err) => console.error(err));
  

  textInput.value = ``;
}

function todoRemove(e) {
  todos.splice(e.target.parentNode.dataset.index, 1);
  makeList();
}

function todoEdit(e) {
  const index = e.target.parentNode.dataset.index;
  if (todos[index].completed == 1) {
    e.target.parentNode.classList.remove(`grey`);
    todos[index].completed = 0;
    return;
  }
  e.target.parentNode.classList.add(`grey`);
  todos[index].completed = 1;
}
