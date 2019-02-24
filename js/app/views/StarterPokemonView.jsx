import React from 'react'

const StarterPokemonView = (props) => {

    const starters = props.starterPokemon.map((pokemon, index) => {

        return (
            <li id={pokemon.name} key={pokemon.name}>
                {   pokemon.sprites.front_default !== null
                        ? <img src={pokemon.sprites.front_default} />
                        : <p>no image found</p>
                }
                <h3>{ pokemon.name }</h3>
                <p>Height: { pokemon.height }</p>
                <p>Weight: { pokemon.weight }</p>
                <p>Base XP: { pokemon.base_experience }</p>
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