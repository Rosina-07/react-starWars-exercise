import { useEffect, useState } from "react"

function VehicleCard() {
    const [vehicles, setVehicles] = useState([])

    useEffect(getVehicleData, [])

    function getVehicleData() {
        fetch('https://swapi.dev/api/vehicles')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setVehicles(data.results)
            })
    }

    return (
        <>
            {vehicles.map(function(vehicle) { 
               
                return (
                    
                    <ul key={vehicle.name}>
                        <li>Name: {vehicle.name}</li>
                        <li>Model: {vehicle.model}</li>
                        <li>Manufacturer: {vehicle.manufacturer}</li>
                        <li>Cost in Credits: {vehicle.cost_in_credits}</li>
                        <li>Length: {vehicle.length}</li>
                        <li>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</li>
                        <li>Crew: {vehicle.crew}</li>
                        <li>Passengers: {vehicle.passengers}</li>
                        <li>Cargo Capacity: {vehicle.cargo_capacity}</li>
                        <li>Consumables: {vehicle.consumables}</li>
                        <li>Vehicle Class: {vehicle.vehicle_class}</li>
                    </ul>  
                )
             })}
        </>
    )
}

export default VehicleCard