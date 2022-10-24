{
    const welcome = () => {
        console.log("Hello Neo...")
    };

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const navElement = document.querySelector(".js-nav");
        const headerElement = document.querySelector(".js-header");
        const main__headerElement = document.querySelector(".js-mainHeader");
        const frontend__headerElement = document.querySelector(".js-frontendHeader");
        const hobby__headerElement = document.querySelector(".js-hobbyHeader");
        const hobby__linkElement = document.querySelector(".js-hobbyLink");
        const footerElement = document.querySelector(".js-footer");
        const table__links = document.querySelectorAll(".js-tableLink");
        const nav__linkSites = document.querySelectorAll(".js-linkSite");
        const table__Cells = document.querySelectorAll(".js-tableCell");
        const table__Headers = document.querySelectorAll(".js-tableHeader");
        const header__buttonWordElement = document.querySelector(".js-buttonWord");

        bodyElement.classList.toggle("body--darkTheme");
        navElement.classList.toggle("nav--darkTheme");
        headerElement.classList.toggle("header--darkTheme");
        main__headerElement.classList.toggle("main--darkTheme");
        frontend__headerElement.classList.toggle("frontend--darkTheme");
        hobby__headerElement.classList.toggle("hobby--darkTheme");
        hobby__linkElement.classList.toggle("hobby__link--darkTheme");
        footerElement.classList.toggle("footer--darkTheme");
        table__links.forEach((table__link) => {
            table__link.classList.toggle("table__links--darkTheme")

        });
        nav__linkSites.forEach((nav__linkSite) => {
            nav__linkSite.classList.toggle("nav_linkSite--darkTheme")

        });
        table__Cells.forEach((table__Cell) => {
            table__Cell.classList.toggle("table__cell--darkTheme")

        });
        table__Headers.forEach((table__Header) => {
            table__Header.classList.toggle("table__header--darkTheme")

        });
        header__buttonWordElement.innerText = bodyElement.classList.contains("body--darkTheme") ? "jasny" : "ciemny"
    };

    const init = () => {
        const header__themeButtonElement = document.querySelector(".js-themeButton");
        header__themeButtonElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}
