import { useEffect, useState } from "react"


function Charactercard() {
    const [characters, setCharacters] = useState([])

    useEffect(getCharacterData, [])

    function getCharacterData() {
        fetch('https://swapi.dev/api/people')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setCharacters(data.results)
            })
    }

    
      return (
        <>
            {characters.map(function(character) { 
                
                return (

                    <ul key={character.name}>
                        <li>Name: {character.name}</li>
                        <li>Height: {character.height}</li>
                        <li>Mass: {character.mass}</li>
                        <li>Hair Colour: {character.hair_color}</li>
                        <li>Eye Colour: {character.eye_color}</li>
                        <li>Skin Colour: {character.skin_color}</li>
                        <li>Birth Year: {character.birth_year}</li>
                        <li>Gender: {character.gender}</li>
                        <li>Home World: </li>
                        
                    </ul>  
                )
             })}
        </>
    )
}


export default Charactercard
