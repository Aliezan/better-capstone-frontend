'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from './types';

const baseURL = 'https://64939c210da866a953668936.mockapi.io/users/Users';

async function getUser() {
  const res = await axios.get(baseURL);
  return res.data as User[];
}

const useGetUser = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

export default useGetUser;
