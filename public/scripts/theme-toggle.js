const btn = document.getElementById("theme-toggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

btn?.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  console.log("Dark mode:", isDark);
});
