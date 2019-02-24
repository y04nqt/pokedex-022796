import pokemonGif from 'pokemon-gif'

export function getPokeGif(pokeName) {
    try {
        let url = pokemonGif(pokeName)
        return url
    }catch(error) {
        return null
    }
}

export function capFirstLetter(pokeName) {
    return pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
}