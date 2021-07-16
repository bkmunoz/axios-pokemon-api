import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [fetch, setFetch] = useState(false);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                console.log(res)
                setPokemon(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <div>
            <button onClick={e => setFetch(!fetch)} className="btn btn-primary" >Fetch Pokemon</button>
            <hr />
            {
                fetch ?
                pokemon.map(poke => {
                    return <ul>
                        <li className="bullets">{poke.name}</li>
                        </ul>
                })
                : ""
            }
        </div>
    )
}

export default ApiCall;