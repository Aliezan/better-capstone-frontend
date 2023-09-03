'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { User } from './types';

const baseURL = 'https://64939c210da866a953668936.mockapi.io/users/Users';

async function muteUser(id: number) {
  const res = await axios.put(`${baseURL}/${id}`, { muted: true });
  return res.data as User[];
}

const useMuteUser = () =>
  useMutation({
    mutationFn: (id: number) => muteUser(id),
  });

export default useMuteUser;
