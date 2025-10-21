const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");

  const span = document.createElement("span");
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  pendingList.appendChild(li);
  taskInput.value = "";

  // ✅ When checkbox is clicked
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
      completedList.appendChild(li);
    } else {
      li.classList.remove("completed");
      pendingList.appendChild(li);
    }
  });

  removeBtn.addEventListener("click", () => li.remove());
}
