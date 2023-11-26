class Menu {
  /**
   *
   */
  constructor() {
    document.querySelector(".hamburger")!.addEventListener("click", () => {
      document.querySelector(".nav-links")!.classList.toggle("expanded");
    });
  }
}

new Menu();