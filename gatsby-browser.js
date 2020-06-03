
window.onbeforeunload = function (e) {
  localStorage.setItem('scrollpos', window.scrollY);
};