import axios from 'axios';
import APP from '../config/app';

const api = axios.create({
  baseURL: APP.URL_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getEarthquakes = async () => {
  try {
    const {data} = await api.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
    return data.features;
  } catch (error) {
    console.log(error);
  }
};

export default api;
