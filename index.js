const accordeons = document.querySelectorAll(".wrapper-accordeon");

function updateContent(el, content) {
  if (el.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.willChange = "max-height";
  } else {
    content.style.maxHeight = "0";
    content.style.willChange = "auto";
  }
}

accordeons.forEach((el) => {
  const btnToggle = el.querySelector(".wrapper-accordeon__head-icon");
  const content = el.querySelector(".wrapper-accordeon__body");

  btnToggle.addEventListener("click", () => {
    el.classList.toggle("active");
    updateContent(el, content);
  });
});

window.addEventListener("resize", () => {
  accordeons.forEach((el, i) => {
    const content = el.querySelector(".wrapper-accordeon__body");

    updateContent(el, content);
  });
});
