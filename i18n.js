
const translations = {
  pt: {
    title: "Organizador de Tarefas",
    add: "Adicionar",
    filter: "Filtrar",
    all: "Todas",
    done: "Concluídas",
    todo: "Pendentes",
    work: "Trabalho",
    study: "Estudos",
    personal: "Pessoal",
    low: "Baixa",
    medium: "Média",
    high: "Alta",
    allCategories: "Todas as Categorias",
    allPriorities: "Todas as Prioridades",
  },
  en: {
    title: "Task Organizer",
    add: "Add",
    filter: "Filter",
    all: "All",
    done: "Done",
    todo: "Pending",
    work: "Work",
    study: "Study",
    personal: "Personal",
    low: "Low",
    medium: "Medium",
    high: "High",
    allCategories: "All Categories",
    allPriorities: "All Priorities",
  }
};


function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-option]").forEach(el => {
    const key = el.getAttribute("data-i18n-option");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt";
  setLang(saved);
});
