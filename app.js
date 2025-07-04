const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//adding tasks in the list
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //cross icon code.
    li.appendChild(span);
  }
  inputBox.value = ""; //after entering clears input box
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked"); //changing the icon on clicking li
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // deleting a task on clicking the cross code
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //saving data to browsers local storage
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); //showing the task after refreshing the browser
}
showTask();
