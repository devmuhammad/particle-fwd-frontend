
import axios from 'axios';

const PARTICLE_API = 'http://localhost:9900/'

export const getAllCars = () => {
      return axios.get(PARTICLE_API);
}