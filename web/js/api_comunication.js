const apiAddress = "https://pokeapi.co/api/v2/pokemon/";
const herokuAddress = "https://fast-shore-19628.herokuapp.com/";

const pokemonDetails = async (pokemonId) => {
  const pokemonResponse = await fetch(apiAddress + pokemonId);
  const pokemonDetailsResult = await pokemonResponse.json();
  return pokemonDetailsResult;
};

export default pokemonDetails;
