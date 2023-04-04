import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../styles/AllCharacters.css'

function AllCharacters() {
    const [characters, sertCharacters] = useState([])
    
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=>sertCharacters(data.results))
    }, [])
    
    return (
        <div>
            <h1>List of characters</h1>
            {characters.map((character)=>{
                return (
                <div key={character.id}>
                <Link to={`/character/${character.id}`}><img src={character.image} alt={character.name} className = 'allpic' /></Link>
                        <h2>{character.name}</h2>
                    </div>
            )
        })}
    </div> 

    )
}
export default AllCharacters
