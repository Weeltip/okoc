document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll(".menu__link-spoller");

  menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const currentPodmenu = link.nextElementSibling;

      // Закрытие других подменю
      menuLinks.forEach(item => {
        const podmenu = item.nextElementSibling;
        if (item !== link && podmenu) {
          item.classList.remove("link-spoller_active");
          podmenu.classList.remove("podmenu_active");
          podmenu.style.height = "0";
          podmenu.style.paddingTop = "0";
        }
      });

      // Переключение активного подменю
      link.classList.toggle("link-spoller_active");
      if (currentPodmenu) {
        const isActive = currentPodmenu.classList.toggle("podmenu_active");
        currentPodmenu.style.height = isActive ? `${currentPodmenu.scrollHeight}px` : "0";
        currentPodmenu.style.paddingTop = isActive ? "36px" : "0";
      }
    });
  });

  // Закрытие всех подменю при клике вне меню
  document.addEventListener("click", function(event) {
    if (!event.target.closest(".menu__item") && !event.target.closest(".header__menu-mob")) {
      menuLinks.forEach(link => {
        const podmenu = link.nextElementSibling;
        if (podmenu) {
          link.classList.remove("link-spoller_active");
          podmenu.classList.remove("podmenu_active");
          podmenu.style.height = "0";
          podmenu.style.paddingTop = "0";
        }
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"); // Замените .header на ваш селектор шапки
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      header.classList.add("scrolled"); // Добавляем класс при прокрутке вниз
    } else if (scrollTop === 0) {
      header.classList.remove("scrolled"); // Убираем класс, если вернулись наверх
    }

    lastScrollTop = scrollTop;
  });
});



  