// Появление кнопки при прокрутке
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth >= 900) { // Проверяем, меньше ли ширина окна 900px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("backToTop").style.display = "block";
    } else {
      document.getElementById("backToTop").style.display = "none";
    }
  } else {
    document.getElementById("backToTop").style.display = "none"; // Скрываем кнопку, если ширина больше 900px
  }
}


// Возврат наверх при клике
document.getElementById("backToTop").onclick = function() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
};
