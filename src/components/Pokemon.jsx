import React, {useState} from "react";

const Pokemon = (props) => {
    const [pkmn, setPkmn] = useState([]);

    const fetchPokemon = () => {
        console.log("Hello!")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json()
        })
        .then(e => {
            console.log(e.results)
            setPkmn(e.results)
        })
    };

    return (
        <div>
            {/* {JSON.stringify(pkmn)} */}
            <h1>Pokemon</h1>
            <button onClick={fetchPokemon} style={{backgroundColor: "lightgray"}}>Fetch Pokemon</button>
            <hr/>
                {pkmn.length > 1 ? pkmn.map((item, idx) => {
                    return(<li key={idx}>{item.name}</li>)
                }):null}
        </div>
    );
}

export default Pokemon
