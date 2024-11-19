import { IResult } from './interfaces/IResult';
import { IFilm } from "./interfaces/IFilm";
import { IPlanet } from "./interfaces/IPlanets";
import { IPeople } from "./interfaces/IPeople";

const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
const output = document.querySelector("#output") as HTMLDivElement;
// const modal = document.getElementById("pokemonModal");

const btnFilms = document.getElementById("btnFilms");
const btnPeople = document.getElementById("btnPeople");
const btnPlanets = document.getElementById("btnPlanets");

const scrollTop = document.getElementById("scrollTop");

// const span = document.getElementsByClassName("close")[0];
// const searchCount = document.getElementById("searchCount");
// const logo = document.getElementById("logo");

const BASE_URL: string = "http://swapi.dev/api/";

let peopleResult: IResult;
let planetsResult: IResult;
let filmsResult: IResult;

const display = () => {
    output.textContent = ""
    console.log("Display: " + selCategory)
    console.log({ peopleResult, planetsResult, filmsResult })

    switch (selCategory) {
        case 'films':
            filmsResult.results.forEach((item) => {
                const film = item as IFilm
                output.innerHTML += `<article>
<h3>${film.title}</h3>
<p>Director: ${film.director}</p>
<p>Edited: ${film.edited.substring(0, 4)}</p>
<p>Created: ${film.created.substring(0, 4)}</p>
</article>`;
            })
            break;

        case 'planets':
            planetsResult.results.forEach((item) => {
                const planet = item as IPlanet
                output.innerHTML += `<article>
<h3>${planet.name}</h3>
<p>Climate: ${planet.climate}</p>
<p>Edited: ${planet.edited.substring(0, 4)}</p>
<p>Created: ${planet.created.substring(0, 4)}</p>
<p>Diameter: ${planet.diameter}</p>
<p>Population: ${planet.population}</p>
</article>`;
            })
            break;

        case 'people':
            peopleResult.results.forEach((item) => {
                const person = item as IPeople
                output.innerHTML += `<article>
<h3>${person.name}</h3>
<p>Birtyear: ${person.birth_year}</p>
<p>Edited: ${person.edited.substring(0, 4)}</p>
<p>Created: ${person.created.substring(0, 4)}</p>
</article>`;
            })
            break;

    }

}


fetch(BASE_URL + "people")
    .then((resp) => resp.json())
    .then((data: IResult) => peopleResult = data)

fetch(BASE_URL + "films")
    .then((resp) => resp.json())
    .then((data: IResult) => filmsResult = data)
    .then(() => display())

fetch(BASE_URL + "planets")
    .then((resp) => resp.json())
    .then((data: IResult) => planetsResult = data)


let selCategory = "films"

btnPlanets?.addEventListener('click', () => {
    searchInput.value = "";
    selCategory = 'planets'
    display()
})


btnFilms?.addEventListener('click', () => {
    searchInput.value = "";
    selCategory = 'films'
    display()
})


btnPeople?.addEventListener('click', () => {
    searchInput.value = "";
    selCategory = 'people'
    display()
})

scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))