// import { TooltipButton } from '@/components/atoms';
import { Chart, HomeStats } from '@/components/organisms';
import React, { FC } from 'react';
import HomeContent from '@/components/organisms/HomeContent/HomeContent.organism';

const Home: FC = () => (
  <section className='bg-[#F8F8F8] min-h-screen pb-10'>
    <div className='w-full'>
      <div className='container px-20 mx-auto'>
        <div className='grid grid-cols-12 gap-1 pt-[10px]'>
          <HomeContent>
            <div className='flex gap-2 items-center mb-[30px]'>
              <h1 className='text-xl font-semibold' id='homepage'>
                Statistik 2023
              </h1>
              {/* <TooltipButton time={viewModel.lastUpdatedTime} /> */}
            </div>
            <div className='p-10 bg-white shadow-lg rounded-2xl'>
              <Chart />
            </div>
            <h2 className='text-2xl font-semibold py-[33px]'>
              Hal Yang Perlu Di perhatikan
            </h2>
            <HomeStats />
          </HomeContent>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
