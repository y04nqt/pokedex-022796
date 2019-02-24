import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import { fetchStarterPokemon, fetchRandomPokemon } from '../modules/PokemonModule'

import StarterPokemonView from '../views/StarterPokemonView'
import RandomPokemonView from '../views/RandomPokemonView'

class PokedexContainer extends React.Component {

    handleFetchStarterPokemon = () => {
        this.props.fetchStarterPokemon()
    }

    handleFetchRandomPokemon = () => {
        this.props.fetchRandomPokemon()
    }

    componentDidMount() {
        this.handleFetchStarterPokemon()
    }

    render() {
        return (
            <div id="pokedex-container">
                <StarterPokemonView starterPokemon={this.props.starterPokemon}/>
                <Button id="feeling-lucky-btn"
                        variant="contained" 
                        color="primary" 
                        onClick={this.handleFetchRandomPokemon}>Feeling Lucky?</Button>
                <RandomPokemonView randomPokemon={this.props.randomPokemon}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        randomPokemon: state.pokemon.randomPokemon,
        starterPokemon: state.pokemon.starterPokemon
    }
}

export default connect(
    mapStateToProps,
    { fetchStarterPokemon, fetchRandomPokemon }
)(PokedexContainer)