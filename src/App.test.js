import React from 'react';

import { getAllCars } from './services/api'
import {carData} from './tests/data'
const axios = require('axios');

jest.mock('axios');

test('returns car list from API', async () => {
  axios.get.mockResolvedValue({
    data: carData
  })
  const data = await getAllCars().then(resp => {return resp.data})
  expect(data).toEqual(carData);
});

test('returns images', async () => {
  axios.get.mockResolvedValue({
    data: carData
  })
  const images = await getAllCars().then(resp => {return resp.data.images})
  expect(images).toHaveLength(5);
})
