const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = document.getElementById("task-input").value;
  const taskTime = document.getElementById("task-time").value;
  addTask(taskText, taskTime);
  form.reset();
});

function addTask(text, time) {
  const li = document.createElement("li");

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");
  taskDetails.innerHTML = `<strong>${text}</strong><br><small>${time}</small>`;

  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    taskDetails.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit task", text);
    const newTime = prompt("Edit time", time);
    if (newText && newTime) {
      taskDetails.innerHTML = `<strong>${newText}</strong><br><small>${newTime}</small>`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskDetails);
  li.appendChild(actions);

  taskList.appendChild(li);
}
