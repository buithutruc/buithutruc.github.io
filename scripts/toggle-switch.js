function switchMode() {
  let toggle = document.querySelector("#dark-mode-toggle");
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      document.documentElement.setAttribute("data-theme", "darktheme");
    } else {
      document.documentElement.setAttribute("data-theme", "lighttheme");
    }
  });
}
