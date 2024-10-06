const menus = document.querySelectorAll('.list-menu li a[href="#"]');
const megaMenuWrapper = document.querySelector(".mega-menu");
const megaMenus = document.querySelectorAll(".mega-menu-item");

const hideMegaMenu = (megaMenuElement) => {
    setTimeout(() => {
        megaMenuElement.classList.remove('active');
    },  1000);

}

const showMegaMenu = (megaMenuElement) => { 
    megaMenuElement.classList.add('active');
}

const addEventAtMenu = (menus, megaMenuElement, callBackShow, callBackHide  ) => {
    
    menus.forEach((menu) => {
        menu.addEventListener('mouseover', function () {
            callBackShow(megaMenuElement);
        })

        menu.addEventListener('mouseleave', function () {
            callBackHide(megaMenuElement);
        })
    })

};


addEventAtMenu(menus, megaMenuWrapper, showMegaMenu, hideMegaMenu);
// megaMenus.forEach((megaMenu) => {
//     megaMenu.addEventListener("mouseenter", function () {
//       megaMenuWrapper.classList.add("active");
//     });
//     megaMenu.addEventListener("mouseleave", function () {
  
//       setTimeout(() => {
//         megaMenuWrapper.classList.remove("active");
//       }, 1000);
//     });
//   });