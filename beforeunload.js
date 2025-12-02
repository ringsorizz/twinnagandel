// beforeunload.js
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";
});
