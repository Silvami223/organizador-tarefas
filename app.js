let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const category = document.getElementById("categorySelect").value;
  const priority = document.getElementById("prioritySelect").value;
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, category, priority, done: false });
  input.value = "";
  saveTasks();
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const filter = document.getElementById("filterSelect").value;
  const filterCategory = document.getElementById("filterCategorySelect").value;
  const filterPriority = document.getElementById("filterPrioritySelect").value;
  const lang = localStorage.getItem("lang") || "pt";

  const categoryLabels = {
    pt: { work: "Trabalho", study: "Estudos", personal: "Pessoal" },
    en: { work: "Work", study: "Study", personal: "Personal" }
  };

  const priorityLabels = {
    pt: { low: "Baixa", medium: "Média", high: "Alta" },
    en: { low: "Low", medium: "Medium", high: "High" }
  };

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    // Filtrar por status
    if ((filter === "done" && !task.done) || (filter === "todo" && task.done)) return;

    // Filtrar por categoria
    if (filterCategory !== "all" && task.category !== filterCategory) return;

    // Filtrar por prioridade
    if (filterPriority !== "all" && task.priority !== filterPriority) return;

    const li = document.createElement("li");
   li.className = `flex justify-between items-center p-3 rounded border border-[var(--border-color)]
  ${task.done 
    ? "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100 line-through" 
    : "bg-[var(--bg-secondary)] text-[var(--text-main)]"}`;


    const categoryText = categoryLabels[lang][task.category] || task.category;
    const priorityText = priorityLabels[lang][task.priority] || task.priority;

    li.innerHTML = `
      <div>
        <strong>[${categoryText}]</strong> (${priorityText}) ${task.text}
      </div>
      <div class="flex gap-2">
        <button onclick="toggleDone(${index})"><i data-lucide="check-circle"></i></button>
        <button onclick="deleteTask(${index})"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    list.appendChild(li);
  });

  lucide.createIcons();
}




renderTasks();
