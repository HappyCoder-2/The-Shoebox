const productFave = document.querySelectorAll(".favourite-clicked");

for (const [i] of productFave.entries()) {
  productFave[i].addEventListener("click", (e) => {
    productFave[i].classList.toggle("js-fave-clicked");
    e.stopPropagation();
  });
}

const productInfo = document.querySelectorAll(".product-info");
const productInfoBtn = document.querySelectorAll(".product-info-btn");

for (const [i] of productInfoBtn.entries()) {
  productInfoBtn[i].addEventListener("click", (e) => {
    productInfo[i].classList.toggle("js-product-info");
    e.stopPropagation();
  });
}

const filtersBtn = document.querySelector(".filters-button");
const filters = document.querySelector(".filters");

filtersBtn.addEventListener("click", (e) => {
  filtersBtn.classList.toggle("js-filters-button");
  filters.classList.toggle("js-filters");
});

// //Search
// let inputBrands = document.querySelectorAll(".input-brand");

// for (let i = 0; i < inputBrands.length; i++) {
//   inputBrands[i].addEventListener("keyup", function () {
//     searchFunction(inputBrands[i]);
//   });
// }

// function searchFunction(i) {
//   let input = document.querySelector(".input-brand");
//   var filter, div, a;
//   filter = input.value.toUpperCase();
//   div = input.parentNode.parentNode.parentNode;
//   a = div.querySelectorAll(".filter-item");
//   for (i = 0; i < a.length; i++) {
//     let txtValue = a[i].textContent || a[i].innerText;

//     if (txtValue.indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }

// //Search
// const openSearch = document.querySelector(".open-search");
// const searchSection = document.querySelector(".search-section");
// const headerMiddle = document.querySelector(".header-middle");
// const closeSearch = document.querySelector(".close-search");

// openSearch &&
//   openSearch.addEventListener("click", () => {
//     headerMiddle.classList.add("header-middle-search-open");
//     searchSection.classList.add("search-section-open");
//     headerOverlay.classList.add("header-overlay-shown");
//     body.classList.add("fixed");
//     menuMiddle.classList.add("header-middle-open");
//   });

// closeSearch &&
//   closeSearch.addEventListener("click", () => {
//     headerMiddle.classList.remove("header-middle-search-open");
//     searchSection.classList.remove("search-section-open");
//     headerOverlay.classList.remove("header-overlay-shown");
//     body.classList.remove("fixed");
//     inputSearch.value = "";
//     searchSuggestions.classList.remove("active-search");
//     menuMiddle.classList.remove("header-middle-open");
//   });

// headerOverlay &&
//   headerOverlay.addEventListener("click", () => {
//     headerMiddle.classList.remove("header-middle-search-open");
//     searchSection.classList.remove("search-section-open");
//     headerOverlay.classList.remove("header-overlay-shown");
//     body.classList.remove("fixed");
//     inputSearch.value = "";
//     searchSuggestions.classList.remove("active-search");
//     menuMiddle.classList.remove("header-middle-open");
//   });

// //Search Funcionality
// const inputSearch = document.querySelector(".input-search");
// const searchSuggestions = document.querySelector(".search-suggestions");
// inputSearch.addEventListener("input", async (e) => {
//   if (inputSearch.value.length >= 1) {
//     searchSuggestions.classList.add("active-search");
//   } else {
//     searchSuggestions.classList.remove("active-search");
//   }
// });

// const response = `[
//   {
//       "searchGroups": [
//           {
//               "title": {
//                   "de": "Suchvorschläge"
//               },
//               "results": [
//                   {
//                       "name": "kleider damen",
//                       "uri": "/suche?q=kleider%20damen"
//                   },
//                   {
//                       "name": "kleider",
//                       "uri": "/suche?q=kleider"
//                   },
//                   {
//                       "name": "kleider sommer damen",
//                       "uri": "/suche?q=kleider%20sommer%20damen"
//                   },
//                   {
//                       "name": "kleider damen festlich",
//                       "uri": "/suche?q=kleider%20damen%20festlich"
//                   },
//                   {
//                       "name": "kleider damen sale",
//                       "uri": "/suche?q=kleider%20damen%20sale"
//                   },
//                   {
//                       "name": "kleid festlich",
//                       "uri": "/suche?q=kleid%20festlich"
//                   },
//                   {
//                       "name": "kleider damen elegant",
//                       "uri": "/suche?q=kleider%20damen%20elegant"
//                   },
//                   {
//                       "name": "kleid grün",
//                       "uri": "/suche?q=kleid%20gr%C3%BCn"
//                   },
//                   {
//                       "name": "kleider mädchen",
//                       "uri": "/suche?q=kleider%20m%C3%A4dchen"
//                   },
//                   {
//                       "name": "kleid blau",
//                       "uri": "/suche?q=kleid%20blau"
//                   }
//               ],
//               "googleRetailAttributionToken": "JpQKJDY0OTU0MzkxLTAwMDAtMjczNi05OTk2LTU4MjQyOWNjNmE3MA"
//           },
//           {
//               "title": {
//                   "de": "Passende Kategorien"
//               },
//               "results": [
//                   {
//                       "name": "Damen/Bekleidung/Kleider",
//                       "uri": "/damen/bekleidung/kleider"
//                   },
//                   {
//                       "name": "Damen/Bekleidung",
//                       "uri": "/damen/bekleidung"
//                   },
//                   {
//                       "name": "Sale/Damen/Bekleidung",
//                       "uri": "/sale/damen/bekleidung"
//                   },
//                   {
//                       "name": "Kinder/Babybekleidung/Kleider \u0026 Röcke",
//                       "uri": "/kinder/babybekleidung/kleider-und-roecke"
//                   },
//                   {
//                       "name": "Kinder/Mädchenbekleidung/Kleider \u0026 Röcke",
//                       "uri": "/kinder/maedchenbekleidung/kleider-und-roecke"
//                   }
//               ]
//           }
//       ]
//   }
// ]`;

// inputSearch.addEventListener("input", async (e) => {
//   const parsedJson = JSON.parse(response);
//   document.querySelector(".search-suggestions-subsection-title").innerText =
//     parsedJson[0].searchGroups[0].title.de;
//   document.querySelector(
//     ".search-suggestions-subsection-title.bottom"
//   ).innerText = parsedJson[0].searchGroups[1].title.de;

//   const suggestedLinkBlockTop = document.querySelector(
//     ".search-suggestions-links"
//   );
//   const suggestedLinkBlockTopData = parsedJson[0].searchGroups[0].results
//     .map((link) => `<a href=${link.uri}>${link.name}</a>`)
//     .join(" ");
//   suggestedLinkBlockTop.innerHTML = suggestedLinkBlockTopData;

//   const suggestedLinkBlockBottom = document.querySelector(
//     ".search-suggestions-links.bottom"
//   );
//   const suggestedLinkBlockBottomData = parsedJson[0].searchGroups[1].results
//     .map((link) => `<a href=${link.uri}>${link.name}</a>`)
//     .join(" ");
//   suggestedLinkBlockBottom.innerHTML = suggestedLinkBlockBottomData;

//   // if (inputSearch.value.length >= 1) {
//   //   // const request = ``
//   //   // const response = await fetch(
//   //   //   request, {
//   //   //   method: 'GET',
//   //   // });
//   //   // const data = await response.json();
//   //   // const parsedData = JSON.parse(data);
//   //   console.log(response);
//   // }
// });

// // on click on show all
// document
//   .querySelector(".search-suggestions-link.show-all")
//   .addEventListener("click", (e) => {
//     window.open(`https://www.galeria.de/suche?q=${inputSearch.value}`, "_self");
//     e.preventDefault();
//   });

// window.scrollTo(xCoord, yCoord);
// window.scrollTo({ top: 0, behavior: "smooth" });

const scrollToStart = document.querySelector(".scroll-to-start");

scrollToStart.addEventListener("click", (e) => {
  window.scrollTo({ left: 0, behavior: "smooth" });
});

function ScrollToStart() {
  const backStart = document.querySelector(".scroll-to-start");
  var scrollPosition =
    window.pageXOffset || document.documentElement.scrollRight;
  window.addEventListener("scroll", function () {
    var currenScrollPosition =
      window.pageXOffset || document.documentElement.scrollRight;
    if (currenScrollPosition > scrollPosition) {
      backStart.style.display = "flex";
    } else {
      backStart.style.display = "none";
    }
  });
}
ScrollToStart();
