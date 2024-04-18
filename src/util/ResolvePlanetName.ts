import { PlanetsCoordinates } from "./PlanetsCoordinates.tsx";

const planetCoordinates = PlanetsCoordinates

export default ({distance, flightTime, rocketSpeed}): string => {
    let planetName = ''
    planetCoordinates.forEach(
        planet => {
            if (
                planet.distance == distance &&
                planet.flightTime == flightTime &&
                planet.rocketSpeed == rocketSpeed
            ) {
                planetName = planet.planetName
            }
        }
    )
    return planetName;
}