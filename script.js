const menus = document.querySelectorAll('.list-menu li a[href="#"]');
const megaMenuWrapper = document.querySelector(".mega-menu");
const megaMenus = document.querySelectorAll(".mega-menu-item");

let timeOutMegaMenu;

const hideMegaMenu = (megaMenuElement) => {
  timeOutMegaMenu = setTimeout(() => {
    megaMenuElement.classList.remove("active");
  }, 1000);
};

const showMegaMenu = (megaMenuElement) => {
  clearTimeout(timeOutMegaMenu);
  megaMenuElement.classList.add("active");
};

const addEventAtMenu = (menus, megaMenuElement, callBackShow, callBackHide) => {
  menus.forEach((menu) => {
    menu.addEventListener("mouseover", function () {
      callBackShow(megaMenuElement);
    });

    menu.addEventListener("mouseleave", function () {
      callBackHide(megaMenuElement);
    });
  });
};

addEventAtMenu(menus, megaMenuWrapper, showMegaMenu, hideMegaMenu);
addEventAtMenu(megaMenus, megaMenuWrapper, showMegaMenu, hideMegaMenu);
