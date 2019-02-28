export interface IAPIResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPlanet[];
}

interface IPlanet {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}
