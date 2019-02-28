import axios from 'axios';
import { Response, Request, NextFunction } from 'express';
import { IAPIResponse } from './../interfaces';

async function getAllPlanets(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const planets = [];
        let url = process.env.API_URL;
        let lastPage = false;
        while (!lastPage) {
            const { next, results } = await getPlanets(url);
            planets.push(...results);
            url = next;
            lastPage = !next;
        }
        res.send(planets);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getPlanets(url: string): Promise<IAPIResponse> {
    try {
        console.log('Requesting url:', url);
        return (await axios.get(url)).data;
    } catch (err) {
        throw err;
    }
}

export default { getAllPlanets };
