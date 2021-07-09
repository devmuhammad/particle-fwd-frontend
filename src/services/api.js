
import axios from 'axios';

const PARTICLE_API = 'https://particle-fwd-api.herokuapp.com/'

export const getAllCars = () => {
      return axios.get(PARTICLE_API);
}