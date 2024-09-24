import data from "./data.json";
import PokemonCard from "../components/PokemonCard";

// ====== DOM Selection ======
const pokemonContainer = document.querySelector("[pokemon-container]");

const pokemonCollection = data.map(({ name, image, description, link }) => {
  return PokemonCard(image, name, description, link);
});

pokemonCollection.forEach((pokemonEl) => {
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
