
import axios from 'axios';

const PARTICLE_API = 'https://particleforward.com/api/challenge/index.json'

export const getAllCars = () => {
      return axios.get(PARTICLE_API);
}