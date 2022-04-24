const apiAddress = "https://pokeapi.co/api/v2/pokemon/";

const pokemonDetails = (pokemonId) =>
  (async () => {
    const pokemonResponse = await fetch(apiAddress + pokemonId);
    const pokemonDetailsResult = pokemonResponse.json();
    return pokemonDetailsResult;
  })();

export default pokemonDetails();
