{
    const welcome = () => {
        console.log("Hello Neo...")
    };

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const navElement = document.querySelector(".js-nav");
        const headerElement = document.querySelector(".js-header");
        const mainHeaderElement = document.querySelector(".js-mainHeader");
        const frontendHeaderElement = document.querySelector(".js-frontendHeader");
        const hobbyHeaderElement = document.querySelector(".js-hobbyHeader");
        const hobbyLinkElement = document.querySelector(".js-hobbyLink");
        const footerElement = document.querySelector(".js-footer");
        const tableLinks = document.querySelectorAll(".js-tableLink");
        const navLinkSites = document.querySelectorAll(".js-linkSite");
        const tableCells = document.querySelectorAll(".js-tableCell");
        const tableHeaders = document.querySelectorAll(".js-tableHeader");
        const headerButtonWordElement = document.querySelector(".js-buttonWord");

        bodyElement.classList.toggle("body--darkTheme");
        navElement.classList.toggle("nav--darkTheme");
        headerElement.classList.toggle("header--darkTheme");
        mainHeaderElement.classList.toggle("main--darkTheme");
        frontendHeaderElement.classList.toggle("frontend--darkTheme");
        hobbyHeaderElement.classList.toggle("hobby--darkTheme");
        hobbyLinkElement.classList.toggle("hobby__link--darkTheme");
        footerElement.classList.toggle("footer--darkTheme");
        tableLinks.forEach((tableLink) => {
            tableLink.classList.toggle("table__links--darkTheme")

        });
        navLinkSites.forEach((navLinkSite) => {
            navLinkSite.classList.toggle("nav_linkSite--darkTheme")

        });
        tableCells.forEach((tableCell) => {
            tableCell.classList.toggle("table__cell--darkTheme")

        });
        tableHeaders.forEach((tableHeader) => {
            tableHeader.classList.toggle("table__header--darkTheme")

        });
        headerButtonWordElement.innerText = bodyElement.classList.contains("body--darkTheme") ? "jasny" : "ciemny"
    };

    const init = () => {
        const headerThemeButtonElement = document.querySelector(".js-themeButton");
        headerThemeButtonElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}
