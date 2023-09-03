'use client';

import React, { FC } from 'react';
import { useGetThread } from '@/store';

const ChartList: FC = () => {
  const { data } = useGetThread();

  return (
    <div>
      {data?.map((item) => (
        <ul key={item.id}>
          <li>{item.user}</li>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default ChartList;
