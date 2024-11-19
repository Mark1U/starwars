import { IFilm } from "./IFilm"
import { IPeople } from "./IPeople"
import { IPlanet } from "./IPlanets"

export interface IResult {
    count: number
    next: string
    previous: any
    results: IPlanet[] | IFilm[] | IPeople[]
}