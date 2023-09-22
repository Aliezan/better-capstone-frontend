import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const baseURL =
  'https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads';

const acceptReport = (id: string) =>
  axios.put(`${baseURL}/${id}`, {
    accept_status: true,
    pending_status: false,
  });

export const useAcceptReport = () =>
  useMutation({
    mutationFn: acceptReport,
  });

const denyReport = (id: string) =>
  axios.put(`${baseURL}/${id}`, { deny_status: true, pending_status: false });

export const useDenyReport = () =>
  useMutation({
    mutationFn: denyReport,
  });

const deleteThread = (id: string) => axios.delete(`${baseURL}/${id}`);

export const useDeleteThread = () =>
  useMutation({
    mutationFn: deleteThread,
  });
