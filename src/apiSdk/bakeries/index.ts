import axios from 'axios';
import queryString from 'query-string';
import { BakeryInterface, BakeryGetQueryInterface } from 'interfaces/bakery';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBakeries = async (query?: BakeryGetQueryInterface): Promise<PaginatedInterface<BakeryInterface>> => {
  const response = await axios.get('/api/bakeries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBakery = async (bakery: BakeryInterface) => {
  const response = await axios.post('/api/bakeries', bakery);
  return response.data;
};

export const updateBakeryById = async (id: string, bakery: BakeryInterface) => {
  const response = await axios.put(`/api/bakeries/${id}`, bakery);
  return response.data;
};

export const getBakeryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/bakeries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBakeryById = async (id: string) => {
  const response = await axios.delete(`/api/bakeries/${id}`);
  return response.data;
};
