import axios from 'axios'
import ReduxThunk from 'redux-thunk'

const GET_STARTERS = "GET_STARTERS",
      GET_RANDOM = "GET_RANDOM"

export default function reducer(state={
    starterPokemon: [],
    randomPokemon: {}
}, action) {

    switch(action.type){
        case GET_STARTERS:
            return {
                ...state,
                starterPokemon: [action.payload[0].data, action.payload[1].data, action.payload[2].data]
            }
        case GET_RANDOM:
            return {
                ...state,
                randomPokemon: action.payload
            }
        default:
            return state
    }
}

export function fetchStarterPokemon() {
    return function(dispatch) {
        return (
            axios.all([
                axios.get('https://pokeapi.co/api/v2/pokemon/7/'),
                axios.get('https://pokeapi.co/api/v2/pokemon/4/'),
                axios.get('https://pokeapi.co/api/v2/pokemon/1/')
            ])
            .then((resp) => {
                dispatch ({
                    type: GET_STARTERS,
                    payload: resp,
                })
            })
        )
    }
}

export function fetchRandomPokemon() {
    const random = Math.floor((Math.random() * 807) + 1)

    return function (dispatch) {
        return (
            axios.get("https://pokeapi.co/api/v2/pokemon/"+random+"/")
            .then((resp) => {
                dispatch({
                    type: GET_RANDOM,
                    payload: resp.data,
                })
            })
        )
    }
}