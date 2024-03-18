const btnsToggle = document.querySelectorAll(".wrapper-accordeon__head-icon");

btnsToggle.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    let currentBox = e.target.closest(".wrapper-accordeon");
    let currentContent = document.querySelectorAll(".wrapper-accordeon__body");
    currentBox.classList.toggle("active");
    if (currentBox.classList.contains("active")) {
      currentContent[i].style.maxHeight = currentContent[i].scrollHeight + "px";
      console.log(currentContent[i], i);
    } else {
      currentContent[i].style.maxHeight = 0;
    }
  });
});
