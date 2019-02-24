import React from 'react'

import { getPokeGif, capFirstLetter } from '../helpers/helper'

const RandomPokemonView = (props) => {

    if (Object.entries(props.randomPokemon).length === 0 && props.randomPokemon.constructor === Object) {
        return null
    }

    let pokeUrl = getPokeGif(props.randomPokemon.name)

    if(pokeUrl === null) {
        pokeUrl = (props.randomPokemon.sprites.front_default !== null ? props.randomPokemon.sprites.front_default : null)
    }

    if(props.randomPokemon.id === 258) {
        pokeUrl = "https://i.kym-cdn.com/photos/images/original/000/056/244/Mudkip_baked_in_3D_by_cezkid.gif"
        return (
            <div id="random-pokemon-container">
                <h1>I Herd U Liek Mudkipz</h1>
                {   pokeUrl !== null ?
                    <img src={ pokeUrl } className="alignSelfCenter pokeImg"/>
                    :
                    <p className="alignSelfCenter">no image found</p>
                }
                <h3 className="alignSelfCenter niceMarginSpacing">{ capFirstLetter(props.randomPokemon.name) }</h3>
                <p className="alignSelfCenter niceMarginSpacing">Weight: { props.randomPokemon.weight }</p>
                <p className="alignSelfCenter niceMarginSpacing">Height: { props.randomPokemon.height }</p>
                <p className="alignSelfCenter niceMarginSpacing">Base XP: { props.randomPokemon.base_experience }</p>
            </div>
        )
    }

    return (
        <div id="random-pokemon-container">
            {   pokeUrl !== null ?
                <img src={ pokeUrl } className="alignSelfCenter pokeImg"/>
                :
                <p className="alignSelfCenter">no image found</p>
            }
            <h3 className="alignSelfCenter niceMarginSpacing">{capFirstLetter( props.randomPokemon.name) }</h3>
            <p className="alignSelfCenter niceMarginSpacing">Weight: { props.randomPokemon.weight }</p>
            <p className="alignSelfCenter niceMarginSpacing">Height: { props.randomPokemon.height }</p>
            <p className="alignSelfCenter niceMarginSpacing">Base XP: { props.randomPokemon.base_experience }</p>
        </div>
    )
}

export default RandomPokemonView