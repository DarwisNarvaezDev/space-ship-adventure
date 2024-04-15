import { SpaceCoordinates } from "../interfaces/SpaceCoordinates";
import { PlanetNames } from "./PlanetNames";

const FLIGHT_TIME = 180;

export const PlanetsCoordinates: SpaceCoordinates[] = [
    { planetName: PlanetNames.MARS, distance: 54.6, flightTime: FLIGHT_TIME, rocketSpeed: 3.5 }
    { planetName: PlanetNames.SATURN, distance: 1.2, flightTime: FLIGHT_TIME, rocketSpeed: 77.14 }
    { planetName: PlanetNames.VENUS, distance: 42, flightTime: FLIGHT_TIME, rocketSpeed: 2.7 }
]