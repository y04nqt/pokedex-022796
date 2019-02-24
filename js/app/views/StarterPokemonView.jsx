import React from 'react'

import { getPokeGif, capFirstLetter } from '../helpers/helper'

const StarterPokemonView = (props) => {

    const starters = props.starterPokemon.map((pokemon, index) => {

        let pokeUrl = getPokeGif(pokemon.name)

        if(pokeUrl === null) {
            pokeUrl = (pokemon.sprites.front_default !== null ? pokemon.sprites.front_default : null)
        }

        return (
            <li id={pokemon.name} className="starterPokemons" key={pokemon.name}>
                {   pokeUrl !== null
                        ? <img src={ pokeUrl } className="alignSelfCenter pokeImg" />
                        : <p className="alignSelfCenter">no image found</p>
                }
                <h3 className="alignSelfCenter niceMarginSpacing">{ capFirstLetter(pokemon.name) }</h3>
                <p className="alignSelfCenter niceMarginSpacing">Height: { pokemon.height }</p>
                <p className="alignSelfCenter niceMarginSpacing">Weight: { pokemon.weight }</p>
                <p className="alignSelfCenter niceMarginSpacing">Base XP: { pokemon.base_experience }</p>
            </li>
        )
    })

    return (
        <ul id="starter-list">
            { starters }
        </ul>
    )
}

export default StarterPokemonView