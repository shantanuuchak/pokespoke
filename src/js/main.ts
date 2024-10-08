// === Packages ===
import shuffle from "array-shuffle";
import Fuse from "fuse.js";

// === General Imports ===
import "../css/style.scss";
import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// === DOM Selection ===
const pokemonContainer = document.querySelector("[pokemon-container]");
const searchEl = document.querySelector("input");

// === Types ===
type Pokemon = {
  description: string;
  name: string;
  image: string;
  link?: string;
};

// Data to work with
const pokemonData = shuffle(data);

// === Functions ===
// This function takes in a list of PokemonCards and renders them
function renderPokemon(list: Pokemon[]) {
  // Clear existing pokemons
  pokemonContainer!.textContent = "";

  // Render not found for empty
  if (!list.length) {
    const pokemon = PokemonCard({
      name: "Not found",
      description: "Try another search",
      // TODO: Add this from the public dir
      image: "https://placehold.co/200",
    });

    pokemonContainer?.appendChild(pokemon);
    return;
  }

  // Render pokemons from list
  list.forEach((pokemonEl) => {
    pokemonContainer?.appendChild(PokemonCard(pokemonEl));
  });
}

// Filter out pokemon that contains the value
function handleChange(input: string) {
  // Fuzzy Search
  const options = {
    keys: ["name", "abilities"],
    threshold: 0.5,
  };
  const fuse = new Fuse(pokemonData, options);

  // Function to perform filteration
  function performSearch() {
    if (!input) return pokemonData;

    return fuse.search(input).map((result) => result.item);
  }

  const filteredPokemon = performSearch();

  // Pass the list to renderPokemon function
  renderPokemon(filteredPokemon);
}

// === Add listeners ===
// Debouncer Implementation
let debounceTimer: number;
searchEl!.addEventListener("input", (e: Event) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    handleChange(e.target.value.trim().toLowerCase());
  }, 300);
});

// === Load Initial List on DOM first Render ===
document.addEventListener("DOMContentLoaded", () => {
  renderPokemon(pokemonData);
});

// === Add / Keystroke Accessibility ===
document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    // Don't type
    e.preventDefault();
    searchEl!.focus();
  }
});
