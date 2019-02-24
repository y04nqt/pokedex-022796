import React from 'react'

const RandomPokemonView = (props) => {

    if (Object.entries(props.randomPokemon).length === 0 && props.randomPokemon.constructor === Object) {
        return null
    }

    return (
        <div id="random-pokemon-container">
            {   props.randomPokemon.sprites.front_default !== null ?
                <img src={ props.randomPokemon.sprites.front_default } />
                :
                <p >no image found</p>
            }
            <h3>{ props.randomPokemon.name }</h3>
            <p>Weight: { props.randomPokemon.weight }</p>
            <p>Height: { props.randomPokemon.height }</p>
            <p>Base XP: { props.randomPokemon.base_experience }</p>
        </div>
    )
}

export default RandomPokemonView