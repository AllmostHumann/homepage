console.log("Hello Neo")

let header__buttonPhotoElement = document.querySelector(".js-buttonPhoto");
let header__themeButtonElement = document.querySelector(".js-themeButton")
let main__imgElement = document.querySelector(".js-mainImg");
let header_PhotoElement = document.querySelector(".js-headerPhoto")
let bodyElement = document.querySelector(".js-body");
let navElement = document.querySelector(".js-nav")
let tableElement = document.querySelector(".js-table")
let headerElement = document.querySelector(".js-header")
let main__headerElement = document.querySelector(".js-mainHeader")
let frontend__headerElement = document.querySelector(".js-frontendHeader")
let hobby__headerElement = document.querySelector(".js-hobbyHeader")
let header__buttonWordElement = document.querySelector(".js-buttonWord")
let nav__linkSites = document.querySelectorAll(".js-linkSite")
let hobby__linkElement = document.querySelector(".js-hobbyLink")
let table__links = document.querySelectorAll(".js-tableLink")
let footerElement = document.querySelector(".js-footer")
let table__Cells = document.querySelectorAll(".js-tableCell")
let table__Headers = document.querySelectorAll(".js-tableHeader")

header__buttonPhotoElement.addEventListener("click", () => {
    main__imgElement.remove(".main__img");

});

header__themeButtonElement.addEventListener("click", () => {
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
        table__Header.classList.toggle("table__ceader--darkTheme")

    });


    header__buttonWordElement.innerText = bodyElement.classList.contains("body--darkTheme") ? "jasny" : "ciemny"

});
