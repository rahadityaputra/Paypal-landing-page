const menus = document.querySelectorAll(".list-menu li:has(a)");
const megaMenuWrapper = document.querySelector(".mega-menu");
const megaMenus = document.querySelectorAll(".mega-menu-item");
// const icons = document.querySelectorAll('li .icon');

const rotateIcon = (icon) => {
  console.log(icon);

  icon.classList.toggle("rotate-180");
};

let timeOutMegaMenu;

const hideMegaMenu = (megaMenuElement) => {
  timeOutMegaMenu = setTimeout(() => {
    megaMenuElement.classList.add("hidden");
  }, 1000);
};

const showMegaMenu = (megaMenuElement) => {
  clearTimeout(timeOutMegaMenu);
  megaMenuElement.classList.remove("hidden");
};

// function yang menerima argumen id target, dan show : true / false;
const toggleMegaMenu = (target, show) => {
  // menangkap element susuai id target
  const megaMenuTarget = document.querySelector(
    `.mega-menu-item[data-id="${target}"]`
  );
  // jika show = true , maka  show mega menu
  if (show) {
    // hide semua menu terlebih dahulu
    megaMenus.forEach((megaMenu) => { 
      megaMenu.classList.add("hidden");
    })

    // kemudian  show mega menu yang sesuai dengan id target
    showMegaMenu(megaMenuTarget);

  } else {
    // jika  show = false maka hide mega menu
    hideMegaMenu(megaMenuTarget);
  }
};

// beri event untuk semua menu yang memiliki tag a di dalamnya
menus.forEach((menu) => {
  menu.addEventListener("mouseover", function () {
    const target = menu.dataset.target;
    if (target) {
      toggleMegaMenu(target, true);
    }
  });

  menu.addEventListener("mouseleave", function () {
    const target = menu.dataset.target;
    if (target) {
      toggleMegaMenu(target, false);
    }
  });
});

// beri event untuk semua mega menu
megaMenus.forEach((megaMenu) => {
  megaMenu.addEventListener("mouseover", () => { toggleMegaMenu(megaMenu.dataset.id, true) });
  megaMenu.addEventListener("mouseleave", () => { toggleMegaMenu(megaMenu.dataset.id, false) });
})
