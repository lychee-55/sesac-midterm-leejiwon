/* 1. https://jsonplaceholder.typicode.com/todos 로부터 데이터를 불러와서 추가해주는 함수 getTodos() 선언 */
// getTodos()는 추후에 HTML DOM 내용이 완전히 로드되었을 때 실행되어야 합니다.
document.addEventListener("DOMContentLoaded", async function getTodos() {
  await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  }).then((res) => {
    console.log(res.data);
    console.log(res.data[0].title);
    const todoUl = this.documentElement.querySelector(".todoUl");
    console.log(todoUl);
    for (let i = 0; i < 10; i++) {
      const checkbox = document.createElement("input");
      const li = document.createElement("li");
      const text = document.createElement("span");
      const deleteButton = document.createElement("button");
      checkbox.type = "checkbox";
      checkbox.name = "check";
      text.innerText = res.data[i].title;
      deleteButton.textContent = "X";
      console.log(checkbox.value);
      li.classList.add("li");
      li.appendChild(checkbox);
      li.appendChild(text);
      li.appendChild(deleteButton);
      todoUl.append(li);

      if (checkbox.checked) {
        checkbox.classList.add("line");
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector("check");
});

/* 
  2. 새로운 입력창의 Todo를 Todo 목록에 추가하고, 입력창을 초기화합니다.
  - 공백이나 빈 문자열의 경우 추가될 수 없습니다.
  - 작성 버튼 클릭 시 addTodo() 함수가 실행됩니다.
  - 입력 창에서 Enter 키 입력시에도 addTodo() 함수가 실행됩니다.
*/

function addTodo() {
  const textInput = document.querySelector(".textInput");
  const todoUl = document.querySelector(".todoUl");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");
  const deleteButton = document.createElement("button");
  checkbox.type = "checkbox";
  text.innerText = textInput.value.trim();
  deleteButton.innerText = "X";

  li.classList.add("li");
  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteButton);
  todoUl.append(li);
}

/*  3. x 버튼을 클릭하면 클릭한 버튼을 갖는 Todo 항목이 삭제됩니다. */
// 삭제 함수의 이름 및 모양 변경 가능
function deleteTodo(item) {}

/* 
 4. Todo 목록 불러오기,  
 - GET https://jsonplaceholder.typicode.com/todos 요청의 응답 결과에서 맨 처음부터 10개의 원소만 잘라내어 
   투두 목록에 초기 Todo를 표시해야 합니다.
 - HTML 문서의 DOM 내용이 완전히 로드되었을 때 실행됩니다.
 - 따로 함수를 만들어도 좋고, 함수를 만들지 않아도 좋습니다.
*/
