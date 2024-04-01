import { useEffect, useState } from "react"

function PlanetCard() {
    const [planets, setPlanets] = useState([])

    useEffect(getPlanetData, [])

    function getPlanetData() {
        fetch('https://swapi.dev/api/planets')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setPlanets(data.results)
            })
    }

    return (
        <>
            {planets.map(function(planet) { 
               
                return (
                    
                    <ul key={planet.name}>
                        <li>Name: {planet.name}</li>
                        <li>Rotation Period: {planet.rotation_period}</li>
                        <li>Orbital Period: {planet.orbital_period}</li>
                        <li>Diameter: {planet.diameter}</li>
                        <li>Climate: {planet.climate}</li>
                        <li>Gravity: {planet.gravity}</li>
                        <li>Terrain: {planet.terrain}</li>
                        <li>Surface Water: {planet.surface_water}</li>
                        <li>Population: {planet.population}</li>
                    </ul>  
                )
             })}
        </>
    )
}

export default PlanetCard