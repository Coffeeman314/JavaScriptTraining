const BASE = "https://swapi.dev/api";
const selectorElement = document.getElementById("chapter-select");
const chapterNameContainer = document.getElementById("chapterName");
const selectedValue = selectorElement.options;
let defaultButtonValue = "people";
let pageValue = 1;
let contentArr = [];
const prevPageButton = document.getElementById("prev");
const nextPageButton = document.getElementById("next");

const getBaseLinks = (episode) => {
  return axios.get(`${BASE}/films/${episode}`).then((res) => {
    return res.data;
  });
};

const firstRender = () => {
  renderPage();
  renderChapterName("A New Hope");
};

selectorElement.addEventListener("change", (event) => {
  event.preventDefault();
  let chapterNum = selectedValue[selectedValue.selectedIndex];
  console.log("switch:", chapterNum.value);
  renderPage(chapterNum.value);
  renderChapterName(chapterNum.text);
});

const contentButtons = document
  .querySelector(".switchButtons")
  .addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "BUTTON") {
      event.stopPropagation();
    } else {
      defaultButtonValue = event.target.value;
      console.log(event);
      switch (event.target.value === "people") {
        case "planets":
          return renderPage();
        default:
          return renderPage();
      }
    }
  });

const getDataFromAPI = (episode = "1") => {
  return getBaseLinks(episode).then((res) => {
    if (defaultButtonValue === "people") {
      return res.characters;
    } else if (defaultButtonValue === "planets") {
      return res.planets;
    } else {
      return res.characters;
    }
  });
};

const renderChapterName = (chapterName) => {
  chapterNameContainer.innerHTML = `<h6>${chapterName}</h6>`;
};


const renderPage = (episode) => {
  
  getDataFromAPI(episode).then((arg) => {
    return arg.forEach((link) => {
      const pageContainer = document.querySelector(".pageData");
      pageContainer.innerHTML = "";
      const pageElement = document.createElement("div");
      pageElement.className = "pageElement";
      axios.get(link).then((res) => {
        defaultButtonValue === "people"
          ? (pageElement.innerHTML = `
            
            <div class="text">
            <span></span>Name: ${res.data.name}</span>
            <span>Year of birth: ${res.data.birth_year}</span>
            <span>Gender: ${res.data.gender}</span>
            </div>`)
          : (pageElement.innerHTML = `
            
            <div class="text">
            <span>Name: ${res.data.name}</span>
            <span>Diameter: ${res.data.diameter}</span>
            <span>Population: ${res.data.population}</span>
            </div>`);
        return pageContainer.append(pageElement);
      });
    });
  });
};


prevPageButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (pageValue >= 2) {
    let currPage = --pageValue;
    return contentSplicer(currPage);
  } else {
    return event.stopPropagation();
  }
});

nextPageButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (contentArr.length > 0) {
    let currPage = ++pageValue;
    return contentSplicer(currPage);
  } else if (contentArr.length = 0) {
      return event.stopPropagation();
  } else {
    return event.stopPropagation();
  }
});


firstRender();

//<div class="avatar"></div>
