const apiAddress = "https://pokeapi.co/api/v2/pokemon/";


export const pokemonDetails = async (pokemonId) => {
  const pokemonResponse = await fetch(apiAddress + pokemonId);
  const pokemonDetails = pokemonResponse.json();
  return pokemonDetails;
};


export default pokemonDetails();

