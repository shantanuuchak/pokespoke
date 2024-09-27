# Pokedex

Displays Pokémon cards from the `data.json` file.

![image](/ProductDemo.png)

## Features

- **Keyboard Accessibility**: Press `/` to quickly focus on the search bar.
- **Graceful Degradation**: Shows a "Pokemon Not Found" card when an invalid Pokémon is entered.
- **Shuffle Pokémon**: Randomizes Pokémon on every page load using [`array-shuffle`](https://www.npmjs.com/package/array-shuffle).
- **Bootstrap Components**: Built with Bootstrap (because it’s still alive and kicking, lol).
- **Parcel for Builds**: Using [Parcel](https://parceljs.org/) for fast builds and optimizations.

## Setup

1. Ensure you have Node.js and npm installed. Run: `npm install`.
2. Start the local development server with: `npm run dev`.
3. For deployment, add: `npm run build` and set `publish-directory: /dist`.
