let btn = document.querySelector("#click-me");
btn.addEventListener("click", (e) => {
  alert(`Hi! You clicked ${e.target}`);
});
