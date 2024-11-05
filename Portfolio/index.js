let modeBtn = document.querySelector("#mode");
let _box1 = document.querySelector(".box1");

modeBtn.addEventListener("click", () => {
  const _body = document.querySelector("body");

  // Toggle theme classes on the body
  _body.classList.toggle("sasuke-theme");
  _body.classList.toggle("itachi-theme");

  // Toggle box1 and alt-box1 classes
  if (_body.classList.contains("sasuke-theme")) {
    _box1.classList.remove("box1");
    _box1.classList.add("alt-box1");
  } else {
    _box1.classList.remove("alt-box1");
    _box1.classList.add("box1");
  }
});