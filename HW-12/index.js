const BASE = "https://swapi.dev/api";

// const getEpisodeName = document.getElementById('chapter-select');
// const getInfoClick = document.getElementById('submit')
// getEpisodeNumber.addEventListener('change', (event) =>{
//   getPeopleLinks(event.target.value);

// }) 

// getInfoClick.addEventListener('click', (event) => {
//   getPeopleLinks()
// })
const frm = document.getElementById('getEpisodeName')
const btn = document.getElementById('submit')

frm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target)
})

///////////////PEOPLE////////////////
const getPeopleLinks = (episodeNum) => {
  console.log(`${BASE}/films/${episodeNum || '1'}`)
  return axios.get(`${BASE}/films/${episodeNum || '1'}`).then((res) => {

    return console.log(res.data.characters);
  });
};

const renderPeople = () => {
    getPeopleLinks().then((arg) => {
    return arg.forEach((link) => {
      const peopleContainer = document.querySelector(".pageData");
      peopleContainer.innerHTML = "";
      const personElement = document.createElement("div");
      personElement.className = "person";
      axios.get(link).then((res) => {
        personElement.innerHTML = `
      <div class="avatar"></div>
        <span class = "char-name">Name: ${res.data.name}</span>
        <span class = "char-date">Year of birth: ${res.data.birth_year}</span>
        <span class = "char-gender">Gender: ${res.data.gender}</span>
        `;
        return peopleContainer.append(personElement);
      });
    });
  });
}

///////////////PLANETS////////////////
const getPlanetsLinks = () => {
  return axios.get(BASE + "/films/5").then((res) => {
    return res.data.planets;
  });
};
const renderPlanets = () => {
  getPlanetsLinks().then((arg) => {
    return arg.forEach((link) => {
      const planetsContainer = document.querySelector(".pageData");
      planetsContainer.innerHTML = "";
      const planetElement = document.createElement("div");
      planetElement.className = "planet";
      axios.get(link).then((res) => {
        planetElement.innerHTML = `
      <div class="avatar"></div>
        <span class = "char-name">Name: ${res.data.name}</span>
        <span class = "char-date">Diameter: ${res.data.diameter}</span>
        <span class = "char-gender">Population: ${res.data.population}</span>
        `;
        return planetsContainer.append(planetElement);
      });
    });
  });
}








