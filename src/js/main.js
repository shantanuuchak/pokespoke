// ====== General Imports ======
import data from "./data.json";
import PokemonCard from "../components/PokemonCard";

// ====== DOM Selection ======
const pokemonContainer = document.querySelector("[pokemon-container]");
const searchEl = document.querySelector("input");

// ====== Functions ======
function renderPokemon(list) {
  // This function takes in a list of PokemonCards and renders them

  console.log(list);
  pokemonContainer.textContent = "";
  list.forEach((pokemonEl) => {
    const div = document.createElement("div");
    div.classList.add(
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "mb-3",
      "mb-sm-0",
      "py-3",
      "px-1"
    );
    div.innerHTML = pokemonEl;
    pokemonContainer.appendChild(div);
  });
}

function handleChange(value) {
  // This function runs when input value changes
  // Filter out pokemon that contains the value
  const filteredPokemon = data.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
  // Generate list of PokemonCards
  const pokecardsList = filteredPokemon.map(
    ({ name, image, description, link }) => {
      return PokemonCard(image, name, description, link);
    }
  );

  if (pokecardsList.length === 0) {
    pokecardsList.push(
      PokemonCard(
        "https://img.pokemondb.net/sprites/trainers/swsh/raihan.jpg",
        "No match",
        "Please try another search",
        false
      )
    );
  }

  // Pass the list to renderPokemon function
  renderPokemon(pokecardsList);
}

// ====== Add listeners ======
searchEl.addEventListener("input", (e) => {
  handleChange(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  // List to render on initial load
  const pokemonCollection = data.map(({ name, image, description, link }) => {
    return PokemonCard(image, name, description, link);
  });

  renderPokemon(pokemonCollection);
});
