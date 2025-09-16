const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
} else if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark");
} else {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark");
  }
}

themeToggle?.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  console.log("Dark mode:", isDark);
});

