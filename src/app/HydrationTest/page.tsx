import React, { FC } from 'react';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClient';
import axios from 'axios';
import ChartList from '@/components/ChartList';
import { Thread } from '../../../types';

async function getThread() {
  const res = await axios.get(
    'https://6496d10f83d4c69925a32241.mockapi.io/api/capstone/threads',
  );
  return res.data as Thread[];
}

const HydrationTest: FC = async () => {
  const QueryClient = getQueryClient();
  await QueryClient.prefetchQuery(['thread'], getThread);
  const dehydratedState = dehydrate(QueryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ChartList />
    </Hydrate>
  );
};

export default HydrationTest;
