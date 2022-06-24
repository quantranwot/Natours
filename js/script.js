const navItems = document.querySelectorAll(".navigation__item");
const navCheckbox = document.querySelector(".navigation__checkbox");

for (let item of navItems) {
  item.addEventListener("click", () => {
    navCheckbox.checked = false;
  });
}
