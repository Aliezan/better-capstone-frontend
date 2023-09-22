import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Thread from './types';

const baseURL =
  'https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads';

const getThread = async () => {
  const res = await axios.get(baseURL);
  return res.data as Thread[] | undefined;
};

const useGetThread = () =>
  useQuery({
    queryKey: ['thread'],
    queryFn: getThread,
  });

export default useGetThread;
