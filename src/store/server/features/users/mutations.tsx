import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { MutationParams } from './types';

const baseURL = 'https://64939c210da866a953668936.mockapi.io/users/Users';

const unmuteUser = (id: string) =>
  axios.put(`${baseURL}/${id}`, {
    mute_duration: '',
    mute_status: false,
  });

export const useUnmuteUser = () =>
  useMutation({
    mutationFn: unmuteUser,
  });

const unblockUser = (id: string) =>
  axios.put(`${baseURL}/${id}`, {
    block_status: false,
  });

export const useUnblockUser = () =>
  useMutation({
    mutationFn: unblockUser,
  });

const muteUser = ({ id, duration }: MutationParams) =>
  axios.put(`${baseURL}/${id}`, {
    mute_duration: duration,
    mute_status: true,
  });

export const useMuteUser = () =>
  useMutation({
    mutationFn: muteUser,
  });

const blockUser = (id: string) =>
  axios.put(`${baseURL}/${id}`, {
    block_status: true,
  });

export const useBlockUser = () =>
  useMutation({
    mutationFn: blockUser,
  });
